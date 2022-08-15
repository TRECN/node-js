import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [form,setForm]=useState({
    name:'',
    position:'',
    level:'',
  });
  const navigate = useNavigate();

  updateForm=(value)=>{
    return setForm((prev)=>{
      return{...prev,...value};
    });
  }

  onSubmit =async(e)=>{
    e.preventDefault();

    const newPerson={...form};

    await fetch("http://localhost:5000/record/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify(newPerson),
    })
    .catch(err=>{
      window.alert(err);
      return;
    });
    setForm({name:'',
    position:'',
    level:'',});

    navigate('/')
  }

  return (
    <div>
      <h3>Create an New Record</h3>
      <form onSubmit={onSubmit()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
          className='form-control'
          id='name'
          value={form.name}
          onChange={(e)=>updateForm({position:e.target.value})} />
        </div>
      </form>
    </div>
  )
}
