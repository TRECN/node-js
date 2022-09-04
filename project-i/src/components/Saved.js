import React from 'react'
import '../styling/saved.css'



const content=(props)=>(
  <tr>
    <td>{props.record.title}</td>
    <td>{props.record.pass}</td>
  </tr>
)

function Saved() {
  return (
    <div className="container">
      <div className="innerForm">

      </div>
    </div>
  )
}

export default Saved