import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import React, { ReactElement } from 'react'
import { Obj } from '../../../../shared/types/General'
import Tooltip from '../../tooltip'
import { NavItemContainer, NavItemLink, navIconStyle } from './style'

type Props = {
  name: string
  isActive: boolean
  icon: OverridableComponent<SvgIconTypeMap<Obj, 'svg'>>
}

const NavItem = (props: Props): ReactElement => {
  const { name, isActive } = props
  const Icon = props.icon
  return (
    <Tooltip title={`${name}`} placement={`right`}>
      <NavItemContainer isActive={isActive}>
        <NavItemLink to={`${name}`}>
          <Icon style={navIconStyle} />
        </NavItemLink>
      </NavItemContainer>
    </Tooltip>
  )
}

export default NavItem
