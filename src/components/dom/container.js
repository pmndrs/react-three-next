import { HtmlStatic } from '@/helpers/HtmlStatic'
import useStore from '@/helpers/store'

const Dom = ({ children }) => {
  const dom = useStore((state) => state.dom)
  return (
    <HtmlStatic fullscreen portal={dom}>
      {children}
    </HtmlStatic>
  )
}

export default Dom
