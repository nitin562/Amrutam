import React from "react";

export default function SpecializationIcon({ svgElement, title }) {
  return (
    <div className="IconField">
      <div className="SvgCont">
        <img src={svgElement} alt="icon" />
        
      </div>
      <p>{title}</p>
    </div>
  );
}
