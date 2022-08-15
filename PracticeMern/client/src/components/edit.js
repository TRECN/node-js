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
    <div>edit</div>
  )
}
