import "./Notifications.css";

import Sidebar from "../components/Sidebar";
import Rightpanel from "../components/Rightpanel";

import { FiHeart, FiUserPlus } from "react-icons/fi";

const notifications = [
  {
    id: 1,
    type: "like",
    avatar: "🧪",
    name: "Ada Lovelace",
    text: "Just shipped a new feature using #realtime sockets. The feed updates feel buttery smooth. 🚀",
    time: "2d"
  },
  {
    id: 2,
    type: "follow",
    avatar: "🎨",
    name: "Pixel Pusher",
    time: "3d"
  },
];

function Notifications() {
  return (
    <div className="notificationPage">

      <Sidebar />

      <div className="notificationCenter">

        <div className="notificationHeader">
          <h2>Notifications</h2>
        </div>

        {notifications.map((item) => (

          <div className="notificationItem" key={item.id}>

            <div className="notificationLeft">

              {item.type === "like" ? (
                <FiHeart className="heartIcon"/>
              ) : (
                <FiUserPlus className="followIcon"/>
              )}

            </div>

            <div className="notificationRight">

              <div className="notifyAvatar">
                {item.avatar}
              </div>

              <div className="notifyContent">

                {item.type === "like" ? (
                  <>
                    <p>
                      <b>{item.name}</b> liked your post · {item.time}
                    </p>

                    <span>
                      {item.text}
                    </span>
                  </>
                ) : (
                  <p>
                    <b>{item.name}</b> followed you · {item.time}
                  </p>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      <Rightpanel />

    </div>
  );
}

export default Notifications;