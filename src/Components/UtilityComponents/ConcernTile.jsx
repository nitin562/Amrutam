import React from 'react'
import "./Concern.style.css"
export default function ConcernTile({title}) {
  return (
    <div className='ConcernTile'>
        <p>{title}</p>
    </div>
  )
}
