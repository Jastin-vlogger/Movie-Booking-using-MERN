import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie.css";

function MoviePage() {
  const { category, id } = useParams();
  const movieInfo = useSelector((state) => state.movieInfo);
  const { movieInformation } = movieInfo;
  console.log(movieInformation);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      // const response = await tmdbApi.detail(category, id, {params:{}});
      // setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      <main>
        <article>
          <section class="movie-detail">
            <div class="container">
              <figure class="movie-detail-banner">
                <img
                  src="https://images.unsplash.com/photo-1672266199924-9e84bcaefbc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Free guy movie poster"
                />

                <button class="play-btn">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </button>
              </figure>

              <div class="movie-detail-content">
                <h1 class="h1 detail-title">
                  <strong>{movieInformation.title} </strong>
                </h1>

                <div class="meta-wrapper">
                  <div class="badge-wrapper">
                    <div class="badge badge-fill">PG 13</div>

                    <div class="badge badge-outline">HD</div>
                  </div>

                  <div class="ganre-wrapper">
                    <Link href="#">{movieInformation.Genre}</Link>
                  </div>

                  <div class="date-time">
                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>

                      <time datetime="2021">2021</time>
                    </div>

                    <div>
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="PT115M">
                        {movieInformation.Duration} hr
                      </time>
                    </div>
                  </div>
                </div>

                <p class="storyline">{movieInformation.description}</p>

                <div class="details-actions">
                  <button class="share">
                    <ion-icon name="share-social"></ion-icon>

                    <span>Share</span>
                  </button>
                  <button class="btn btn-primary">
                    <ion-icon name="play"></ion-icon>

                    <span>Watch Now</span>
                  </button>
                </div>

                <Link download class="download-btn">
                  <span>Download</span>

                  <ion-icon name="download-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Link href="#top" class="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </Link>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default MoviePage;
