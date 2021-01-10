import React, { ReactElement } from 'react'
import NavItem from './navItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

type Props = {
  isActive: boolean
}

const UserTab = (props: Props): ReactElement => {
  const { isActive } = props
  return <NavItem isActive={isActive} name="user" icon={AccountCircleIcon} />
}

export default UserTab
