import Slider from "react-slick";
// import "./cards.css";
import "./cards.css";
import "./card-theme.css";
import MovieCard from "../Card/MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../../../../../action/movieAction";
import Loading from "../../../../Loading/Loading";

let slidesToShow = 5;
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

function Cards() {
  const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    infinite: false,
    // slidesToScroll={3}
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const movies = useSelector((state) => state.getMovies);
  const dispatch = useDispatch();
  const { loading, movieInfo, error } = movies;

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 3;
  } else if (width > 1025 && width <= 1300) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: "50px" }} className="carousel">
      {loading && <Loading />}
      {error ? (
        <h4>{error}</h4>
      ) : (
        <Slider {...carouselProperties}>
          {movieInfo?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Cards;
