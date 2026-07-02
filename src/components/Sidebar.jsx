import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('user');
    navigate("/");;
  }
  return (
    <div className="sidebar">
      <div className="sidebarLogo">
        <div className="sidebarLogoIcon">⚡</div>
        <h2>Pulse</h2>
      </div>


      <ul className="menu">
        <li><Link to="/home">🏠 Home</Link></li>
        <li><Link to="/explore">🚀 Explore</Link></li>
        <li><Link to="/notify">🔔 Notifications</Link></li>
        {/* <li>🔖 Bookmarks</li> */}
        <li><Link to="/profile">👤 Profile</Link></li>
      </ul>

      <button className="postBtn">Post</button>

      <div className="user">
        <div className="userInfo">
          <div className="userAvatar">👤</div>

          <div>
            <p><b>{user?.fullname}</b></p>
            <span>@{user?.username}</span>
          </div>
        </div>

        <FiLogOut
          className="logoutIcon"
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </div>
  );
}

export default Sidebar;