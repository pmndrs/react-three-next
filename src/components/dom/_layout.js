import { HtmlStatic } from '@/helpers/HtmlStatic'

const LDom = ({ children }) => {
  console.log(children)

  return (
    <HtmlStatic portal={'_dom'} fullscreen>
      {children}
    </HtmlStatic>
  )
}

export default LDom
