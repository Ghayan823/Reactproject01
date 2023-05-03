var  Cell = ({text, change})=>{
  var bg = "white"
  if (text=="X")
  {
    bg="lightblue"
  }
  if (text=="O"){
    bg="lightgreen"
  }
  console.log(bg)
    return (
    <div onClick={change} style={{width:"70px", backgroundColor: bg, border: "1px solid purple", height:"70px", display: "flex", justifyContent: "center", alignItems: "center"}}> {text}</div>

    )
}
export default Cell