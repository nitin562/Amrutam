import React from 'react'
import "./Tags.style.css"
import CloseSvg from "../../Images/close.svg"
export default function TagTile({title}) {
  return (
    <div className='TagTile'>
        <p>{title}</p>
        <img src={CloseSvg} alt="icon" />
    </div>
  )
}
