![David](https://img.shields.io/david/pmndrs/react-three-next?color=%23000000) ![David](https://img.shields.io/david/dev/pmndrs/react-three-next?color=%23000000) [![Downloads](https://img.shields.io/npm/dt/create-r3f-app.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/create-r3f-app) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/ZZjjNvJ) [![Lighthouse Global](https://ghcdn.rawgit.org/pmndrs/react-three-next/main/public/img/scores/lighthouse.svg)](https://github.com/pmndrs/react-three-next)

# :japanese_castle: React-Three-Next starter


Lighthouse total minimum score of 93 with First Load JS of 78Kb. This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### 🔲 Demo :
![image](https://user-images.githubusercontent.com/15867665/103862887-3a4feb80-5103-11eb-8554-2a42daee4fdd.png)

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

### ⬛ Stack

- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`react-three-fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei`](https://github.com/react-spring/drei) &ndash; useful helpers for react-three-fiber
- [`tailwind`](https://tailwindcss.com/docs) &ndash; A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 directly in your markup.
- [`r3f-perf`](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.

#### Why using a custom server in dev ?

Because next-transpile-module is pretty heavy while we are working in development, we use a custom server to supply node with the `--max-old-space-size=4096` parameter which extend the basic limit of RAM (512mb) available to our server before it can crash. Otherwise, on heavy website we spend our time restarting the local server.

### How to contribute :

```bash
git clone https://github.com/pmndrs/react-three-next
&& cd react-three-next && yarn install
# then push using the terminal to trigger Husky
```

### Maintainers :

- [`twitter 🐈‍⬛ @onirenaud`](https://twitter.com/onirenaud)
