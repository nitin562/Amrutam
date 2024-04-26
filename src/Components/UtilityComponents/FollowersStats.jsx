import React from 'react'
import "./ProfileInfo.style.css"
export default function FollowersStats({heading,subheading}) {
  return (
    <div className='FollowerContainer ColContainer'>
        <p>{heading}</p>
        <p>{subheading}</p>
    </div>
  )
}
