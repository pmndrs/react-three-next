import { Children, isValidElement } from 'react'
import hasChildren from './hasChildren'
const hasComplexChildren = (element) =>
  isValidElement(element) &&
  hasChildren(element) &&
  Children.toArray(element.props.children).reduce(
    (response, child) => response || isValidElement(child),
    false
  )
export default hasComplexChildren
