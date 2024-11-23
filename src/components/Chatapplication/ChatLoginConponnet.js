import React, { useState } from 'react'

function ChatLogin(props) {


  let[username,setUsername]=useState("");
  let[password,setpassword]=useState("");
  let[showLogin,setlogin]=useState(false);
   

 

  const getusertext = (event)=>{
    setUsername(event.target.value)

  }
  const getuserpassword = (event)=>{
    setpassword(event.target.value)

  }
  const loginuser =()=>{

    setlogin(true)
  }
  


 

  return (
    <div className='container'>
    <div>chatComponent</div>
    <div className='login d-flex align-items-center justify-content-center'>
      
      
      {
        showLogin ? (
          <div>
          <div>
       <input placeholder='Username' value={username} className='p-4 m-4' onChange={getusertext}/>
      </div>
      <div>
      <input placeholder='Password' value={password} className='p-4 m-4'  onChange={getuserpassword}/>
      </div>
      <div>
        <button onClick={()=>props.submituser(username,password)} >Submit</button>
        </div>
      </div>
        ) : <div>
        <button onClick={loginuser}>LOGIN</button>
        </div>
      }
     
      

    </div>
     

    </div>
  )
}

export default ChatLogin