import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function create() {

  const [form,setForm]=useState({
    name:'',
    position:'',
    level:'',
  });
  const navigate = useNavigate();

  return (
    <div>create</div>
  )
}
