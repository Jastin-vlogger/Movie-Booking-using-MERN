import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./movie.css";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { Modal, Button } from "antd";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Carousel } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import {
  getMovieById,
  getMovieReviewById,
  movieInfoStoreToState,
  putMovies,
} from "../../../action/movieAction";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "antd";
import ShowReview from "../../../components/Public/ShowReview";
const { TextArea } = Input;

function valuetext(value) {
  return `${value}`;
}

function MoviePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  // const movieInfo = useSelector((state) => state.movieInfo);
  // const { movieInformation } = movieInfo;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const user = useSelector((state) => state.userInformation);
  console.log(user);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const [rValue, setRvalue] = React.useState(0);
  const [tValue, setTvalue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const [action, setAction] = React.useState(false);
  // const isAuth = useSelector(state => state.app.isAuth)
  const movieInformation = useSelector((state) => state.movie);
  const review = useSelector((state) => state.review);
  const { reiview } = review;
  const { movie, loading } = movieInformation;

  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    dispatch(getMovieById(id));
    window.scrollTo(window.scrollX, 0);
  }, []);

  React.useEffect(() => {
    dispatch(getMovieReviewById(id));
  }, []);

  React.useEffect(() => {
    dispatch(getMovieReviewById(id));
    setRefresh(false);
  }, [refresh, dispatch]);

  const handleOpen = () => {
    if (user?.userInfo) {
      setOpen(true);
    } else {
      alert("Please login to book your tickets");
      // setAction(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e, v) => {
    setRvalue(v);
  };
  const handleRating = () => {
    setTvalue(null);
    setRvalue(0);
    dispatch(putMovies(movie._doc._id, rValue, tValue));
    setOpen(false);
    setRefresh(true);
  };

  const selectedMovieToState = () => {
    if (user?.userInfo) {
      dispatch(movieInfoStoreToState(movie));
      navigate(`/buytickets/${movie._doc._id}/select_screen`);
    } else {
      alert("Please login to book your tickets");
      // setAction(true)
    }
  };

  React.useEffect(() => {
    // dispatch(storeAuth(auth))
  }, [auth]);

  return (
    <div>
      {loading && <Loading />}
      {movieInformation && (
        <>
          <div
            className="container"
            style={{
              backgroundImage: `linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%),url(${`http://localhost:3008/movies/${movie?._doc?._id}.jpg`})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container__card">
              <img
                src={`http://localhost:3008/movies/${movie?._doc?._id}.jpg`}
                alt="title"
              />
            </div>
            <div className="container__movieDetail">
              <h1>{movie?._doc?.title}</h1>
              <div className="container__movieDetail_rating">
                <img
                  src="https://www.leadingwithhonor.com/wp-content/uploads/2021/02/redheart.png"
                  alt="Rating"
                  style={{ width: 25 }}
                />
                <h1>{movie?.sum_of_ratin}%</h1>
                <p style={{ marginBottom: 0 }}>
                  {Math.ceil(movie?.no_review_ration)} Ratings
                </p>
              </div>
              <div className="container__movieDetail_ratingButton">
                <div>
                  <h4 style={{ color: "white" }}>Add your rating and review</h4>
                  <p>Your ratings matter</p>
                </div>
                <div>
                  <button style={{ cursor: "pointer" }} onClick={handleOpen}>
                    Rate Now
                  </button>
                </div>
              </div>
              <div className="container__movieDetail_language">
                <div>
                  <p>2D</p>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/moviepage/trailer")}
                >
                  <p>Watch Trailer</p>
                </div>
              </div>
              <div style={{ color: "white", fontSize: 18 }}>
                <h5 style={{ color: "white", fontSize: 18 }}>
                  {`${movie?._doc?.Duration} hr - ${
                    movie?._doc?.Genre
                  } - ${movie?._doc?.startDate?.slice(0, 4)}`}
                </h5>
              </div>
              <div
                className="BookButton"
                onClick={() => selectedMovieToState()}
              >
                <button>Book Tickets</button>
              </div>
            </div>
          </div>
          <div className="middleContainer">
            <div>
              <h1>About the movie</h1>
              <p>{movie?._doc?.description}</p>
            </div>
            <hr />
            <div>
              <h1>Cast</h1>
              <Carousel itemsToShow={8} pagination={false}>
                {/* {movieInfo.cast.map((e) => (
                  <div key={e.id}>
                    <div>
                      <img
                        className="carousel_image"
                        src={e.cast_image}
                        alt="e.cast_image"
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h4>{e.original_name}</h4>
                      <p>{e.character}</p>
                    </div>
                  </div>
                ))} */}
              </Carousel>
            </div>
            <hr />
            <div className="carousel">
              <h1>Crew</h1>
              <Carousel itemsToShow={8} pagination={false}>
                {/* {movieInfo.crew.map((e) => (
                  <div key={e.id}>
                    <div>
                      <img
                        className="carousel_image"
                        src={e.crew_image}
                        alt="e.cast_image"
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h4>{e.name}</h4>
                      <p>{e.crew_position}</p>
                    </div>
                  </div>
                ))} */}
              </Carousel>
            </div>
            <hr />
          </div>
        </>
      )}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          footer={null}
          header={null}
          closable={false}
        >
          <Fade in={open}>
            <div>
              <div style={{ textAlign: "center", position: "relative" }}>
                <h5 style={{ margin: 0, padding: 0, marginTop: 10 }}>
                  How was the movies?
                </h5>
                <p style={{ margin: 0, padding: 0 }}>
                  {movieInformation && movieInformation.title}
                </p>
                <CloseIcon
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 0,
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                />
              </div>
              <hr />
              <div>
                <Typography id="discrete-slider" gutterBottom>
                  How would you rate the movie?
                </Typography>
                <Slider
                  onChange={handleChange}
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                  color="secondary"
                />

                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "#f84464",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 180,
                    position: "relative",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      margin: 0,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {rValue}%
                  </h1>
                </div>
                <hr />
                <Typography id="discrete-slider" gutterBottom>
                  Write something about movie
                </Typography>
                <hr />
                <TextArea
                  value={tValue}
                  onChange={(e) => setTvalue(e.target.value)}
                  rows={4}
                />
              </div>
              <button
                onClick={handleRating}
                style={{
                  width: "80%",
                  margin: "30px",
                  height: 50,
                  fontSize: 18,
                  color: "white",
                  backgroundColor: "#f84464",
                  borderRadius: 10,
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                Submit Rating
              </button>
            </div>
          </Fade>
        </Modal>
      </div>
      <ShowReview Review={reiview?.Review} />
    </div>
  );
}

export default MoviePage;
