import React, { useState } from "react";
import logo from "../../Images/Heading.png";
import "./Nav.style.css";
export default function Nav() {
  const [active, setactive] = useState(1);
    const [BtnClick, setBtnClick] = useState(-1)
  const HandleLinkClick = (Link_num) => {
    setactive(Link_num);
  };
  const getDynamicStyle = (num,tag) => {
    if(tag==="Link")
        return { color: active === num ? "#3A643B" : "#474747", fontWeight: active===num?"bolder":"500" };
  };
  return (
    <nav>
      <div className="menu">
        <div className="Sub-menu-1">
          <img src={logo} alt="Logo" />
          <div className="navLinkContainer">
            <p
              style={getDynamicStyle(1,"Link")}
              onClick={() => HandleLinkClick(1)}
            >
              Home
            </p>
            <p
              style={getDynamicStyle(2,"Link")}
              onClick={() => HandleLinkClick(2)}
            >
              Find Doctors
            </p>
            <p
              style={getDynamicStyle(3,"Link")}
              onClick={() => HandleLinkClick(3)}
            >
              About Us
            </p>
          </div>
        </div>
        <div className="Sub-Menu-2">
            <button>Login</button>
            <button>Sign-up</button>

        </div>
      </div>
    </nav>
  );
}
