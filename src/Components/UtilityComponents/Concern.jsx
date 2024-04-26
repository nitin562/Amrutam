import React from 'react'
import "./Concern.style.css"
import ConcernTile from './ConcernTile'
export default function Concern() {
  return (
    <div className='ConcernArea'>
        <div className="HeadinConcern">
            <p>The Concerns I Treat</p>
        </div>
        <div className="ConcernTypes">
            <ConcernTile title="Skin Treatment"/>
            <ConcernTile title="Pregnancy"/>
            <ConcernTile title="Period Doubts"/>
            <ConcernTile title="Endometriosis"/>
            <ConcernTile title="Pelvic Pain"/>
            <ConcernTile title="Ovarian Cysts"/>
            <div className='Addmore'>
                <p>+ 5 More</p>
            </div>

            

        </div>
    </div>
  )
}
