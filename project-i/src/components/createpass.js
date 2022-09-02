import React, { useEffect, useState } from 'react'
import '../styling/createPass.css'
import { AiOutlineCopy } from 'react-icons/ai';

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
    var t=Math.round(e.target.value);
      if(t==0)
      setVal('')
      else
        setVal(t)
  }

  const copyPass=()=>{
    /* Get the text field */
  var copyText = document.getElementById("passT");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.write(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
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
            <h4 className='head'>Customize your password</h4>
            <div className="range">
              <p style={{borderBottom:'3px solid rgba(0, 113, 225, 0.4)', marginRight:'20px'}}>Password length: </p>
              <input type="number" style={{border:'none'}} className='inp' value={val} onChange={changeHandle}/>
            </div>
            <div className="pass">
              <input type="text passText" id='passT' style={{border:'none'}} value={passG} onChange={(e)=>{
                setPassG(e.target.value)
              }}/>
              <button className='copy' onClick={()=>copyPass}><AiOutlineCopy/> </button>
            </div>
            <div className="btnBlock">
              <div className="btnB generate">
                <input type="button" className='btn' value="generate"  onClick={()=>passwordG(val)}/>
              </div>
              <div className="btnB save">
                <input type="button" className='btn' value='save'/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePass

