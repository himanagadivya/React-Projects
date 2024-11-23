import React, { useEffect, useState } from 'react'
import { UserList } from '../../Constants/ChatConstants'
import ChatLoginConponnet from './ChatLoginConponnet'
import ChattingUIComponent from './ChattingUIComponent'

function ChatComponent() {
  let [loggedin, setloggedin] = useState(false)

  useEffect(() => {
    let localValues = localStorage.getItem("loggedinuser");
    if (localValues) {
      let parsedvalues = JSON.parse(localValues);
      if (parsedvalues.login.username) {
        setloggedin(true)
      }
    }

  }, [])
  const loggedOut = () => {
    localStorage.clear();
    setloggedin(false);

  }

  const submituser = (username, password) => {
    const findUser = UserList.find((t) => (t.login.username === username && t.login.password === password))
    console.log(findUser)
    if (findUser) {
      localStorage.setItem("loggedinuser", JSON.stringify(findUser))
      setloggedin(true)
    }
    else {
      window.alert("username or password is incorrect");
    }

    // 
    // console.log("user is logged in");
  }


  return (
    <div className='container'>

      {
        loggedin ? (<ChattingUIComponent loogedout={loggedOut}></ChattingUIComponent>) : <ChatLoginConponnet submituser={submituser}></ChatLoginConponnet>
      }


    </div>


  )
}

export default ChatComponent