import { isValidElement } from 'react'
const hasChildren = (element) =>
  isValidElement(element) && Boolean(element.props.children)
export default hasChildren
