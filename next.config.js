// @js-ignore

/* eslint-disable no-undef */
const path = require('path')
const plugins = require('next-compose-plugins')
const images = require('next-images')
const videos = require('next-videos')
const fonts = require('next-fonts')
const reactSvg = require('next-react-svg')
const webpack = require('webpack')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

const withTM = require('next-transpile-modules')(
  [
    'three',
    '@react-three/postprocessing',
    '@react-three/drei',
    'postprocessing',
  ],
  { debug: false, resolveSymlinks: true }
)
const withPWA = require('next-pwa')

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  // target: 'serverless',
  webpack(config) {
    config.plugins = config.plugins || []

    config.resolve.alias['three'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'three'
    )

    config.resolve.alias['@react-three/drei'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      '@react-three/drei'
    )

    config.plugins.push(
      new DuplicatePackageCheckerPlugin({
        verbose: true,
        strict: true,
      })
    )
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /three.module.js/,
        path.resolve('src/utils/three.js')
      )
    )

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
}

module.exports = plugins(
  [
    [images, { exclude: path.resolve(__dirname, 'src/assets/svg') }],
    [reactSvg, { include: path.resolve(__dirname, 'src/assets/svg') }],
    fonts,
    videos,
    [withPWA, { pwa: { disable: prod ? false : true, dest: 'public' } }],
    withBundleAnalyzer,
    withTM,
  ],
  nextConfig
)
