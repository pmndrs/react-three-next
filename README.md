[![Lighthouse Global](https://ghcdn.rawgit.org/RenaudRohlinger/r3f-next-starter/main/public/img/scores/lighthouse.svg)](https://github.com/RenaudROHLINGER/r3f-next-starter)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![dependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter)
[![devDependencies Status](https://david-dm.org/renaudrohlinger/r3f-next-starter/dev-status.svg)](https://david-dm.org/renaudrohlinger/r3f-next-starter?type=dev)
![GitHub all releases](https://img.shields.io/github/downloads/renaudrohlinger/r3f-next-starter/total)
![npm](https://img.shields.io/npm/dw/create-r3f-app?color=%233792cb)

_13/12/2020 First stable release :tada:_

# :japanese_castle: Next & React three fiber starter

This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### :japan: Demo :

[https://r3f-next-starter.vercel.app/](https://r3f-next-starter.vercel.app/)

### How to use

#### Installation

_Tailwind is the default_

```sh
yarn create r3f-app next my-app <tailwind?|sass?>
```

or

```sh
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
- yarn lint (Scripts)
- yarn build
- yarn start

### :mag_right: Stack

- [Threejs](https://github.com/mrdoob/three.js/): A lightweight, 3D library with a default WebGL renderer.
- [React-three-fiber](https://github.com/pmndrs/react-three-fiber): A React renderer for Threejs on the web and react-native.
- [Drei](https://github.com/pmndrs/drei): A growing collection of useful helpers and abstractions for react-three-fiber.
- [Tailwind](https://tailwindcss.com/docs): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 directly in your markup.

#### [:hammer_and_wrench: Todo list](https://github.com/RenaudRohlinger/r3f-next-starter/blob/main/TODO.md)

### Contributors :

All contributions are welcome !

```bash
git clone https://github.com/RenaudRohlinger/r3f-next-starter
&& cd r3f-next-starter && yarn install
# then push using the terminal to trigger Husky
```

Contributors will be automatically added using [allcontributors.org](https://allcontributors.org/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/jhsu"><img src="https://avatars1.githubusercontent.com/u/648?v=4" width="100px;" alt=""/><br /><sub><b>Joe Hsu</b></sub></a><br /><a href="https://github.com/RenaudRohlinger/r3f-next-starter/commits?author=jhsu" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!