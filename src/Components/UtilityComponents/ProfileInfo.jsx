import React from "react";
import "./ProfileInfo.style.css";

import StarComp from "./StarComp";
export default function ProfileInfo() {
  return (
    <div className="ColContainer">
      <div className="ProfileInfoContainer">
        <div className="NameTickContainer">
          <p>Dr. Bruce Willis</p>
          <div className="tickContainer">
            <svg
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12.5L10.167 17L19.5 8"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <span>Gynecologist</span>
      </div>
      <StarComp/>
    </div>
  );
}
