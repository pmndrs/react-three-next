const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withOffline = require('next-offline')

function esbuildLoader(config, options) {
  const jsLoader = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.js')
  )
  if (jsLoader && jsLoader.use) {
    if (jsLoader.use.length > 0) {
      jsLoader.use.forEach((e) => {
        e.loader = 'esbuild-loader'
        e.options = options
      })
    } else {
      jsLoader.use.loader = 'esbuild-loader'
      jsLoader.use.options = options
    }
  }
}

// the config break if we use next export
const nextConfig =
  process.env.EXPORT !== 'true'
    ? {
        future: {
          webpack5: true,
        },
        webpack(config, { webpack, dev, isServer }) {
          config.plugins.push(
            new webpack.ProvidePlugin({
              React: 'react',
            })
          )
          // use esbuild in dev for faster HMR
          if (dev) {
            esbuildLoader(config, {
              loader: 'jsx',
              target: 'es2017',
            })
            // config.optimization.minimizer.shift()
          }

          // audio support
          config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: config.inlineImageLimit,
                  fallback: require.resolve('file-loader'),
                  publicPath: `${config.assetPrefix}/_next/static/images/`,
                  outputPath: `${isServer ? '../' : ''}static/images/`,
                  name: '[name]-[hash].[ext]',
                  esModule: config.esModule || false,
                },
              },
            ],
          })

          config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
          })

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
