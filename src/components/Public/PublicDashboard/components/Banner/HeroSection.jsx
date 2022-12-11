import React from "react";
import Slider from "react-slick";
import { Button } from "../Buttton/Button";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

const PrevBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

function HeroSection() {
  let styles = {
    marginRight: "20px",
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    // <div style={{ margin: "30px" }}>
    //   <Slider autoplay={true}
    //   prevArrow ={<PrevBtn/>}
    //   nextArrow={<NextBtn/>}
    //   >
    //     <div>
    //       <img
    //         src={require("../../../../../images/wallpapersden.com_avatar-hd-movie-2022_3499x1500.jpg")}
    //         alt=""
    //         style={{ width: "100%", height: "60vh" }}
    //       />
    //     </div>
    //     <div>
    //       <img
    //         src={require("../../../../../images/wallpapersden.com_avatar-hd-movie-2022_3499x1500.jpg")}
    //         alt=""
    //         style={{ width: "100%", height: "60vh" }}
    //       />
    //     </div>
    //     <div>
    //       <img
    //         src={require("../../../../../images/wallpapersden.com_avatar-hd-movie-2022_3499x1500.jpg")}
    //         alt=""
    //         style={{ width: "100%", height: "60vh" }}
    //       />
    //     </div>
    //   </Slider>
    // </div>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../../../images/wallpapersden.com_avatar-hd-movie-2022_3499x1500.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <Button>BOOK NOW</Button>
          <Button buttonStyle="btn--outline">WATCH TRAILOR</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
