// @js-ignore

/* eslint-disable no-undef */
const path = require('path')
const plugins = require('next-compose-plugins')
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
    '@react-three/drei',
    // '@react-three/postprocessing'
  ],
  { debug: false, resolveSymlinks: false } // symlink-caused loops which cause memory to get bloated exponentially.
)

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config) {
    config.plugins = config.plugins || []
    config.resolve.alias['three'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'three'
    )

    // if you want to do a custom build to reduce the size of threejs
    // config.plugins.unshift(
    //   new webpack.NormalModuleReplacementPlugin(
    //     /three.module.js/,
    //     path.resolve('src/three_builds/three_minimal.js')
    //   )
    // )

    // force to ignore transpiled module to compile faster
    config.watchOptions = {
      ignored: ['**/.git/**', '**/.next/**', '**node_modules/**'],
    }

    if (prod) {
      // reduce the size of threejs and try tree-shaking
      config.plugins.unshift(threeMinifier)
      config.resolve.plugins.unshift(threeMinifier.resolver)
      if (config.optimization.splitChunks.cacheGroups) {
        // config.optimization.splitChunks.cacheGroups.framework.test = /(?<!node_modules.*)[\\/]node_modules[\\/](scheduler|prop-types|use-subscription)[\\/]/
        config.optimization.splitChunks.maxSize = 200000
      }
    }

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
    withTM(nextConfig),
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
  ],
  nextConfig
)
