
## How to use

```bash
yarn create r3f-app <next> my-app <sass>
```

or

```bash
npx create-r3f-app <next> my-app <sass>
```



WIP --> Fix https://github.com/martpie/next-transpile-modules then update readme


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Todo :
##### [Month of october]

- Flag React to experimental and concurrent attribut to Canvas for Double Buffering (<-- way too much unstable)
- Change architecture to Nextjs
- Use Wouter for route management ?
- @zeit/next-sass plugin ?
- Basic helpers folder
- Add onBeforeRender examples && clean shaders in helpers example
- share dom events to canvas (HTML && portal)
- prefer Zustand for states (store.js at root)
- Use use-asset repo to prefetch assets
- Update architecture based on sharing materials && geos
- Make helpers + example for DOM sync with html
- Add draco && gltfjsx example
- Add Vector3().lerp() && lerpVectors() examples
- Gltf animation
- Add CSS Preprocessor
- useGesture example
- other lib for anim ?
- Use Jotai for state management https://github.com/pmndrs/jotai (make architecture based file == provider scope ?)
- Make bash scripts for git && deploy

#### Deluxe version for tutorial :
##### [november/december]

- Camera custom tracker with 2 depth
- Camera animation
- Improve Blender python script with GUI
- Blender + Camera.blend + Python scripts
- Make bash script to automate blender


# With Three js

This example uses:

`threejs`: A lightweight, 3D library with a default WebGL renderer. The library also provides Canvas 2D, SVG and CSS3D renderers in the examples.
`react-three-fiber`: A React renderer for Threejs on the web and react-native.
`drei`: A growing collection of useful helpers and abstractions for react-three-fiber.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-three-js)


Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).