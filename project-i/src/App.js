import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreatePass from './components/createpass'
import NavBar from './components/NavBar'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<CreatePass/>} />
      </Routes>
    </div>
  )
}

export default App