import React, { ReactChild, ReactElement } from 'react'

type Props = {
  children?: ReactChild | ReactChild[]
}

const SampleView = (props: Props): ReactElement => {
  return <div className="SampleView">test</div>
}

export default SampleView
