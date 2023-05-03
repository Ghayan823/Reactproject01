import logo from './logo.svg';
import './App.css';
import Cell from "./componants/Cell.js"
import React, {useState, useEffect} from'react'
function App() {
const[turn, setTurn]= useState('X')
const [board, setBoard]= useState(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
const [winner, setWinner]= useState("")

useEffect(()=>{
if (checkwin("X")==true)
{
setWinner("X")
}
else if (checkwin("O")==true)
{
  setWinner("O")
}
else {
  var count= 0
  for(var i = 0;i<board.length;i++){
    if(board[i]=="-")
    count++
  }
  if (count==0){
    setWinner("Game is draw, no one")
  }
}

},[board])
function changeboard(index){
if (board[index]!="-")
return 
if (winner !="")
return
var hi = board.map((item, ind)=>{
if (ind== index)
{return turn }
else {return item}
})
setBoard(hi)
if (turn=="X")
setTurn("O")
else setTurn("X")

}
function checkwin (player){
if (board[0]==player && board[1]==player && board[2]==player)
return true
if (board[3]==player && board[4]==player && board[5]==player)
return true
if (board[6]==player && board[7]==player && board[8]==player)
return true
if (board[0]==player && board[4]==player && board[8]==player)
return true
if (board[2]==player && board[4]==player && board[6]==player)
return true
if (board[0]==player && board[3]==player && board[6]==player)
return true
if (board[2]==player && board[5]==player && board[8]==player)
return true
if (board[1]==player && board[4]==player && board[7]==player)
return true
return false
}
function reset (){
setBoard(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
setWinner("")
}
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100vh",  alignItems: "center"}}>
<div style={{textAlign: "center"}}>
  <h2 style={{textAlign: "center", color: "white", fontSize: "25px"}}> Tic Tac Toe</h2>
  <p style={{textAlign: "center", fontFamily: "arial", color: "white"}}> Player {turn} turn</p>
  <button style={{padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "red", color: "white", marginBottom: "10px"}} onClick={reset}> Reset board </button>
  {winner!= ""? <p style={{textAlign: "center"}}> {winner} won the game</p>: null}
    <div style={{display: "flex"}}>
    <Cell text={board[0]} change={()=>changeboard(0)} />
    <Cell text={board[1]}  change={()=>changeboard(1)} />
    <Cell text={board[2]} change={()=>changeboard(2)} />
    </div>
    <div style={{display: "flex"}}>
    <Cell text={board[3]}  change={()=>changeboard(3)} />
    <Cell text={board[4]}  change={()=>changeboard(4)} />
    <Cell text={board[5]}  change={()=>changeboard(5)} />
    </div>
    <div style={{display: "flex"}}>
    <Cell text={board[6]}  change={()=>changeboard(6)} />
    <Cell text={board[7]}  change={()=>changeboard(7)} />
    <Cell text={board[8]}  change={()=>changeboard(8)} />
    </div>
    </div>
  
    </div>
    
  );
}

export default App;
