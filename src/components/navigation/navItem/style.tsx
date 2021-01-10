import styled, { css } from 'styled-components'
import { NAV_WIDTH } from '../../../layout'
import { Transition } from '../../../styling'
import COLOR from '../../../color'
import { Link } from 'react-router-dom'

type Props = {
  isActive?: boolean
}

export const NavItemContainer = styled.div`
  ${(props: Props) => `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props.isActive ? COLOR.active.light : COLOR.bg.light};
    transition: ${Transition.hover.off};
    ${props.isActive ? ` box-shadow: rgb(36, 41, 46) 3px 0px 0px inset; ` : ``}
    &:hover {
      transition: ${Transition.hover.on};
      background: ${COLOR.active.light};
    }
  `}
`

export const NavItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentColor;
  text-decoration: none;
  padding: 8px 12px;
  width: 100%;
`

export const navIconStyle = {
  fontSize: '32px',
}

// reference: spectrum/views/navigation/style.js
