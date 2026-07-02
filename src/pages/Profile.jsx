import React from "react";
import "./Profile.css";
import Sidebar from "../components/Sidebar";
import Rightpanel from "../components/Rightpanel";
import { FiArrowLeft, FiCalendar, FiEdit2 } from "react-icons/fi";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profilePage">

      <Sidebar />

      <div className="profileCenter">

        {/* Top */}

        <div className="profileTop">

          <FiArrowLeft className="backIcon" />

          <div>
            <h2>{user?.fullname}</h2>
            <p>0 Posts</p>
          </div>

        </div>

        {/* Cover */}

        <div className="coverPhoto"></div>

        {/* Info */}

        <div className="profileInfo">

          <div className="avatarLarge">
            👤
          </div>

          <button className="editBtn">
            <FiEdit2 />
            Edit Profile
          </button>

          <h2>{user?.fullname}</h2>

          <p className="username">
            @{user?.username}
          </p>

          <p className="bio">
            Building things on the internet.
          </p>

          <p className="joined">
            <FiCalendar />
            Joined June 2026
          </p>

          <div className="followInfo">
            <span><b>3</b> Following</span>
            <span><b>248</b> Followers</span>
          </div>

        </div>

        {/* Tabs */}

        <div className="profileTabs">

          <button className="activeTab">
            Posts
          </button>

        </div>

        {/* Empty */}

        <div className="noPosts">

          <h3>No posts yet</h3>

          <p>Create your first post.</p>

        </div>

      </div>

      <Rightpanel />

    </div>
  );
};

export default Profile;