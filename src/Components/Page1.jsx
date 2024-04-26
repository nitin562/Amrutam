import React from 'react'
import Nav from './Utils/Nav'
import "./Page1.style.css"
import Profile from './Utils/Profile'
import LeftSide from './Utils/LeftSide'
import RightSide from './Utils/RightSide'
export default function Page1() {
  return (
    <div className='body'>
        <Nav/>
        <Profile/>
        <div className='RowContainer'>
          {/* Left side contains about me, specialization etc */}
          <LeftSide/>
          {/* rightSide contains fee */}
          <RightSide/> 
        </div>
    </div>
  )
}
