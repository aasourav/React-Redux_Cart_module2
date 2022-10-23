import React from 'react'
import { Provider } from 'react-redux'
import Merge from './component/Merge'
import appStore from './redux/store'

const App = () => {
  return (
    <Provider store={appStore}>
      <Merge/>
    </Provider>
  )
}

export default App