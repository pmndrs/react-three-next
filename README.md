[![dependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter) [![devDependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/dev-status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter?type=dev) ![npm](https://img.shields.io/npm/dw/create-r3f-app?color=%233792cb) [![Lighthouse Global](https://ghcdn.rawgit.org/pmndrs/react-three-next/main/public/img/scores/lighthouse.svg)](https://github.com/pmndrs/react-three-next)

# :japanese_castle: Next & React three fiber starter

This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### :japan: Demo :

[https://r3f-next-starter.vercel.app/](https://r3f-next-starter.vercel.app/)

### How to use

#### Installation

_Tailwind is the default and only stable_

```sh
yarn create r3f-app next my-app <tailwind?>
```

or

```sh
npx create-r3f-app next my-app <tailwind?>
```

### :mount_fuji: Features

- [x] Concurrent mode with React experimental
- [x] Automatically inject r3f component in the Canvas layout
- [x] Customizable loading
- [x] Support glsl, images and svg imports
- [x] PWA Support
- [x] Dynamic meta data and header using Helmet
- [x] Clean code using ESlint, Prettier and Husky

### :bullettrain_side: Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **r3f** property to the parent component.

```jsx
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
- yarn analyze
- yarn lint (Scripts)
- yarn build
- yarn start

### :mag_right: Stack

- [Threejs](https://github.com/mrdoob/three.js/): A lightweight, 3D library with a default WebGL renderer.
- [React-three-fiber](https://github.com/pmndrs/react-three-fiber): A React renderer for Threejs on the web and react-native.
- [Drei](https://github.com/pmndrs/drei): A growing collection of useful helpers and abstractions for react-three-fiber.
- [Tailwind](https://tailwindcss.com/docs): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 directly in your markup.
- [R3F-Perf](https://github.com/RenaudRohlinger/r3f-perf): Tool to easily monitor react threejs performances.

### How to contribute :

```bash
git clone https://github.com/pmndrs/react-three-next
&& cd r3f-next-starter && yarn install
# then push using the terminal to trigger Husky
```

## Maintainers :

- [@onirenaud](https://twitter.com/onirenaud) More tools and r3f tips on my twitter
