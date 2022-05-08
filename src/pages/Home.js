import banner from "../images/food.jpeg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>The EastSide</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
