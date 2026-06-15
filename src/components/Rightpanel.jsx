import React from "react";
import "./Rightpanel.css";


function Rightpanel() {
    return (
        <div className="Rightpanel">
            <div className="searchbox">
                <span>🔍</span>
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
        </div>
    )
}

export default Rightpanel;