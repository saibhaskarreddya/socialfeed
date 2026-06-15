import React from 'react'
import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed">

    

    
      <div className="post">
        <div className="postHeader">
          <div className="avatar">👤</div>
          <div>
            <h4>John Doe</h4>
            <span>@johndoe · 2m</span>
          </div>
        </div>

        <p className="postText">
          This is my first post in React 🚀
        </p>

        <div className="postActions">
          <span>💬</span>
          <span>🔁</span>
          <span>❤️</span>
          <span>🔗</span>
        </div>
      </div>

    </div>
  )
}

export default Feed
