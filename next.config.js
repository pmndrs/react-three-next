// @js-ignore

/* eslint-disable no-undef */
const path = require('path')
const withSass = require('@zeit/next-sass')
const plugins = require('next-compose-plugins')
const images = require('next-images')
const videos = require('next-videos')
const fonts = require('next-fonts')
const reactSvg = require('next-react-svg')

const withTM = require('next-transpile-modules')([
  '@react-three/drei',
  'three',
  '@react-spring/three',
  'postprocessing',
  'react-postprocessing',
])

const nextConfig = {
  target: 'serverless',
  webpack: (config) => {
    return config
  },
}

module.exports = plugins(
  [
    withSass({
      cssModules: false,
      // this is for css code spliting (scope restricted to file)
      // cssLoaderOptions: {
      //   importLoaders: 1,
      //   localIdentName: '[local]___[hash:base64:5]',
      // },
    }),
    [images, { exclude: path.resolve(__dirname, 'src/assets/svg') }],
    [reactSvg, { include: path.resolve(__dirname, 'src/assets/svg') }],
    fonts,
    videos,
    withTM,
  ],
  nextConfig
)
