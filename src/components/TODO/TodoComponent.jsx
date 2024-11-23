import { useEffect, useState } from "react";

const Todo = ()=>{
  let [enterTask, settask] = useState();
 let [enterDateTask, setDateTask] = useState();
 let[originalList,setOriginalList] = useState([
  {
  todoName:"hai1",
  todoDate:"2024-11-20",
  isTodoCompleted:false
 },
 {
  todoName:"bye",
  todoDate:"2024-11-21",
  isTodoCompleted:false

 },
 {
  todoName:"welcome",
  todoDate:"2024-11-22",
  isTodoCompleted:false

 },
 {
  todoName:"toy",
  todoDate:"2024-11-23",
  isTodoCompleted:false

 },
]);
 let[isEditIndex,seteditindex] = useState(null);
 let[serachbyText,setSerachbyText] = useState([]);
 let[searchDropDown,setdropdown] = useState("all");




const enterTaskName=(event)=>{
  settask(event.target.value)
 }

 const enterDateandTime=(event)=>{
  setDateTask(event.target.value)
 }

 const addItem = ()=>{
  const myTodo = {
    todoName:enterTask,
    todoDate:enterDateTask,
    isTodoCompleted:false
   }
  if(isEditIndex != null){
  
   let updated = [...originalList];
   updated[isEditIndex] = myTodo;
   setOriginalList(updated);
  }else{
   
    setOriginalList([...originalList,myTodo])
  }
 
  clearkeys();

 }
 const editItem = (value,index)=>{
  seteditindex(index);
  settask(value.todoName);
  setDateTask(value.todoDate);
 }
 const deleteItem = (value)=>{
  let filteredItem = originalList.filter((t)=>t.todoName != value.todoName);
  setOriginalList(filteredItem);
 }
 
 const completedToggle =(t, iscompleted)=>{
  let findItemIndex = originalList.findIndex((value)=>value.todoName === t.todoName);
  const  copy = [...originalList]
  copy[findItemIndex].isTodoCompleted = iscompleted;  
  setOriginalList([...copy])
 }

const clearItem =()=>{
  settask("")
  setDateTask("")
}


 const clearkeys = ()=>{
  setDateTask("")
  settask("")
  seteditindex(null);
 }

 const statusoftasks = (t,value)=>{
    let date = new Date();
    date.setHours(0,0,0,0)
    let userDate = new Date(t.todoDate);
    userDate.setHours(0,0,0,0)
    
    if(t.isTodoCompleted){
      return "done"
    }

    if(userDate > date ){
      return "UPCOMING"
    }
    else if(userDate < date){
      return "expired"
    }
    else if(userDate.valueOf() == date.valueOf()){
      return "warning"
    }
    
}

  
  const searchDropDowntext = (event)=>{
    setdropdown(event.target.value)
    console.log(event);

  }
  const searchTaskName=(event)=>{
    setSerachbyText(event.target.value)
     
}

const notcompletedtodo=(value1)=>{
  let value = [...originalList].filter((t)=>t.todoName.includes(serachbyText));
  if(searchDropDown !== "all"){
    value = value.filter((t)=>{
      let status = statusoftasks(t)
      if(status.toLowerCase() == searchDropDown.toLowerCase()){
        return true 
      }
      else{
        return false
      }
    })
  }
 
  return value.filter((t)=> !t.isTodoCompleted)
 
}
const completedTodo = ()=>{
  let value = [...originalList].filter((t)=>t.todoName.includes(serachbyText))
  return value.filter((t)=> t.isTodoCompleted)
}

    
  
    

return (
    <div>
    <h1>TODO LIST</h1>
    <div className="enter-input">
    <div><input placeholder="Enter Task Name" value = {enterTask} className="box1" onChange={enterTaskName} /></div>
    <div><input type="date" placeholder="Enter Date" value= {enterDateTask} className="box2" onChange={enterDateandTime} /></div>
    <div><button className="box3" onClick={addItem}>{(isEditIndex != null) ? "EDIT ITEM" : "ADD ITEM"}</button></div>
    <div><button className="box3" onClick={clearkeys}>CLEAR</button></div>
    <div><input placeholder="SERACH BY TASK NAME"  className="box1" onChange={searchTaskName} /></div>
    <div className="box1">
      <select onChange={searchDropDowntext} value={searchDropDown}>
      <option value="all" >all</option>
      <option value="expired">expired</option>
      <option value="done">done</option>
      <option value="warning">warning</option>
      <option value="UPCOMING">UPCOMING</option>
      </select>
    </div>


    {/* <input placeholder="SEARCH BY STATUS"  onChange={searchStatus} /> */}
    
    </div>
    <hr />
     <div className="list-of-tasks">
      <h1>TASK NAME</h1>
      <h1>TASK DATE AND TIME</h1>
    

     </div>
     {
     notcompletedtodo().map((t,index)=> {

     

        return (
          <div className="list-of-tasks" key={t}>
           <h1>{t.todoName}</h1>
           <h1>{t.todoDate}</h1>
           <button onClick={()=>editItem(t,index)}>Edit</button>
           <button onClick={()=>deleteItem(t)}>Delete</button>
           <h1>{statusoftasks(t,index)}</h1>
           {
            t.isTodoCompleted ?  (<button className="completed">Completed</button>) : (<button onClick={()=>completedToggle(t,true)}>COMPLETE</button>)
           }
           
           
        
          </div>
  
        )
      
      
     })
    }
    <div>
    <h1> COMPLTED TASKS</h1>
      {
        completedTodo().map((t,index)=>{
          
            return (
              <div key={t} className="list-of-tasks">
               <h1>{t.todoName}</h1>
              <h1>{t.todoDate}</h1>
              <button className="completed">Completed</button>
               <button className="" onClick={()=>completedToggle(t,false)}>UNDO</button>
              
             </div>)

          
        
        })
      }
     
     </div>
    </div>
  )
}
export default Todo














// import { useState } from "react"

// const Todo = () => {

//   let [enterTask, settask] = useState();
//   let [enterDateTask, setDateTask] = useState();
//   let[listArray,setlistArray] = useState([])

//   const enterTaskName = (event) => {
//     settask(event.target.value)





//   }
//   const enterDateandTime = (event) => {
//     setDateTask(event.target.value)



//   }
//   const addItem = () => {
//     const todo ={
//       todoName:enterTask,
//       todoDate:enterDateTask

//     }
//     setlistArray([...listArray, todo])
//     console.log(listArray);

//   }



//   return (
//     <div>
//       <h1>TODO LIST</h1>
//       <div className="enter-input">
//         <div><input placeholder="Enter Task Name" className="box1" onChange={enterTaskName} /></div>
//         <div><input placeholder="Enter Date and Time of Task" className="box2" onChange={enterDateandTime} /></div>
//         <div><button className="box3" onClick={addItem}>ADD ITEM</button></div>

//       </div>
//       <hr />
//       <div className="list-of-tasks">
//         <h1>Task Name</h1>
//         <h1>Task date and time</h1>
//         <button>Edit</button>
//         <button>delete</button>
//         <button>Complete</button>
//       </div>

//       {
//         listArray.map((t) => {
      
//         return  (<div className="list-of-tasks">
//            <h1>{t.todoName}</h1>
//           <h1>{t.todoDate}</h1>
//           <button>Edit</button>
//           <button>delete</button>
//           <button>Complete</button>
//          </div>)
//         })
//       }



//     </div>
//   )
// }
// export default Todo
