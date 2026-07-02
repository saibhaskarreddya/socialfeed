import React from "react";
import "./ExploreFeed.css";

import {
  FiHeart,
  FiMessageCircle,
  FiRepeat,
  FiBookmark,
  FiUpload
} from "react-icons/fi";

const posts = [
  {
    id: 1,
    avatar: "🐧",
    name: "Linus T.",
    username: "@linus",
    time: "2s",
    text: "New idea brewing... 🧠",
    hashtag: "#buildinpublic",
  },
  {
    id: 2,
    avatar: "🧪",
    name: "Ada Lovelace",
    username: "@ada",
    time: "30s",
    text: "Live coding in 10 minutes. Bring snacks.",
    hashtag: "#realtime",
  },
  {
    id: 3,
    avatar: "🎨",
    name: "Pixel Pusher",
    username: "@designer",
    time: "1m",
    text: "Spent the afternoon refining typography.",
    hashtag: "#design",
  },
  {
    id: 4,
    avatar: "🛠️",
    name: "Indie Maker",
    username: "@maker",
    time: "5m",
    text: "Week 12 of building in public. First paying customer today!",
    hashtag: "#productivity",
  },
];

const ExploreFeed = () => {
  return (
    <div className="exploreFeed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="postTop">
            <div className="avatar">{post.avatar}</div>

            <div className="postContent">
              <div className="postHeader">
                <h4>{post.name}</h4>

                <span>
                  {post.username} · {post.time}
                </span>
              </div>

              <p className="postText">
                {post.text}{" "}
                <span className="tag">{post.hashtag}</span>
              </p>

              <div className="postActions">
                <FiMessageCircle />
                <FiRepeat />
                <FiHeart />
                <FiBookmark />
                <FiUpload />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreFeed;