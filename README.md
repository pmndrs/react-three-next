# React Three Fiber + Next ES6 starter

## Demo :

[https://r3f-next-starter.vercel.app/](https://r3f-next-starter.vercel.app/)

## How to use

```bash
yarn create r3f-app next my-app sass
```

or

```bash
npx create-r3f-app next my-app sass
```

## Available Scripts

- yarn dev
- yarn lint (Sass and Scripts)
- yarn build
- yarn start

## Stack

- Es6
- Nextjs
- Eslint
- Babel
- Scss
- Prettier
- Husky
- Helmet
- [Threejs](https://github.com/mrdoob/three.js/): A lightweight, 3D library with a default WebGL renderer. The library also provides Canvas 2D, SVG and CSS3D - renderers in the examples.
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber): A React renderer for Threejs on the web and react-native.
- [drei](https://github.com/pmndrs/drei): A growing collection of useful helpers and abstractions for react-three-fiber.
- Post processing
- React Devices Detect

## features

- Concurrent mode with React experimental
- Code Splitting
- Canvas content and DOM loaded by page
- Transitions between routes
- Dynamic meta data and header using helmet
- Customizable loading

### Todo :

- PWA
- useGesture example
- Basic helpers folder
- Clean shaders in helpers example
- enable dom events + share events between main dom and canvas + useScroll and useGesture by default
- Add draco && gltfjsx example
- Add Vector3().lerp() && lerpVectors() examples

- v2 - Prefetch assets
- v2 - Update architecture based on sharing materials && geos
- v2 - Make bash scripts for git && deploy

#### Deluxe Todo :

- Camera custom tracker with 2 depth
- Camera animation
- Improve Blender python script with GUI
- Blender + Camera.blend + Python scripts
- Make bash script to automate blender
