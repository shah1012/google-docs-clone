import React from "react";
import "../css/TopBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="headerSection">
        <h1>Docs</h1>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search for your documents here" />
      </div>
      <div className="avatarSection">
        <img src="" alt="Avatar" />
      </div>
    </div>
  );
}

export default TopBar;
