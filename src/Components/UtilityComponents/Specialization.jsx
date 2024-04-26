import React from "react";
import "./Specialization.style.css";
import SpecializationIcon from "./SpecializationIcon";
import healthSvg from "../../Images/health.svg"
import ImmunitySvg from "../../Images/Immunity .svg"
import SkincareSvg from "../../Images/Skincare.svg"
import hairCare from "../../Images/Group.svg"


export default function Specialization() {
  return (
    <div className="SpecializationCont">
      <div className="HeadingCont">
        <p>I Specialize In</p>
      </div>
      <div className="IconArea">
        <SpecializationIcon
          svgElement={healthSvg} title="Women’s Health"
        />
        <SpecializationIcon
          svgElement={ImmunitySvg} title="Immunity"
        />
        <SpecializationIcon
          svgElement={SkincareSvg} title="Skin Care"
        />
        <SpecializationIcon
          svgElement={hairCare} title="Hair Care"
        />

      </div>
    </div>
  );
}
