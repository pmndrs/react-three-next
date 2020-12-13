# React Three Fiber + Next ES6 starter

The main strength of this architecture is that it will automatically pick the R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

## Demo :

[https://r3f-next-starter.vercel.app/](https://r3f-next-starter.vercel.app/)

## How to use

### Installation

```bash
yarn create r3f-app next my-app <tailwind?|sass?>
```

or

```bash
npx create-r3f-app next my-app <tailwind?|sass?>
```

## Features

- Concurrent mode with React experimental
- Dark mode management
- Automatically inject r3f component in the Canvas layout
- Customizable loading
- Support glsl, images and svg imports
- PWA Support
- Dynamic meta data and header using Helmet
- Clean code using ESlint, Prettier and Husky

### Architecture

You just need to inform the nextjs page that the component is a Threejs component. For that simply add the r3f prop and that's it!

```
const Page = () => {
  return (
    <>
      <h1>Hello !</h1>
      {/* Simply add the r3f prop to the parent component -> */}
      <Group r3f />
      <h2>Bonjour.</h2>
      <MeshComponent r3f />
    </>
  )
}

export default Page
```

## Available Scripts

- yarn dev
- yarn lint (Scripts)
- yarn build
- yarn start

## Stack

- Es6
- Nextjs
- Eslint
- Babel
- Tailwind
- Prettier
- Husky
- Helmet
- [Threejs](https://github.com/mrdoob/three.js/): A lightweight, 3D library with a default WebGL renderer.
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber): A React renderer for Threejs on the web and react-native.
- [drei](https://github.com/pmndrs/drei): A growing collection of useful helpers and abstractions for react-three-fiber.
- Post processing
- React Devices Detect

#### Todo :

- [Add a switch helper to toggle dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)
- Add draco && gltfjsx example
- Add Vector3().lerp() && lerpVectors() examples
- add another repo for modules -->
- [module middle] Add custom middleware to access backend data + ENV files
- [module auth] Manage auth on routes for login
- [module gui] Custom GUI in dev mod https://github.com/cocopon/tweakpane
- [module scroll] enable dom events + share events between main dom and canvas + useScroll

- v2 - Prefetch assets
- v2 - Update architecture based on sharing materials && geos
- v2 - Make bash scripts for git && deploy

#### Deluxe Todo :

- Camera custom tracker with 2 depth
- Camera animation
- Improve Blender python script with GUI
- Blender + Camera.blend + Python scripts
- Make bash script to automate blender
