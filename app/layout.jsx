import { Layout } from '@/components/dom/Layout'
import '@/global.css'

const title = 'React Three Next Starter'
const url =  process.env.NODE_ENV ==="development" ? 'http://localhost:3000' : 'https://react-three-next.vercel.app'
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS'
const author = 'Poimandres'
const twitter = '@pmndrs'

/**
 * @type {import('next').Viewport}
 */
export const viewport = {
  themeColor: 'black',
}

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: title,
  description: description,
  authors: [{ name: author, url: 'https://docs.pmnd.rs' }],
  publisher: author,
  keywords: 'Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist',
  robots: 'index,follow',
  metadataBase: url,
  openGraph: {
    title: title,
    type: 'website',
    url: url,
    images: [{ url: '/icons/share.png', width: 800, height: 800 }],
    siteName: title,
    description: description,
  },
  twitter: {
    card: 'summary',
    site: twitter,
  },
  manifest: '/manifest.json',
  formatDetection: { email: true, telephone: true },
  icons: {
    icon: [{ url: '/icons/favicon.ico' }, { url: '/icons/favicon-32x32.png', type: 'image/png' }],
    shortcut: ['/icons/apple-touch-icon.png'],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [{ rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#000000' }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
