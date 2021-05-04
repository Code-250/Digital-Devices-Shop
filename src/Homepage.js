import React from "react";

import './homePage.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Computer</h1>
          <span className="subtitle"> Buy Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Camera</h1>
          <span className="subtitle">Buy Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div classname="content">
          <h1 className="title">Smart-Phones</h1>
          <span className="subtitle">Buy Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HeadSets</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Telecommunication Devices</h1>
          <span classsname="subtitle">Buy Now</span>
        </div>
      </div>
    </div>
  </div>
);
export default HomePage;
