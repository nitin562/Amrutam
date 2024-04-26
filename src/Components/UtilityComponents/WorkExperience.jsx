import React from 'react'
import "./WorkExperience.style.css"
import ExperienceTile from './ExperienceTile'
export default function WorkExperience() {
  return (
    <div className='WorkCont'>
        <div className="headingWork">
            <p>My Work Experience</p>
        </div>
        <div className='ExperienceCont'>
            <p>I have been in practice for : 7+ Years</p>
            <div className='stroke'></div>
            <div className="ExperienceList">
                <ExperienceTile title1="Midtown Medical Clinic" title2="Senior doctor" duration="2016-PRESENT"/>
                <ExperienceTile title1="Midtown Medical Clinic" title2="Senior doctor" duration="2016-2015"/>

            </div>
        </div>
    </div>
  )
}
