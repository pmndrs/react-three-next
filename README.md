![David](https://img.shields.io/david/pmndrs/react-three-next?color=%23000000) ![David](https://img.shields.io/david/dev/pmndrs/react-three-next?color=%23000000) [![Downloads](https://img.shields.io/npm/dt/create-r3f-app.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/create-r3f-app) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/ZZjjNvJ) [![Lighthouse Global](https://ghcdn.rawgit.org/pmndrs/react-three-next/main/public/img/scores/lighthouse.svg)](https://github.com/pmndrs/react-three-next)

# :japanese_castle: React-Three-Next starter

First Load JS of 74Kb. This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### ⚫ Demo :

[![image](https://user-images.githubusercontent.com/15867665/127765411-68bf8f2d-f13b-42de-90db-d40b84d89e92.png)](https://react-three-next.vercel.app/)

### How to use

#### Installation

_Tailwind is the default style. styled-components (styled) is also available._

```sh
yarn create r3f-app next my-app
# yarn create r3f-app <next> my-app <tailwind|styled>? -ts?
```

or

```sh
npx create-r3f-app next my-app
```

### :passport_control: Typescript

For typescript add the parameter `-ts` or `--typescript`:

```sh
yarn create r3f-app next my-app -ts
```

### :mount_fuji: Features

- [x] Automatically inject r3f component in the Canvas
- [x] Support glsl imports
- [x] PWA Support
- [x] Layout for Canvas and DOM
- [x] Template for the meta data and header
- [x] Clean code using ESlint and Prettier
- [x] VSCode debug profiles for the server, Chrome, and Firefox

### :bullettrain_side: Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **r3f** property to the parent component.

```jsx
const Page = () => {
  return (
    <>
      <div>Hello !</div>
      
    </>
  )
}
// canvas components goes here
Page.r3f = (
  <>
    <Shader />
  </>
)

export default Page
```

### :control_knobs: Available Scripts

- `yarn dev` - Next dev
- `yarn analyze` - Generate bundle-analyzer
- `yarn lint` - Audit code quality
- `yarn build` - Next build
- `yarn start` - Next start
- `yarn export` - Export to static HTML

### ⬛ Stack

- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei`](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`@react-three/a11y`](https://github.com/pmndrs/react-three-a11y/) &ndash; Accessibility tools for React Three Fiber
- [`tailwind`](https://tailwindcss.com/docs) &ndash; A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 directly in your markup.
- [`r3f-perf` - Optional](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.

### How to contribute :

```bash
git clone https://github.com/pmndrs/react-three-next
&& cd react-three-next && yarn install
```

### Maintainers :

- [`twitter 🐈‍⬛ @onirenaud`](https://twitter.com/onirenaud)
