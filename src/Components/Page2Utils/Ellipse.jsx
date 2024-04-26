import React from 'react'
import "./SearchSection.style.css"
export default function Ellipse({top,left,delay}) {
  return (
    <div className='Ellipse' style={{top:top,left:left,animationDelay:delay}}></div>
  )
}
