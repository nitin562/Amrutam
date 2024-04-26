import React from 'react'
import "./TimeSlot.style.css"
export default function TimeSlots({title,Arr,TimeSelect,setTimeSelect}) {
  
  return (
    <div className='TimeContainer'>
        <p id="title">{title}</p>
        <div className='TimeSlotArea'>
            {Arr.map((element,index)=>{
                return <div onClick={()=>setTimeSelect(element)} className={`time_slot ${TimeSelect===element?"changeAppearance":""}`} key={index}>
                    <p>{element}</p>
                </div>
            })}
        </div>
    </div>
  )
}
