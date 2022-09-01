import React, { useEffect, useState } from 'react'
import '../styling/createPass.css'

function CreatePass() {

  const [val,setVal]=useState(1);
  const [passG,setPassG]=useState('');


  const passwordG=(val)=>{
    var ch='0123456789abcdefghijklmnopqrstuvwxyz@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordL=val;
    var pass='';

    for(var i=0;i<passwordL;i++){
      var ran=Math.floor(Math.random()*ch.length);
      pass+=ch[ran];
    }
    
      setPassG(pass);
  }

  
  const changeHandle=(e)=>{
    setVal(e.target.value);
    
  }
  const changeHandle1=(e)=>{
    passwordG(val);
    setPassG(e.target.value)
  }



  return (
    <div className="container">
      <div className="innerForm">
        <form action="">
          <h1 className='head'>Generate Password</h1>
          <div className="enter">
            <label className='head lab1'>title</label>
            <input className='inp1' type="text" placeholder='enter the title'/>
          </div>
          <div className="costom">
            <h4 className='head'>Costomize your password</h4>
            <div className="range">
              <p style={{borderBottom:'3px solid rgba(0, 113, 225, 0.4)', marginRight:'20px'}}>Password length: </p>
              <input type="text" style={{border:'none'}} onChange={changeHandle}/>
            </div>
            <div className="pass">
              <input type="text" style={{border:'none'}} value={passG} onChange={changeHandle1}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePass

