import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function create() {

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

  return (
    <div>create</div>
  )
}
