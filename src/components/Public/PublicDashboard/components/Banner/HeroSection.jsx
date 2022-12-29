import React, { useEffect } from "react";
import { Button } from "../Buttton/Button";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../../../action/movieAction";

function HeroSection() {
  const [index, setIndex] = useState(0);
  const movies = useSelector((state) => state.getMovies);
  const { loading, movieInfo, error } = movies;
  // const hello = movieInfo.slice(2)
  // console.log(hello)

  const dispatch = useDispatch();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {movieInfo?.map((movie, i) => {
        return (
          <Carousel.Item>
            <div className="bannerImage" style={{width:'100%',height:'500px'}}>
              <img
                className="d-block w-100 "
                src={`http://localhost:3008/movies/${movie._id}.jpg`}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <Button>BOOK NOW</Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroSection;
