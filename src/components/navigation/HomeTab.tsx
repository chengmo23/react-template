import React, { ReactElement } from 'react'
import NavItem from './navItem'
import HomeIcon from '@material-ui/icons/Home'

type Props = {
  isActive: boolean
}

const HomeTab = (props: Props): ReactElement => {
  const { isActive } = props
  return <NavItem isActive={isActive} name="home" icon={HomeIcon} />
}

export default HomeTab
