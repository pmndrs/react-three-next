const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const match = (path) => {
  if (!path.includes('three/examples/jsm')) return false
  console.info(`transpiled: ${path}`)
  return true
}

const withOffline = require('next-offline')
const withTM = require('next-transpile-modules')(
  ['three', '@react-three/drei', '@react-three/postprocessing'],
  { debug: false, unstable_webpack5: true, match } // symlink-caused loops which cause memory to get bloated exponentially.
)
console.log(withTM)
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack(config) {
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
