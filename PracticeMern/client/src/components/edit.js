import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {

  const [form, setForm]=useState({
    name:'',
    position:'',
    level:'',
    records:[],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchData =async()=>{
      const id = params.id.toString();
      const response=await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      if(!response.ok){
        window.alert(`An err has occurred : ${response.statusText}`);
        return;
      }
      const record = await response.json();
      if(!record){
        window.alert(`Record with id ${id} not found`);
        navigate('/');
        return;
      }

      setForm(record);
    }
    fetchData();
    return;
  },[params.id,navigate]);

  const updateForm=(value)=>{
    return setForm((prev)=>{
      return {...prev,...value};
    });
  }

  const onSubmit= async(e)=>{
    e.preventDefault();
    const editedPerson={
      name:form.name,
      position:form.position,
      level:form.level,
    };

    await fetch(`http://localhost:5000/update/${params.id}`,{
      method:'POST',
      body:JSON.stringify(editedPerson),
      headers:{
        'Content-Type':'application/json'
      },
    });
    navigate('/')
  }

  return (
    <div>
      <h3>Update Records</h3>
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
          <input type="submit" value='update Records' className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}
