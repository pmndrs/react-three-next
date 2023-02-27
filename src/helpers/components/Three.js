'use client'

import { r3f } from '@/helpers/global'

export const Three = ({ children, ...rest }) => {
  return <r3f.In {...rest}>{children}</r3f.In>
}
