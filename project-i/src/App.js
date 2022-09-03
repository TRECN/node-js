import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreatePass from './components/createpass'
import NavBar from './components/NavBar'
import Saved from './components/Saved'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<CreatePass/>} />
        <Route path='/saved' element={<Saved/>} />
      </Routes>
    </div>
  )
}

export default App