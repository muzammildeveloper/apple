import React from "react";
import "./home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  return (
    <div id="Home" className="container">
      <div className="offer">
        <span>
          Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank
          credit cards.‡ Plus No Cost EMI from most leading banks.##
        </span>
        <a href="#">Shop Now </a>
        <div className="Heading">
          <h1>iPhone 14</h1>
          <h3>Big and bigger</h3>
          <button>with superfast 5G</button>
        </div>
        <div className="achor-tags">
          <span>
            <a href="#">Learn more </a>
            <ArrowForwardIosIcon />
          </span>
          <span className="buy">
            <a href="#">
              Buy <ArrowForwardIosIcon />
            </a>
          </span>
          <span className="forword"></span>
        </div>
        <div className="Home-image">
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
