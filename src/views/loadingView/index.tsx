import React, { ReactElement, ReactChild } from 'react'

type Props = {
  children?: ReactChild | ReactChild[]
}

const LoadingView = (props: Props): ReactElement => {
  return <div className="LoadingView"></div>
}

export default LoadingView
