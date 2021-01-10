import React, { ReactElement } from 'react'
import MaterialToolTip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

type Props = {
  title: string | ReactElement
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
  style?: Record<string, unknown>
  children: ReactElement
}

const Tooltip = (props: Props): ReactElement => {
  const { title, placement = 'top', style = {}, children, ...rest } = props
  return (
    <MaterialToolTip arrow title={title} placement={placement} style={style} TransitionComponent={Zoom} {...rest}>
      {children}
    </MaterialToolTip>
  )
}

export default Tooltip

// example:
// <Tooltip content='text shown when hover'>
//   <button />
// </Tooltip>
