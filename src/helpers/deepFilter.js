import { Children, cloneElement, isValidElement } from 'react'
import hasComplexChildren from './hasComplexChildren'
const deepFilter = (children, deepFilterFn) => {
  return Children.toArray(children)
    .filter(deepFilterFn)
    .map((child) => {
      if (isValidElement(child) && hasComplexChildren(child)) {
        return cloneElement(
          child,
          Object.assign(Object.assign({}, child.props), {
            children: deepFilter(child.props.children, deepFilterFn),
          })
        )
      }
      return child
    })
}
export default deepFilter
