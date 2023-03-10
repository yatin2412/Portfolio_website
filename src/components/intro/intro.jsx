import React from "react";
import "./intro.css";
import Me from '../../img/final1.webp'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Yatin Narula</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Web Developer</div>
              <div className="i-title-item"> Python Programmer</div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Photographer</div>
              <div className="i-title-item"> Gamer</div>
            </div>
          </div>
          <div className="i-desc">
            Currently a B.Tech Student in Manav Rachna University seeking an
            entry-level opportunity with an esteemed organization where i can
            utilize my skills and enhance my learning
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src = {Me} alt="" className="i-img"></img>
      </div>
    </div>
  );
};

export default Intro;
