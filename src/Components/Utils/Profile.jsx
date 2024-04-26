import React from "react";
import "./profile.style.css";
import Profile1 from "../../Images/Profile_1.png";
import user from "../../Images/user.png";
import ProfileInfo from "../UtilityComponents/ProfileInfo";
import FollowersStats from "../UtilityComponents/FollowersStats";
export default function Profile() {
  return (
    <div className="Container">
      <img src={Profile1} alt="profilebar" />
      <div className="overlay">
        <img src={user} alt="user" id="user" />
        <div className="ProfileInfo">
          <ProfileInfo />
          <div className="Stats">
            <FollowersStats heading="Followers" subheading="850" />
            <FollowersStats heading="Following" subheading="18k" />
            <FollowersStats heading="Posts" subheading="250" />
          </div>
          <button className="AppointmentBtn">
            <p>Book an Appointment</p>
          </button>
        </div>
      </div>
    </div>
  );
}
