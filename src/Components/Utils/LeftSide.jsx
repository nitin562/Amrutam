import React from 'react'
import AboutMe from "../UtilityComponents/AboutMe.jsx"
import "./Left.style.css"
import Specialization from '../UtilityComponents/Specialization.jsx'
import Concern from '../UtilityComponents/Concern.jsx'
import WorkExperience from '../UtilityComponents/WorkExperience.jsx'
import Review from '../UtilityComponents/Review.jsx'
export default function LeftSide() {
  return (
    <div className='Left'>
      <AboutMe/>
      <Specialization/>
      <Concern/>
      <WorkExperience/>
      <Review/>
    </div>
  )
}
