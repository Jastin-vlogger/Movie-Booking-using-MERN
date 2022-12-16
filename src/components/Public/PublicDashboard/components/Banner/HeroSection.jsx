import React from "react";
import { Button } from "../Buttton/Button";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function HeroSection() {
  

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
  

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=''
          alt="First slide"
        />
        <Carousel.Caption>
          <Button>BOOK NOW</Button>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
