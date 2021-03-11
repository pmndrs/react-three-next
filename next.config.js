const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withOffline = require('next-offline')
const webpack = require('webpack')
const path = require('path')

// the config break if we use next export
const nextConfig =
  process.env.EXPORT !== 'true'
    ? {
        future: {
          webpack5: true,
        },
        webpack(config) {
          config.plugins = config.plugins || []

          // if you want to do a custom build to reduce the size of threejs <-- this require webpack and path
          config.plugins.unshift(
            new webpack.NormalModuleReplacementPlugin(
              /three.module.js/,
              path.resolve('src/examples/three_builds/three_minimal.js')
            )
          )

          config.module.rules.push(
            { test: /react-spring/, sideEffects: true }, // prevent vercel to crash when deploy
            {
              test: /\.(glsl|vs|fs|vert|frag)$/,
              exclude: /node_modules/,
              use: ['raw-loader', 'glslify-loader'],
            }
          )
          return config
        },
      }
    : {}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = plugins(
  [
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
