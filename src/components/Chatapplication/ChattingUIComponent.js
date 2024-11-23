import React, { useEffect, useState } from 'react'
import { UserList, UserChats } from '../../Constants/ChatConstants'

function Userchat(props) {
  let [currentchatPerson, setcurrentchatPerson] = useState({})
  let [msg, setmsg] = useState("");
  let [loggedinuserdata, setloggedinuserdata] = useState({})
  let [userChatsArray, setUserChatsArray] = useState(UserChats)

  console.log(currentchatPerson)

  useEffect(() => {
    let storagevalues = localStorage.getItem("loggedinuser");
    let loggedinuser = JSON.parse(storagevalues);
    setloggedinuserdata(loggedinuser)
    const [defaultUser] = UserList.filter((t) => t.login.username !== loggedinuser?.login?.username)
    setcurrentchatPerson(defaultUser)

  }, [])


  const chatuserslist = () => {
    let filterlist = UserList.filter((t) => t.login.username !== loggedinuserdata?.login?.username);
    return filterlist
  }
  const showpersonchat = (currentuser) => {
    setcurrentchatPerson({ ...currentuser })

  }
  const textingmsg = (event) => {

    setmsg(event.target.value)
  }
  const sendtext = () => {
    let frameobj = {
      text: msg,
      sendbyUUID: loggedinuserdata?.login?.uuid
    }
    let copyChats = [...UserChats]

    const currentUserChattingPersonIndex = copyChats.findIndex(t => t.persons?.includes(loggedinuserdata.login?.uuid)
      && t.persons?.includes(currentchatPerson.login?.uuid))
    copyChats[currentUserChattingPersonIndex].conversation.push(frameobj)
    setUserChatsArray(copyChats);

    setmsg("")

  }
  const chatings = () => {
    if (currentchatPerson) {
      return userChatsArray.filter(t => t.persons?.includes(loggedinuserdata.login?.uuid)
        && t.persons?.includes(currentchatPerson.login?.uuid))
    }
    else {
      return []
    }
  }



  return (
    <div className='container '>
      <div className='row  mt-4 border'>
        <div className='section1 col-4 border'>

          <div>
            <p>LOGGED IN USER:  {loggedinuserdata?.name?.title}  {loggedinuserdata?.name?.first} {loggedinuserdata?.name?.last}</p>
          </div>
          <div>
            <button onClick={props.loogedout}><p>LOGGED OUT</p></button>
          </div>
          <h1>CHATS</h1>
          {
            chatuserslist()?.map((t) => {
              return (
                <div>
                  <hr />
                  <img src={t?.picture?.thumbnail} />
                  <p
                    className={currentchatPerson?.login?.uuid == t?.login?.uuid ? "bg-success cursor-pointer" : "cursor-pointer"}
                    onClick={() => showpersonchat(t)}>{t?.name?.title}  {t?.name?.first} {t?.name?.last}</p>


                </div>
              )
            })
          }

        </div>
        <div className=' col-8'>
          <h1><img src={currentchatPerson?.picture?.thumbnail} /> {currentchatPerson?.name?.title + currentchatPerson?.name?.first + currentchatPerson?.name?.last} </h1>

          {
            chatings()?.map((t) => {
              return t.conversation?.map((x, index) => {
                return (
                  <div className=''>
                    <p className={(x.sendbyUUID === loggedinuserdata.login?.uuid) ? "text-end text-success " : "text-start text-danger"}>{x.text}</p>
                  </div>
                )
              })
            })

          }





          <div className='d-flex align-items-center justify-content-center pt-5'>
            <textarea placeholder='enter some text' className='form-control' onChange={textingmsg} value={msg}> </textarea>
            <button className='btn btn-success mx-4' onClick={sendtext}>Send</button>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Userchat