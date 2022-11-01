[![Downloads](https://img.shields.io/npm/dt/create-r3f-app.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/create-r3f-app) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/ZZjjNvJ)

# :japanese_castle: React-Three-Next starter

A minimalist starter for React, React-three-fiber and Threejs.

![](https://user-images.githubusercontent.com/2223602/192515435-a3d2c1bb-b79a-428e-92e5-f44c97a54bf7.jpg)

- TTL ~ 100ms
- First load JS ~ 79kb
- Lighthouse score of 100 (Performance, Accessibility, Best Practices, SEO)

This starter allows you to navigate seamlessly between pages with dynamic dom and/or canvas content without reloading or creating a new canvas every time.

### ⚫ Demo :

[![image](https://user-images.githubusercontent.com/2223602/192515587-eac9e26b-d691-4496-a614-85729764b6b0.jpg)](https://react-three-next.vercel.app/)

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

or

```sh
npx create-r3f-app next my-app -ts
```

### :memo: Note:

**Regarding the new layout system in next@13**:

While the app directory is still in beta we are still investigating on the layout implementation, but for now it's more stable to use pages.
An alternative branch will be available in the near future with the app directory architecture. It will be accessible through the starter CLI. Contribution is welcome
[Follow the progress of layout implementation here.](https://github.com/pmndrs/react-three-next/issues/103)

### :mount_fuji: Features

- [x] GLSL imports
- [x] Template for meta data and header
- [x] Clean code using ESlint and Prettier
- [x] VSCode debug profiles for the server, Chrome, and Firefox
- [x] PWA Support

### :bullettrain_side: Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **canvas** property to the parent component.

```jsx
export default function Page(props) {
  return <div>Hello !</div>
}
// Canvas contents go here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.canvas = (props) => (
  <mesh>
    <boxGeometry />
    <meshBasicMaterial color='hotpink' />
  </mesh>
)
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
- [`@react-three/drei` - Optional](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`@react-three/a11y` - Optional](https://github.com/pmndrs/react-three-a11y/) &ndash; Accessibility tools for React Three Fiber
- [`r3f-perf` - Optional](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.

### How to contribute :

```bash
git clone https://github.com/pmndrs/react-three-next
&& cd react-three-next && yarn install
```

### Maintainers :

- [`twitter 🐈‍⬛ @onirenaud`](https://twitter.com/onirenaud)
