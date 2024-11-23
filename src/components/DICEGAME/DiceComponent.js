import React, { useState } from 'react'

function DiceComponent() {


let [rolldice, setrolldice] = useState(false);
let [showscore, setscore] = useState(0);
let[players,setPlayer] = useState("Player1");

let[playerobj1, setPlayerobj1] = useState({
  score :0,
  round:0,
  lastscore:0
})
let [playerobj2, setPlayerobj2] = useState({
  score :0,
  round:0,
  lastscore:0
})


  const showDice =()=>{
    if(playerobj1.round == 5 && playerobj2.round == 5){
      if(playerobj1.score > playerobj2.score){
        window.alert("player1 is the winner")
      }
      else{
        window.alert("player2 is the winner");
      }
      return ""
    }
    setrolldice(true)
    setTimeout(() => {
      let ran = getRndInteger(1,6)

      setscore(ran);
      setrolldice(false)

      if(players == "Player1"){
        let last = playerobj1.score 
        let lr = playerobj1.round
        setPlayerobj1({...playerobj1,lastscore:ran,score:last+ran,round:lr + 1})
        setPlayer("Player2")
      }
      else{
        let last = playerobj2.score 
        let lr = playerobj2.round
        setPlayerobj2({...playerobj2,lastscore:ran,score:last+ran,round:lr + 1})
        setPlayer("Player1")
       
      }
      

      
    },3500);
    
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }



  return (

    <div >
    
    <div className='players'>

    <div className='player'>
      <h1>Player1</h1>
      <h1>Score------{playerobj1.score}</h1>
      <h1>Round---{playerobj1.round}</h1>
    </div>
    <div className='playe'>
     
      {
        rolldice ?  (<img src='https://media.tenor.com/acXyDcloqNoAAAAj/dice-1-dice.gif' height="500px" />) :  <button onClick={showDice}><h1>{players}</h1></button>
      }
      {
        rolldice ? " " : <h1 className='score'>{showscore}</h1>
      }
      
     
    </div>
    <div className='player'>
    <h1>Player2</h1>
    <h1>Score------{playerobj2.score}</h1>
    <h1>Round---{playerobj2.round}</h1>

     </div>
    </div>
    </div>
  )
}

export default DiceComponent