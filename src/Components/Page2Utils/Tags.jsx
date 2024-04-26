import React from 'react'
import "./Tags.style.css"
import TagTile from './TagTile'
export default function Tags() {
  return (
    <div className='TagArea'>
        <div className="TagCont">
            <TagTile title="Hair Care"/>
            <TagTile title="Female"/>
            <TagTile title="Rs.0-Rs.500"/>
            <TagTile title="Hindi"/>

        </div>
    </div>
  )
}
