import React, { ReactElement, useState } from 'react'
import { Route } from 'react-router-dom'
import HomeTab from './HomeTab'
import { NavWrapper, NavigationGrid } from './style'
import UserTab from './UserTab'

type Props = {
  history?: History
  user?: Record<string, unknown>
}

const Navigation = (props: Props): ReactElement => {
  return (
    <NavWrapper>
      <NavigationGrid>
        <Route path="/home">{({ match }) => <HomeTab isActive={!!match} />}</Route>
        <Route path="/user">{({ match }) => <UserTab isActive={!!match} />}</Route>
      </NavigationGrid>
    </NavWrapper>
  )
}

export default Navigation
