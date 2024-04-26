import React from "react";
import "./Page2.style.css";
import Nav from "./Utils/Nav";
import SearchSection from "./Page2Utils/SearchSection";
import Filters from "./Page2Utils/Filters";
import Tags from "./Page2Utils/Tags";
import ProfileTile from "./Page2Utils/ProfileTile";
export default function Page2() {
  return (
    <div className="Parent">
      <Nav />
      <SearchSection />
      <Filters />
      <div className="Cont2">
        <Tags />
        <div className="tileArrange">
          <ProfileTile />
          <ProfileTile />
          <ProfileTile />
        </div>
      </div>
    </div>
  );
}
