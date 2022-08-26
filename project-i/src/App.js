import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreatePass from './components/createpass'
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<CreatePass/>} />
      </Routes>
    </div>
  )
}

export default App