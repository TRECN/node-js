import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function create() {

  const [form,setForm]=useState({
    name:'',
    position:'',
    level:'',
  });
  const navigate = useNavigate();

  const updateForm=(value)=>{
    return setForm((prev)=>{
      return{...prev,...value};
    });
  }

  const onSubmit =async(e)=>{
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
    <div>create</div>
  )
}
