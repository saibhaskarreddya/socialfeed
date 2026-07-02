import Sidebar from "../components/Sidebar";
import Rightpanel from "../components/Rightpanel";
import TrendingTags from "../components/Trendingtags";
import ExploreFeed from "../components/ExploreFeed";
import "./Explore.css";

function Explore() {
  return (
    <div className="explorePage">
      <Sidebar />

      <div className="exploreCenter">
        <h1>Explore</h1>

        <TrendingTags />

        <ExploreFeed />
      </div>

      <Rightpanel />
    </div>
  );
}

export default Explore;