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

const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')
const threeMinifier = new ThreeMinifierPlugin()

const withOffline = require('next-offline')

const withTM = require('next-transpile-modules')(
  [
    'three',
    '@react-three/postprocessing',
    '@react-three/drei',
    // 'postprocessing',
  ],
  { debug: false, resolveSymlinks: false }
)

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  // target: 'serverless',
  webpack(config) {
    config.plugins = config.plugins || []
    // if (prod) {
    if (config.optimization.splitChunks.cacheGroups) {
      config.plugins.unshift(threeMinifier)
      config.resolve.plugins.unshift(threeMinifier.resolver)
      config.optimization.splitChunks.cacheGroups.framework.test = /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|three|scheduler|prop-types|use-subscription)[\\/]/
      config.optimization.splitChunks.maxSize = 300000
    }

    // }

    // config.resolve.alias['three'] = path.resolve(
    //   __dirname,
    //   '.',
    //   'node_modules',
    //   'three'
    // )

    // config.resolve.alias['@react-three/drei'] = path.resolve(
    //   __dirname,
    //   '.',
    //   'node_modules',
    //   '@react-three/drei'
    // )

    // if you want to do a custom build to reduce the size of threejs
    // config.plugins.push(
    //   new webpack.NormalModuleReplacementPlugin(
    //     /three.module.js/,
    //     path.resolve('src/utils/three_gltf.js')
    //   )
    // )

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
    // [
    //   withPWA,
    //   { pwa: { runtimeCaching, disable: prod ? false : true, dest: 'public' } },
    // ],
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js',
            },
          ]
        },
      },
    ],
    withBundleAnalyzer,
    withTM,
  ],
  nextConfig
)
