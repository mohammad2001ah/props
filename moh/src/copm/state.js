import { useState } from "react"
export default function State(){
  const[count,setCount]=useState(0);
  const[text,setText]=useState("text");
  const handelIncrese=()=>{
    setCount(count+1);
  }
  const handelDecrese=()=>{
    setCount(count-1);
  }
  const handelInput=(e)=>{
    setText(e.target.value);
  }
  const clearInput = () => {
    setText(""); 
  };
  return(
    <div>
      <button onClick={handelIncrese}>+</button>
      <button onClick={handelDecrese}>-</button>
      <p>{text}Count= {count}</p>
      <input type="text" value={text} onChange={handelInput}/>
      <button onClick={clearInput}>DEl</button>
    </div>
  )
}