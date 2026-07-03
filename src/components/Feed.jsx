import React from "react";
import "./Feed.css";
import {
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    avatar: "👨‍💻",
    name: "John Doe",
    username: "@johndoe",
    time: "2m",
    text: "Just finished building my first React project! 🚀",
    hashtag: "#ReactJS",
  },
  {
    id: 2,
    avatar: "👩‍🎨",
    name: "Sophia",
    username: "@sophia",
    time: "5m",
    text: "Design is not just what it looks like. It's how it works.",
    hashtag: "#UIUX",
  },
  {
    id: 3,
    avatar: "🧑‍💼",
    name: "Alex",
    username: "@alex",
    time: "8m",
    text: "Coffee + Coding = Perfect Morning ☕",
    hashtag: "#DeveloperLife",
  },
  {
    id: 4,
    avatar: "👩‍💻",
    name: "Emma",
    username: "@emma",
    time: "12m",
    text: "Learning MERN Stack is so much fun!",
    hashtag: "#MongoDB",
  },
  {
    id: 5,
    avatar: "🧑‍🚀",
    name: "Chris",
    username: "@chris",
    time: "20m",
    text: "Dream big. Build bigger.",
    hashtag: "#Startup",
  },
  {
    id: 6,
    avatar: "👨‍🔬",
    name: "David",
    username: "@david",
    time: "30m",
    text: "Artificial Intelligence is changing everything.",
    hashtag: "#AI",
  },
  {
    id: 7,
    avatar: "👩‍🎓",
    name: "Olivia",
    username: "@olivia",
    time: "45m",
    text: "Finished solving 5 LeetCode problems today 💪",
    hashtag: "#100DaysOfCode",
  },
  {
    id: 8,
    avatar: "🧑‍🎤",
    name: "Ryan",
    username: "@ryan",
    time: "1h",
    text: "Music keeps me focused while coding 🎧",
    hashtag: "#CodingVibes",
  },
  {
    id: 9,
    avatar: "👨‍🚀",
    name: "Michael",
    username: "@michael",
    time: "2h",
    text: "Finally deployed my MERN project on Vercel & Render 🎉",
    hashtag: "#BuildInPublic",
  },
];

const Feed = () => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
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
              <FaRegHeart />
              <FaRegComment />
              <FaPaperPlane />
              <FaRegBookmark />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;