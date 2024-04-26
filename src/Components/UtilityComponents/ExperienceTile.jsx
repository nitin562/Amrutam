import React from 'react'
import HospitalSvg from "../../Images/hospital.svg"
import "./WorkExperience.style.css"
export default function ExperienceTile({title1,title2,duration}){ 
  return (
    <div className='e_tile'> 
        <div className='svgDiv'>
            <img src={HospitalSvg} alt="icon" />
        </div>
        <div className='outer_wrap'>
            <div className='location'>
                <p>{title1}</p>
                <p>{title2}</p>
            </div>
            <div className='duration'>
                <p>{duration}</p>
            </div>
        </div>
    </div>
  )
}
