import React, { useEffect, useState } from 'react'
import "./Slot.style.css"
export default function Slot({Date,slot,selected,setselected}) {
  const [color, setcolor] = useState(null)
  const HandleClick=()=>{
    setselected(Date)
  }
  useEffect(()=>{
    const NumberSlot=Number(slot)
    if(NumberSlot<=3){
      setcolor("red")
    }
    else{
      if(NumberSlot<=5){
        setcolor("orange")
      }
      else{
        setcolor("gray")
      }
    }
  },[slot])
  return (
    <div className={`SlotCont ${selected===Date?"BgChange":""}`} onClick={HandleClick}>
        <p style={{color:selected===Date?"#3A643B":"#131313",fontWeight:selected===Date?"600":"400"}}>{Date}</p>
        <p style={{color:color}}>{slot} slots</p> 
    </div>
  )
}
