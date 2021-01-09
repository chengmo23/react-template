import Tippy from '@tippyjs/react'
import React, { ReactElement } from 'react'

type Props = {
  content: string | ReactElement
  style?: Record<string, unknown>
  children: ReactElement
}

const Tooltip = (props: Props): ReactElement => {
  const { content, style = {}, children, ...rest } = props
  return (
    <Tippy
      placement="top"
      arrow={true}
      content={<span style={{ fontSize: '14px', fontWeight: 'bold', ...style }}>{content}</span>}
      {...rest}
    >
      {children}
    </Tippy>
  )
}

export default Tooltip

// usage:
// <Tooltip content='text shown when hover'>
//  <the element which triggers this tooltip />
// </Tooltip>
