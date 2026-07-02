import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightpanel from "../components/Rightpanel";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Feed />
      <Rightpanel />
    </div>
  );
};

export default Home;