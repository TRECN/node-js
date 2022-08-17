import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

export default function Create() {

  const [form,setForm]=useState({
    name:'',
    position:'',
    level:'',
  });


  async function onSubmit(e){
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
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text"
          className='form-control'
          id='name'
          value={form.name}
          onChange={(e)=>updateForm({name:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input 
          type="text"
          className='form-control'
          id='position'
          value={form.position}
          onChange={(e)=>updateForm({position:e.target.value})} />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input type="radio" 
              className='form-check-input'
              name='positionIntern'
              value='Intern'
              checked={form.level==="Intern"}
              onChange={(e)=>updateForm({level:e.target.value})}
            />
            <label htmlFor="positonIntern" className='form-check-lebel'>Intern</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" 
              className='form-check-input'
              name='positionJunior'
              value='Junior'
              checked={form.level==="Junior"}
              onChange={(e)=>updateForm({level:e.target.value})}
            />
            <label htmlFor="positonJunior" className='form-check-lebel'>Junior</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" 
              className='form-check-input'
              name='positionSenior'
              value='Senior'
              checked={form.level==="Senior"}
              onChange={(e)=>updateForm({level:e.target.value})}
            />
            <label htmlFor="positonSenior" className='form-check-lebel'>Senior</label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value='create person' className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}
