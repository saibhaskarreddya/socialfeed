import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Pulse</h2>

      <ul className="menu">
        <li>🏠 Home</li>
        <li>🚀 Explore</li>
        <li>🔔 Notifications</li>
        <li>🔖 Bookmarks</li>
        <li>👤 Profile</li>
      </ul>

      <button className="postBtn">Post</button>

      <div className="user">
        <p><b>You</b></p>
        <span>@you</span>
      </div>
    </div>
  );
}

export default Sidebar;