import React, { useEffect, useState } from 'react'
import '../styling/createPass.css'

function CreatePass() {

  const [val,setVal]=useState(1);
  const [passG,setPassG]=useState('');

  const passwordG=(val)=>{
    var ch='0123456789abcdefghijklmnopqrstuvwxyz@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordL=val;
    var pass='';

    for(var i=0;i<=passwordL;i++){
      var ran=Math.floor(Math.random()*ch.length);
      pass+=ch.substring(ran,ran+1);
    }
    setPassG(pass);
  }

  useEffect(()=>{
    const ele=document.querySelector('.buble');
    if(ele){
      ele.style.left=`${Number(val/4)}px`
    } 
  })

  return (
    <div className="container">
      <div className="innerForm">
        <form action="">
          <h1 className='head'>Generate Password</h1>
          <div className="enter">
            <label className='head lab1'>title</label>
            <input className='inp1' type="text" value="" placeholder='enter the title'/>
          </div>
          <div className="costom">
            <h4 className='head'>Costomize your password</h4>
            <div className="range">
              <p style={{borderBottom:'3px solid rgba(0, 113, 225, 0.4)'}}>Password length</p>
              <div className="buble">
                <input className='len' type="text" style={{width:'30px'}} onChange={(value)=>{
                  setVal(value)
                }} />
              </div>
              <input type="range" min='1' max='50' value={val}
                onChange={({target:{value:radius}})=>{
                  setVal(radius);
                  passwordG(val);
                }}
              />
            </div>
            <div className="pass">
              <input type="text" style={{border:'none'}} value={passG}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePass

