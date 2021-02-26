import React, { ReactElement } from 'react'
import MaterialButton from '@material-ui/core/Button'
import { types } from '@babel/core'

type Props = {
  type: 'text' | 'icon' | 'hybrid'
  handlers?: {
    onClick: () => void
    // ...
  }
  disabled?: boolean
  href?: string
  children: ReactElement | ReactElement[]
}

const Button = (props: Props): ReactElement => {
  const { type, children, ...rest } = props
  return <MaterialButton>{children}</MaterialButton>
}

export default Button
