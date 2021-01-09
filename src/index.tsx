import React from 'react'
import ReactDOM from 'react-dom'
import Tooltip from './components/tooltip'

const App = () => {
  return (
    <div className="App">
      <Tooltip content="Hello">
        <button>My</button>
      </Tooltip>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
