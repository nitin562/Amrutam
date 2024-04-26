import React from "react";
import "./SearchSection.style.css";
import Ellipse from "./Ellipse";
import locationSvg from "../../Images/location.svg";
import ArrowDown from "../../Images/arrowDown.svg";
import ArrowRight from "../../Images/rightArrow.svg"
export default function SearchSection() {
  return (
    <div className="SearchSectionCont">
      <Ellipse top="-100px" left="115px" delay="2.5s" />
      <Ellipse top="113px" left="234px"  delay="0.5s" />
      <Ellipse top="-108px" left="1149px"  delay="4.5s" />
      <Ellipse top="104px" left="1071px"  delay="6.5s" />
      <p id="Headline">Find expert Doctors for an In-clinic session here </p>
      <div className="SearchBar">
        <div className="locationMenu">
          <img src={locationSvg} alt="icon" width="25px" />

          <p>Select Location</p>
          <img src={ArrowDown} alt="icon" width="17.95px"/>
          
        </div>
        <div className="SearchPanel">
            <input placeholder="eg. Doctor, specialisation, clinic name"/>
            <img src={ArrowRight} alt="icon" />
        </div>
      </div>
    </div>
  );
}
