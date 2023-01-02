import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

function MoviePage() {
  const navigate = useNavigate();
  const movieInfo = useSelector((state) => state.movieInfo);
  const { movieInformation } = movieInfo;
  console.log(movieInformation);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const showtimes = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleShowtimeClick(showtime) {
    setSelectedShowtime(showtime);
  }

  useEffect(()=>{
    
  },[])

  return (
    <>
      <main>
        <article>
          <section className="movie-detail">
            <div className="container">
              <figure className="movie-detail-banner">
                <img
                  src={`http://localhost:3008/movies/${movieInformation._id}.jpg`}
                  alt="Free guy movie poster"
                />

                <button
                  className="play-btn"
                  onClick={() => navigate("/moviepage/trailer")}
                >
                  <ion-icon name="play-circle-outline"></ion-icon>
                </button>
              </figure>

              <div className="movie-detail-content">
                <h1 className="h1 detail-title">
                  <strong>{movieInformation.title} </strong>
                </h1>

                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 13</div>

                    <div className="badge badge-outline">HD</div>
                  </div>

                  <div className="ganre-wrapper">
                    <Link href="#">{movieInformation.Genre}</Link>
                  </div>

                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>

                      <time datetime="2021">
                        {movieInformation.startDate.slice(0, 4)}
                      </time>
                    </div>

                    <div>
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="PT115M">
                        {movieInformation.Duration} hr
                      </time>
                    </div>
                  </div>
                </div>

                <p className="storyline">{movieInformation.description}</p>

                <div className="details-actions">
                  <button className="share">
                    <ion-icon name="share-social"></ion-icon>

                    <span>Share</span>
                  </button>
                  <button className="btn btn-primary">
                    <ion-icon name="play"></ion-icon>

                    <span>Watch Now</span>
                  </button>
                </div>

                <Link className="download-btn">
                  <div className="date">
                    <DatePicker
                      style={{ backgroundColor: "red" }}
                      selected={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>

                  {showtimes.map((showtime) => (
                    <Button
                      key={showtime}
                      variant={
                        showtime === selectedShowtime ? "primary" : "secondary"
                      }
                      onClick={() => handleShowtimeClick(showtime)}
                    >
                      {showtime}
                    </Button>
                  ))}
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Link href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </Link>
    </>
  );
}

export default MoviePage;
