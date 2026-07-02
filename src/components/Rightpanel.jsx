import React from "react";
import "./Rightpanel.css";
import { FiSearch } from "react-icons/fi";

function Rightpanel() {
    return (
        <div className="Rightpanel">
            <div className="searchbox">
              <FiSearch color="#71767b" size={18} />
                <input type="text" placeholder="Search" />
            </div>

            <div className="innr">
                <h1>Trending Now</h1>
                <div className="items">
                    <p>Trending #1</p>
                    <h3># Java Script</h3>
                    <p>10k Posts</p>
                </div>

                <div className="items">
                    <p>Trending #2</p>
                    <h3># React</h3>
                    <p>10k Posts</p>
                </div>

                <div className="items">
                    <p>Trending #3</p>
                    <h3># Java</h3>
                    <p>40k Posts</p>
                </div>

                <div className="items">
                    <p>Trending #4</p>
                    <h3># AI</h3>
                    <p>50k Posts</p>
                </div>

                <div className="items">
                    <p>Trending #5</p>
                    <h3># Mern</h3>
                    <p>25k Posts</p>
                </div>
            </div>

            <div className="followCard">
  <h2>Who to follow</h2>

  <div className="followItem">
    <div className="followLeft">
      <div className="followAvatar">⚓</div>

      <div>
        <h4>Grace H.</h4>
        <p>@grace</p>
      </div>
    </div>

    <button>Follow</button>
  </div>

  <div className="followItem">
    <div className="followLeft">
      <div className="followAvatar">🧠</div>

      <div>
        <h4>Alan T.</h4>
        <p>@alan</p>
      </div>
    </div>

    <button>Follow</button>
  </div>

  <div className="followItem">
    <div className="followLeft">
      <div className="followAvatar">🛠️</div>

      <div>
        <h4>Indie Maker</h4>
        <p>@maker</p>
      </div>
    </div>

    <button>Follow</button>
  </div>

</div>
        </div>
    )
}

export default Rightpanel;