import React from "react";
import { Button } from "../Buttton/Button";
import './Hero.css'


function HeroSection() {
  return (
    <div className="hero-container">
      <img src={require('../../../../../images/wallpapersden.com_avatar-hd-movie-2022_3499x1500.jpg')} alt="" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
