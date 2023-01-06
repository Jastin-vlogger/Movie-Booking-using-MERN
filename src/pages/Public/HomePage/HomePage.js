import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Public/Navbar/Navbar";
import HeroSection from "../../../components/Public/PublicDashboard/components/Banner/HeroSection";
import Cards from "../../../components/Public/PublicDashboard/components/Cards/Cards";
import { Link } from "react-router-dom";
import styles from "../../../components/Public/styling/RecommendedMovies.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "../../../components/Public/PublicDashboard/components/Carousel/MovieCarousel";
import { getMovies } from "../../../action/movieAction";
import Loading from "../../../components/Loading/Loading";

function HomePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3008/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const movies = useSelector((state) => state.getMovies);
  const { loading, movieInfo, error } = movies;
  const dispatch = useDispatch();
  // const { loading, movieInfo, error } = movies;

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  // const filteredRecommendedMovies = movieInfo.filter(moive => (
  //     !moive.is_premier
  // ))

  return (
    <>
      <Navbar user={user} />
      <HeroSection />
      {/* <Cards /> */}

      <div className={styles.parent}>
        {loading && <Loading />}
        <div className={styles.parent__text}>
          <h1>Recommended Movies</h1>
          <Link to="/ncr/movies" className={styles.link}>
            See all <RiArrowRightSLine />
          </Link>
        </div>
        <MovieCarousel movies={movieInfo.slice(0,10)} />
      </div>
    </>
  );
}

export default HomePage;
