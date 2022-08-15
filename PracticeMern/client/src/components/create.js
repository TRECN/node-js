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

    
  }

  return (
    <div>create</div>
  )
}
