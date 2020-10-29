import favicon from './assets/images/favicon.png'
import share from './assets/images/share.png'

const title = 'R3F Next Starter'
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS'

export const helmet = {
  title,
  titleTemplate: '%s - R3F Starter',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '960px' },
    { property: 'og:image:height', content: '960px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: '@onirenaud' },
    { name: 'twitter:creator', content: '@onirenaud' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
}
