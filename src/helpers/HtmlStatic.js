/* eslint-disable react/display-name */
import _extends from '@babel/runtime/helpers/esm/extends'
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose'

import { useEffect, forwardRef, useState, useRef, useMemo, createElement } from 'react'
import { unmountComponentAtNode, render as ReactDomRender } from 'react-dom'

export const HtmlStatic = forwardRef((_ref, ref) => {
  var _portal$current

  let { children, style, className, fullscreen, prepend, portal } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, [
      'children',
      'style',
      'className',
      'fullscreen',
      'prepend',
      'portal',
      'zIndexRange',
    ])

  const [el] = useState(() => document.createElement('div'))
  const group = useRef(null)
  const target =
    (_portal$current = portal == null ? void 0 : portal.current) != null
      ? _portal$current
      : document.getElementById('_dom')
  useEffect(() => {
    if (group.current) {
      if (target) {
        if (prepend) target.prepend(el)
        else target.appendChild(el)
      }

      return () => {
        if (target) target.removeChild(el)
        unmountComponentAtNode(el)
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])
  const styles = useMemo(
    () =>
      _extends(
        {
          position: 'absolute',
        },
        fullscreen && {
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        },
        style
      ),
    [style, fullscreen]
  )
  useEffect(
    () =>
      void ReactDomRender(
        createElement('div', {
          ref: ref,
          style: styles,
          className: className,
          children: children,
        }),
        el
      )
  )

  return createElement(
    'group',
    _extends({}, props, {
      ref: group,
    })
  )
})
