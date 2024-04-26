import React from 'react'
import "./ModeTile.style.css"
export default function ModeTile({mode,time,selected,setselected}) {
    const handleClick=()=>{
        setselected(mode)
    }
  return (
    
    <div className={`Tile ${selected===mode?"changeColor":""}`} onClick={handleClick}>
        <div className='ContFlex'>
            <p style={{color:selected===mode?"#3A643B":"#1F1F1F"}}>{mode}</p>
            <div className={`Circle ${selected===mode?"Visible":""}`}>
            <svg
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12.5L10.167 17L19.5 8"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </div>
        </div>
        <p>{time}</p>
    </div>
  )
}
