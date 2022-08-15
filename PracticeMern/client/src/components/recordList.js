import React, { useState,useEffect } from 'react'
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
  const [records,setRecord]=useState([]);

  useEffect(()=>{
    async function getRecords(){
      const response= await fetch(`http://localhost:5000/record/`);

      if(!response.ok){
        const mes=`An err has occurred:${response.statusText}`;
        window.alert(mes);
        return;
      }

      const records =await response.json();
      setRecord(records);
    }
    getRecords();

    return;
  },[records.length]);


  const deleteRecord=async(id)=>{
    await fetch(`http://localhost:5000/${id}`,{
      method:'DELETE'
    });
    const newRecords=records.filter((el)=>el._id!==id);
    setRecord(newRecords)
  }

  const recordList=()=>{
    return records.map((record)=>{
      return(
        <Record
          record={record}
          deleteRecord={()=>deleteRecord(record._id)}
          key={record._id}

        />
      );
    });
  }

  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{marginTop:20}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recordList}
        </tbody>
      </table>
    </div>
  )
}
