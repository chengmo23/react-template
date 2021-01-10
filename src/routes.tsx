import React, { ReactChild, ReactElement } from 'react'
import Loadable, { LoadingComponentProps } from 'react-loadable'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation'
import AppView from './views/appView'
import LoadingView from './views/loadingView'

const Sample = Loadable({
  loader: () => import('./views/SampleView'),
  loading: ({ isLoading }: LoadingComponentProps): ReactElement => (isLoading ? <LoadingView /> : <></>),
})

type Props = {
  children?: ReactChild | ReactChild[]
}

const Routes = (props: Props): ReactElement => {
  return (
    <AppView>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Sample />
        </Route>
      </Switch>
    </AppView>
  )
}

export default Routes
