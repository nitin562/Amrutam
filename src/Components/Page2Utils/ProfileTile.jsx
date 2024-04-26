import React from "react";
import "./profileTile.style.css";
import userImg from "../../Images/profile_2.svg";
import yellowStar from "../../Images/yellowStar.svg";
import linkSvg from "../../Images/link.svg";
import experSvg from "../../Images/education.svg";
import commentSvg from "../../Images/comment.svg";

export default function ProfileTile() {
  return (
    <div className="ProfileTileCont">
      <div className="userProfile">
        <div className="userImg">
          <img src={userImg} alt="usericon" />
          <div className="StarRating">
            <p>4.5</p>
            <img src={yellowStar} alt="icon" />
          </div>
        </div>
        <div className="userInfo">
          <p id="name">Dr. Prerna Narang</p>
          <div className="outerCont1">
            <div className="innerCont1">
              <div className="items">
                <img src={linkSvg} alt="icon" />
                <p>Male-Female Infertility</p>
              </div>
              <div className="items">
                <img src={experSvg} alt="icon" />
                <p>7 years of Experience</p>
              </div>
              <div className="items">
                <img src={commentSvg} alt="icon" />
                <p>Speaks: English, Hindi, Marathi</p>
              </div>
            </div>
            <div className="feesMenu">
              <div className="feeType">
                <p>Video Consultation</p>
                <p>₹800</p>
              </div>
              <div className="feeType">
                <p>Chat Consultation</p>
                <p>Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
            <button>View Profile</button>
            <button>Book a consultation</button>

        </div>
      </div>
    </div>
  );
}
