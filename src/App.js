import { useEffect } from 'react';
import './App.css';
import ChatContainerComponent from './components/Chatapplication/ChatContainerComponent';
// import DiceComponent from './components/DICEGAME/DiceComponent';
// import PrimaryGalleryComponent from './components/PrimaryGallery/PrimaryGalleryComponent';
// import Todo from './components/TODO/TodoComponent';


function App() {

  useEffect(()=>{
  console.log("app calling")
  },[])
  return (
    <div className="App">
    {/* <h1>This is react</h1> */}
    {/* <Todo></Todo> */}
  {/* <DiceComponent></DiceComponent> */}
  {/* <PrimaryGalleryComponent></PrimaryGalleryComponent> */}
  <ChatContainerComponent></ChatContainerComponent>
    </div>
  );
}

export default App;


/**
 * 
 *  const editlist=(t,index)=>{
  setEditindex(index);
  settask(t.todoName);
  setDateTask(t.todoDate);
  
}
 const addItem =()=>{
  if(isEditindex != null){
    console.log(isEditindex);
   
   const updated = {
     todoName:enterTask,
     todoDate:enterDateTask
   }
    const newArray = [...listArray];
    console.log(newArray);
    newArray[isEditindex] = updated

    setlistArray(newArray);
    setEditindex(null);
    

  }
  else{
    const todo ={
      todoName:enterTask,
       todoDate:enterDateTask
    }
    setlistArray([...listArray,todo]);
  }
  
  clearkeys();
 }

 let [isEditindex,setEditindex] = useState(null);


 const deletelist=(value)=>{
  const filteredItem = listArray.filter((t)=> t.todoName != value.todoName);
  setlistArray(filteredItem);
 
 
}
  

 */