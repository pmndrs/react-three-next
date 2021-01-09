### Examples

This folder is here to provide different possibilities of build or configuration.

#### Custom webpack configurations for next.config.js

```jsx
const path = require('path')

  webpack(config, { dev }) {
    config.plugins = config.plugins || []

    // if you want to do a custom build to reduce the size of threejs <-- this require webpack and path
    config.plugins.unshift(
      new webpack.NormalModuleReplacementPlugin(
        /three.module.js/,
        path.resolve('src/examples/three_builds/three_minimal.js')
      )
    )
    if (!dev) {
      if (config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.maxSize = 300000 // if http2 is used we can split even more to enjoy the multiplex feature
      }
    }
    // force to ignore transpiled module to compile faster
    config.watchOptions = {
      ignored: ['**/.git/**', '**/.next/**', '**node_modules/**'],
    }
    return config
  }
```

#### Use shaders :

If you want to try shaders you can important the TestShader component from the example.

```jsx
<TestShader r3f />
```
