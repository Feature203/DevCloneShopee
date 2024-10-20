import React from 'react'
import useRouteElements from './useRouteElements'

function App() {
  const routesElement = useRouteElements()
  return <React.Fragment>{routesElement}</React.Fragment>
}

export default App
