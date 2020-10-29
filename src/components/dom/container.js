import { HtmlStatic } from '@/helpers/HtmlStatic'
import useStore from '@/helpers/store'
//import Head from 'next/head'
import { Helmet } from 'react-helmet'

import { helmet } from '../../config'

const Dom = ({ children }) => {
  const dom = useStore((state) => state.dom)
  return (
    <HtmlStatic fullscreen portal={dom}>
      <Helmet {...helmet} />
      {children}
    </HtmlStatic>
  )
}

export default Dom
