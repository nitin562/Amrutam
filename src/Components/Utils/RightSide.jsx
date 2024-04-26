import React, { useState } from 'react'
import "./RightSide.style.css"
import ModeTile from '../UtilityComponents/ModeTile'
import PickTime from '../UtilityComponents/PickTime'
export default function RightSide() {
  const [selected, setselected] = useState(null)
  return (
    <div className='RightCont'>
      <div className="feeBar">
        <p>Appointment Fee</p>
        <p>&#8377;699.00</p>
      </div>
      <div className="Schedule">
        <div className="Heading1">
          <p>Select your mode of session</p>
          <div></div>
        </div>
        <div className="mode">
          <ModeTile mode="In-Clinic" time="45 Mins" selected={selected} setselected={setselected}/>
          <ModeTile mode="Video" time="45 Mins" selected={selected} setselected={setselected}/>
          <ModeTile mode="Chat" time="10 Mins" selected={selected} setselected={setselected}/>
        </div>
        <PickTime/>
      </div>
    </div>
  )
}
