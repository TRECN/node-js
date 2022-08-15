import React from 'react'
import { Link } from 'react-router-dom'

const Record =(props)=>{
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.Position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className='btn btn-link' to={`/edit/${props.record._id}`}/>
      <button className="btn btn-link" onClick={()=>{
        props.deleteRecord(props.record._id)
      }}>
        Delete
      </button>
    </td>
  </tr>
}

export default function RecordList() {
  return (
    <div></div>
  )
}
