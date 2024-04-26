import React from "react";
import "./AboutMe.style.css";
import LanguageTile from "./LanguageTile";
import SocialIcons from "./SocialIcons";
import AddSvg from "../../Images/Add.svg"
export default function AboutMe() {
  return (
    <div className="AboutCont">
      <div className="Heading_about">
        <p>A Little About me</p>
        <div className="FollowBtn">
          <p>Follow</p>
          <img src={AddSvg} alt="icon" />
        </div>
      </div>
      <div className="Information">
        <div className="Intro">
          <p>
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and seniour doctors.
            Completed my graduation in Gynaecologist Medicine from the{" "}
          </p>
          <div className="read_more">
            <div />
            <p>Read More</p>
          </div>
        </div>
        <div className="language">
          <p id="LanguageSpoken">Language Spoken</p>
          <LanguageTile title="English"/>
          <LanguageTile title="Hindi"/>
          <LanguageTile title="Telugu"/>

        </div>
        <SocialIcons/>
      </div>
    </div>
  );
}
