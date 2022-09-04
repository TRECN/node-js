import React, { useEffect, useState } from 'react'
import '../styling/saved.css'



const Content=(props)=>(
  <tr>
    <td>{props.record.title}</td>
    <td>{props.record.pass}</td>
  </tr>
)

function Saved() {

  const [records,setRecord]=useState([]);

  useEffect(()=>{
    const getRecords=async()=>{
      const response = await fetch(`http://localhost:5000/api/`);

      if(!response.ok){
        window.alert(`An err has occurred : ${response.statusText}`);
        return;
      }
      const records=await response.json();
      setRecord(records);
      console.log(records);
    }
    getRecords()
    return;
  },[records.length])

  const list=()=>{
    return records.map((record)=>{
      return(
        <Content
          record={record}
          key={record._id}
        />
      )
    })
  }

  return (
    <div className="container">
      <div className="innerForm">
        <h3>Saved Passcode</h3>
        <table className="table table-striped" style={{marginTop:20}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>PassCode</th>
          </tr>
        </thead>
        <tbody>
          {list()}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Saved