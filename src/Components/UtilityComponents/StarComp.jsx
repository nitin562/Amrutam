import React from "react";
import "./ProfileInfo.style.css"
import Star from "../../Images/star.svg"
export default function StarComp() {
  return (
    <div className="StarContainer">
      <p>4.2</p>
      {/* Stars svg-4 */}
      <img src={Star} alt="icon" />
      <img src={Star} alt="icon" />
      <img src={Star} alt="icon" />
      <img src={Star} alt="icon" />

    </div>
  );
}
