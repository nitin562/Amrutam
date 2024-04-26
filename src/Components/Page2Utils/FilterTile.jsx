import React from 'react'
import "./Filters.style.css"
import arrowDownSvg from "../../Images/arrowDown2.svg"
export default function FilterTile({title,filter}) {
  return (
    <div className={`FilterTile ${filter==="true"?"FilterAppearance":""}`}>
        <p>{title}</p>
        <img src={arrowDownSvg}  alt="icon" />
    </div>
  )
}
