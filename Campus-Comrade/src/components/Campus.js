import React from "react";
import Feed from "./Feed.js";
import CampusHeader from "./CampusHeader";
import "./Campus.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Campus() {
  return (
    <div className="campus">
      <CampusHeader />
      <div className="campus__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Campus;
