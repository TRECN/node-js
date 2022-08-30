import React from 'react'
import '../styling/createPass.css'

function CreatePass() {
  return (
    <div className="container">
      <div className="innerForm">
        <form action="">
          <h1 className='head'>Generate Password</h1>
          <div className="enter">
            <label className='head lab1'>title</label>
            <input className='inp1' type="text" value="" placeholder='enter the title'/>
          </div>
          <div className="costom">
            <h4 className='head'>Costomize your password</h4>
            <div className="range">
            <input type="range" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePass