[![Lighthouse Global](https://ghcdn.rawgit.org/RenaudRohlinger/r3f-next-starter/main/public/img/scores/lighthouse.svg)](https://github.com/RenaudROHLINGER/r3f-next-starter)
[![dependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter)
[![devDependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/dev-status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter?type=dev)
![npm](https://img.shields.io/npm/dw/create-r3f-app?color=%233792cb)

# :japanese_castle: Next & React three fiber starter

This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### :japan: Demo :

[https://r3f-next-starter.vercel.app/](https://r3f-next-starter.vercel.app/)

### How to use

#### Installation

Tailwind is the default

```bash
yarn create r3f-app next my-app <tailwind?|sass?>
```

or

```bash
npx create-r3f-app next my-app <tailwind?|sass?>
```

### :mount_fuji: Features

- [x] Concurrent mode with React experimental
- [x] Dark mode management
- [x] Automatically inject r3f component in the Canvas layout
- [x] Customizable loading
- [x] Support glsl, images and svg imports
- [x] PWA Support
- [x] Dynamic meta data and header using Helmet
- [x] Clean code using ESlint, Prettier and Husky

### :bullettrain_side: Architecture

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

### :control_knobs: Available Scripts

- yarn dev
- yarn lint (Scripts)
- yarn build
- yarn start

### :mag_right: Stack

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

### [:hammer_and_wrench: Todo list](https://github.com/RenaudROHLINGER/r3f-next-starter/TODO.md)
