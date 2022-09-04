import React, { useEffect, useState } from 'react'
import '../styling/createPass.css'
import { AiOutlineCopy } from 'react-icons/ai';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from 'react-router-dom';

function CreatePass() {

  const [val, setVal] = useState(1);
  const [passG, setPassG] = useState('');

  const nav = useNavigate()

  const [data, setData] = useState({
    title: '',
    pass: ''
  })


  const onSave = async (e) => {
    //console.log(data)
    e.preventDefault();

    const newPass = { ...data };
    await fetch('http://localhost:5000/api/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPass)
    })
      .catch(er => {
        window.alert(er);
        return;
      });
    setData({
      title: '',
      pass: ''
    })

    nav('/')
  }


  const passwordG =(val) => {
    var ch = '0123456789abcdefghijklmnopqrstuvwxyz@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordL = val;
    var pass = '';

    for (var i = 0; i < passwordL; i++) {
      var ran = Math.floor(Math.random() * ch.length);
      pass += ch[ran];
    }


    return pass;
  }


  const changeHandle = (e) => {
    var t = Math.round(e.target.value);
    if (t == 0)
      setVal('')
    else
      setVal(t)
  }

  const updateVal = (value) => {
    return setData((prev) => {
      return { ...prev, ...value }
    })
  }


  useEffect(()=>{
    updateVal({pass:passG})
  },[passG])

  const generate=()=>{
    setPassG(passwordG(val))
    
  }


  return (
    <div className="container">
      <div className="innerForm">
        <form action="">
          <h1 className='head'>Generate Password</h1>
          <div className="enter">
            <label className='head lab1'>title</label>
            <input className='inp1' type="text" placeholder='enter the title' id='titleT' 
            onChange={(e) => updateVal({title:e.target.value})}
            />
            
          </div>
          <div className="costom">
            <h4 className='head'>Customize your password</h4>
            <div className="range">
              <p style={{ borderBottom: '3px solid rgba(0, 113, 225, 0.4)', marginRight: '20px' }}>Password length: </p>
              <input type="number" style={{ border: 'none' }} className='inp' value={val} onChange={changeHandle} />
            </div>
            <div className="pass">
              <input type="text passText" id='passT' style={{ border: 'none' }} value={passG}
                onChange={(e) => {
                  setPassG(e.target.value);
                  updateVal({pass:e.target.value})
                }}

              />

              <CopyToClipboard
                text={passG}
                onCopy={(e) => {
                  alert('copied');
                  e.preventDefault();

                }}>
                <AiOutlineCopy />
              </CopyToClipboard>
            </div>
            <div className="btnBlock">
              <div className="btnB generate">
                <input type="button" className='btn' value="generate" onClick={()=>{
                  generate()
                }}/>
              </div>
              <div className="btnB save">
                <input type="button" className='btn' value='save' onClick={onSave} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePass

