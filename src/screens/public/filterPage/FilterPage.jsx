import React from "react";
import styles from "./SeeAll.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterMovies } from "../../../action/movieAction";
import stylee from "./Card_seeAll.module.css";
import { useNavigate } from "react-router-dom";

const FilterPage = () => {
  const [language, SetLanguage] = React.useState(false);
  const [genre, SetGenre] = React.useState(false);
  const [formate, SetFormate] = React.useState(false);
  const [filterLanguage, setFilterLanguage] = React.useState([]);
  const [filterGenre, setFilterGenre] = React.useState([]);
  const [filterFormate, setFilterFormate] = React.useState([]);
  const [movieDet, setMovieDet] = React.useState([]);
  const [filterMovie, setfilterMovie] = React.useState([]);
  const [state, setState] = React.useState("");

  const navigate= useNavigate();

  const handleChange = (movie) => {
    navigate(`/moviepage/${movie._id}`)
}

  React.useEffect(() => {
    dispatch(getTheaterMovies());
    window.scrollTo(window.scrollX, 0);
  }, []);

  const movieInfo = useSelector((state) => state.filtermovie);
  const { Movie } = movieInfo;
  const dispatch = useDispatch();

  React.useEffect(() => {
    setMovieDet(movieInfo.Movie);
  }, [movieInfo.Movie]);

  const filterMovies = () => {
    if (filterLanguage.length > 0) {
      const updated = movieDet.filter((item) =>
        item.Language.includes(filterLanguage[filterLanguage.length - 1])
      );
      console.log("updated..................", updated);
      // setMovieDet(updated)
      setfilterMovie(updated);
    }
    if (
      filterLanguage.length === 0 &&
      filterGenre.length === 0 &&
      filterFormate.length === 0
    ) {
      // setMovieDet(movieInfo.Movie)
      setfilterMovie(movieInfo.Movie);
    }
  };

  React.useEffect(() => {
    if (
      filterLanguage.length === 0 &&
      filterGenre.length === 0 &&
      filterFormate.length === 0
    ) {
      // setMovieDet(movieInfo.Movie)
      setfilterMovie(movieInfo.Movie);
    }
  }, [movieDet]);
  const handleClear = (text) => {
    if (text === "languages") {
      setFilterLanguage([]);
    } else if (text === "genre") {
      setFilterGenre([]);
    } else {
      setFilterFormate([]);
    }
    filterMovies();
  };

  const handleFilter = (language, genre, formate) => {
    if (language !== "") {
      console.log("language", filterLanguage);
      const index = filterLanguage.indexOf(language);
      console.log("index", index);
      if (index !== -1) {
        filterLanguage.splice(index, 1);
        console.log("...", filterLanguage);
      } else {
        setFilterLanguage([...filterLanguage, language]);
      }
    } else if (genre !== "") {
      const index = filterGenre.indexOf(genre);
      if (index !== -2) {
        filterGenre.splice(index, 1);
      } else {
        setFilterGenre([...filterGenre, genre]);
      }
    } else {
      const index = filterFormate.indexOf(formate);
      if (index !== -1) {
        filterFormate.splice(index, 1);
      } else {
        setFilterFormate([...filterFormate, formate]);
      }
    }
    filterMovies();
  };

  React.useEffect(() => {
    let lan = filterLanguage.includes("");
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftsideNav}>
        <h2 style={{ background: "none", fontSize: "25px", fontWeight: "700" }}>
          Filters
        </h2>
        <div>
          <div className={styles.header}>
            <div onClick={() => SetLanguage(!language)}>
              {!language && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10">
                  <path
                    fill="none"
                    stroke="#666666"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="rotate(90 175.5 -158.5)"
                  ></path>
                </svg>
              )}
              {language && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10">
                  <path
                    fill="none"
                    stroke="#FF1203"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="matrix(0 -1 -1 0 17 344)"
                  ></path>
                </svg>
              )}
              <span
                style={{
                  marginLeft: "10px",
                  color: `${!language ? "white" : "#FF1203"}`,
                }}
              >
                Languages
              </span>
            </div>
            <div onClick={() => handleClear("languages")}>Clear</div>
          </div>
          <div
            className={styles.dialogue}
            style={language ? { display: "flex" } : { display: "none" }}
          >
            <button
              style={
                filterLanguage.includes("Hindi")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Hindi", "", "")}
            >
              Hindi
            </button>
            <button
              style={
                filterLanguage.includes("English")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("English", "", "")}
            >
              English
            </button>
            <button
              style={
                filterLanguage.includes("Telugu")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Telugu", "", "")}
            >
              Telugu
            </button>
            <button
              style={
                filterLanguage.includes("Kannada")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Kannada")}
            >
              Kannada
            </button>
            <button
              style={
                filterLanguage.includes("Japaniese")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Japaniese", "", "")}
            >
              Japaniese
            </button>
            <button
              style={
                filterLanguage.includes("Malayalam")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Malayalam")}
            >
              Malayalam
            </button>
            <button
              style={
                filterLanguage.includes("Punjabi")
                  ? { background: "#FF1203", border: "none", color: "white" }
                  : {}
              }
              onClick={() => handleFilter("Punjabi", "", "")}
            >
              Punjabi
            </button>
          </div>
        </div>

        <div>
          <div className={styles.header}>
            {/* <div onClick={() => SetGenre(!genre)}>
                                {!genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                                {genre && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                                <span style={{ marginLeft: '10px', color: `${!genre ? 'black' : '#e67088'}` }}>Genre</span>
                            </div> */}
            {/* <div onClick={() => handleClear("genre")}>Clear</div> */}
          </div>
          {/* <div className={styles.dialogue} style={genre ? { display: 'flex' } : { display: 'none' }}>
                        <button style={filterGenre.includes('Action') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Action", "")}>Action</button>
                        <button style={filterGenre.includes('Drama') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Drama", "")}>Drama</button>
                        <button style={filterGenre.includes('Triller') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Triller", "")}>Thriller</button>
                        <button style={filterGenre.includes('Comedy') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Comedy", "")}>Comedy</button>
                        <button style={filterGenre.includes('Adventure') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Adventure", "")}>Adventure</button>
                        <button style={filterGenre.includes('Family') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Family", "")}>Family</button>
                        <button style={filterGenre.includes('Fantasy') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "Fantasy", "")}>Fantasy</button>
                        
                    </div> */}
        </div>

        <div>
          <div className={styles.header}>
            {/* <div onClick={() => SetFormate(!formate)}>
                            {!formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>}
                            {formate && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#e67088" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="matrix(0 -1 -1 0 17 344)"></path></svg>}
                            <span style={{ marginLeft: '10px', color: `${!formate ? 'black' : '#e67088'}` }}>Format</span>
                        </div> */}
            {/* <div onClick={() => handleClear("formate")}>Clear</div> */}
          </div>
          {/* <div className={styles.dialogue} style={formate ? { display: 'flex' } : { display: 'none' }}>
                        <button style={filterFormate.includes('2D') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "", "2D")}>2D</button>
                        <button style={filterFormate.includes('4D') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "", "4D")}>4D</button>
                        <button style={filterFormate.includes('4DX') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "", "4DX")}>4DX</button>
                        <button style={filterFormate.includes('IMAX 2D') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "", "IMAX 2D")}>IMAX 2D</button>
                        <button style={filterFormate.includes('IMAX 3D') ? {background:'#e67088', border:'none', color:'white'}:{}} onClick={() => handleFilter("", "", "IMAX 3D")}>IMAX 3D</button>
                    </div> */}
        </div>
      </div>

      <div>
        <h2
          style={{
            background: "none",
            fontSize: "25px",
            fontWeight: "700",
            marginLeft: "30px",
          }}
        >
          Movies in{" "}
        </h2>
        {/* <div className={styles.appliedFilter}>
                    {[...filterLanguage, ...filterGenre, ...filterFormate].map(item => (
                        <div>{item}</div>
                    ))}
                </div> */}
        {/* <div className={styles.explore}>
                    <div>Comming Soon</div>
                    <div style={{ color: '#e67088', fontSize: '18px' }}>{"Explore Upcomming movies >"}</div>
                </div> */}
        <div className={styles.mainCards}>
          {filterMovie.length === 0 ? (
            <div
              style={{
                margin: "20px auto",
                width: "fit-content",
                background: "#ffcece",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "gray" }}>
                Oops, We are not able to find the specific movie.
              </h2>
              <svg
                id="a706cf1c-1654-439b-8fcf-310eb7aa0e00"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="720.59226"
                height="377.91584"
                viewBox="0 0 1120.59226 777.91584"
              >
                <title>not found</title>
                <circle cx="212.59226" cy="103" r="64" fill="#ff6584" />
                <path
                  d="M563.68016,404.16381c0,151.01141-89.77389,203.73895-200.51559,203.73895S162.649,555.17522,162.649,404.16381,363.16457,61.04208,363.16457,61.04208,563.68016,253.1524,563.68016,404.16381Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#f2f2f2"
                />
                <polygon
                  points="316.156 523.761 318.21 397.378 403.674 241.024 318.532 377.552 319.455 320.725 378.357 207.605 319.699 305.687 319.699 305.687 321.359 203.481 384.433 113.423 321.621 187.409 322.658 0 316.138 248.096 316.674 237.861 252.547 139.704 315.646 257.508 309.671 371.654 309.493 368.625 235.565 265.329 309.269 379.328 308.522 393.603 308.388 393.818 308.449 394.99 293.29 684.589 313.544 684.589 315.974 535.005 389.496 421.285 316.156 523.761"
                  fill="#3f3d56"
                />
                <path
                  d="M1160.29613,466.01367c0,123.61-73.4842,166.77-164.13156,166.77s-164.13156-43.16-164.13156-166.77S996.16457,185.15218,996.16457,185.15218,1160.29613,342.40364,1160.29613,466.01367Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#f2f2f2"
                />
                <polygon
                  points="950.482 552.833 952.162 449.383 1022.119 321.4 952.426 433.154 953.182 386.639 1001.396 294.044 953.382 374.329 953.382 374.329 954.741 290.669 1006.369 216.952 954.954 277.514 955.804 124.11 950.467 327.188 950.906 318.811 898.414 238.464 950.064 334.893 945.173 428.327 945.027 425.847 884.514 341.294 944.844 434.608 944.232 446.293 944.123 446.469 944.173 447.428 931.764 684.478 948.343 684.478 950.332 562.037 1010.514 468.952 950.482 552.833"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="554.59226"
                  cy="680.47903"
                  rx="554.59226"
                  ry="28.03433"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="892.44491"
                  cy="726.79663"
                  rx="94.98858"
                  ry="4.80162"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="548.71959"
                  cy="773.11422"
                  rx="94.98858"
                  ry="4.80162"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="287.94432"
                  cy="734.27887"
                  rx="217.01436"
                  ry="10.96996"
                  fill="#3f3d56"
                />
                <circle cx="97.08375" cy="566.26982" r="79" fill="#2f2e41" />
                <rect
                  x="99.80546"
                  y="689.02332"
                  width="24"
                  height="43"
                  transform="translate(-31.32451 -62.31008) rotate(0.67509)"
                  fill="#2f2e41"
                />
                <rect
                  x="147.80213"
                  y="689.58887"
                  width="24"
                  height="43"
                  transform="translate(-31.31452 -62.87555) rotate(0.67509)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="119.54569"
                  cy="732.61606"
                  rx="7.5"
                  ry="20"
                  transform="translate(-654.1319 782.47948) rotate(-89.32491)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="167.55414"
                  cy="732.18168"
                  rx="7.5"
                  ry="20"
                  transform="translate(-606.25475 830.05533) rotate(-89.32491)"
                  fill="#2f2e41"
                />
                <circle cx="99.31925" cy="546.29477" r="27" fill="#fff" />
                <circle cx="99.31925" cy="546.29477" r="9" fill="#3f3d56" />
                <path
                  d="M61.02588,552.94636c-6.04185-28.64075,14.68758-57.26483,46.30049-63.93367s62.13813,11.14292,68.18,39.78367-14.97834,38.93-46.59124,45.59886S67.06774,581.58712,61.02588,552.94636Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#6c63ff"
                />
                <path
                  d="M257.29613,671.38411c0,55.07585-32.73985,74.3063-73.13,74.3063q-1.40351,0-2.80255-.0312c-1.87139-.04011-3.72494-.1292-5.55619-.254-36.45135-2.57979-64.77127-22.79937-64.77127-74.02113,0-53.00843,67.73872-119.89612,72.827-124.84633l.00892-.00889c.19608-.19159.29409-.28516.29409-.28516S257.29613,616.30827,257.29613,671.38411Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#6c63ff"
                />
                <path
                  d="M181.50168,737.26482l26.747-37.37367-26.81386,41.4773-.07125,4.29076c-1.87139-.04011-3.72494-.1292-5.55619-.254l2.88282-55.10258-.0223-.42775.049-.0802.27179-5.20415-26.88076-41.5798,26.96539,37.67668.06244,1.105,2.17874-41.63324-23.0132-42.96551,23.29391,35.6583,2.26789-86.31419.00892-.294v.28516l-.37871,68.064,22.91079-26.98321-23.00435,32.84678-.60595,37.27566L204.18523,621.958l-21.4805,41.259-.33863,20.723,31.05561-49.79149-31.17146,57.023Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#3f3d56"
                />
                <circle cx="712.48505" cy="565.41532" r="79" fill="#2f2e41" />
                <rect
                  x="741.77716"
                  y="691.82355"
                  width="24"
                  height="43"
                  transform="translate(-215.99457 191.86399) rotate(-17.08345)"
                  fill="#2f2e41"
                />
                <rect
                  x="787.6593"
                  y="677.72286"
                  width="24"
                  height="43"
                  transform="matrix(0.95588, -0.29376, 0.29376, 0.95588, -209.82788, 204.72037)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="767.887"
                  cy="732.00275"
                  rx="20"
                  ry="7.5"
                  transform="translate(-220.8593 196.83312) rotate(-17.08345)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="813.47537"
                  cy="716.94619"
                  rx="20"
                  ry="7.5"
                  transform="translate(-214.42477 209.56103) rotate(-17.08345)"
                  fill="#2f2e41"
                />
                <circle cx="708.52153" cy="545.71023" r="27" fill="#fff" />
                <circle cx="708.52153" cy="545.71023" r="9" fill="#3f3d56" />
                <path
                  d="M657.35526,578.74316c-14.48957-25.43323-3.47841-59.016,24.59412-75.0092s62.57592-8.34055,77.06549,17.09268-2.39072,41.6435-30.46325,57.63671S671.84483,604.17639,657.35526,578.74316Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#6c63ff"
                />
                <path
                  d="M611.29613,661.29875c0,50.55711-30.05368,68.20979-67.13,68.20979q-1.28835,0-2.57261-.02864c-1.71785-.03682-3.41933-.1186-5.10033-.23313-33.46068-2.36813-59.45707-20.92878-59.45707-67.948,0-48.65932,62.18106-110.05916,66.85186-114.60322l.00819-.00817c.18-.17587.27-.26177.27-.26177S611.29613,610.74164,611.29613,661.29875Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#6c63ff"
                />
                <path
                  d="M541.72029,721.77424l24.55253-34.30732-24.6139,38.07426-.0654,3.93872c-1.71785-.03682-3.41933-.1186-5.10033-.23313l2.6463-50.58165-.02047-.39266.045-.07361.24949-4.77718-24.67531-38.16836,24.753,34.58547.05731,1.01433,2-38.21741-21.12507-39.44039L541.80616,625.928l2.08182-79.23247.00819-.26994v.26177l-.34764,62.47962,21.031-24.76934-21.11693,30.15184-.55624,34.21735,19.63634-32.839-19.71812,37.87389-.31085,19.0228,28.50763-45.70631-28.614,52.34448Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#3f3d56"
                />
                <path
                  d="M875.29613,682.38411c0,55.07585-32.73985,74.3063-73.13,74.3063q-1.4035,0-2.80255-.0312c-1.87139-.04011-3.72494-.1292-5.55619-.254-36.45135-2.57979-64.77127-22.79937-64.77127-74.02113,0-53.00843,67.73872-119.89612,72.827-124.84633l.00892-.00889c.19608-.19159.29409-.28516.29409-.28516S875.29613,627.30827,875.29613,682.38411Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#6c63ff"
                />
                <path
                  d="M799.50168,748.26482l26.747-37.37367-26.81386,41.4773-.07125,4.29076c-1.87139-.04011-3.72494-.1292-5.55619-.254l2.88282-55.10258-.0223-.42775.049-.0802.27179-5.20415L770.108,654.01076l26.96539,37.67668.06244,1.105,2.17874-41.63324-23.0132-42.96551,23.29391,35.6583,2.26789-86.31419.00892-.294v.28516l-.37871,68.064,22.91079-26.98321-23.00435,32.84678-.606,37.27566L822.18523,632.958l-21.4805,41.259-.33863,20.723,31.05561-49.79149-31.17146,57.023Z"
                  transform="translate(-39.70387 -61.04208)"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="721.51694"
                  cy="656.82212"
                  rx="12.40027"
                  ry="39.5"
                  transform="translate(-220.83517 966.22323) rotate(-64.62574)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="112.51694"
                  cy="651.82212"
                  rx="12.40027"
                  ry="39.5"
                  transform="translate(-574.07936 452.71367) rotate(-68.15829)"
                  fill="#2f2e41"
                />
              </svg>
            </div>
          ) : (
            filterMovie?.map((item) => (
              // <Card {...item} />
              <div className={stylee.card} onClick={()=>handleChange(item)}>
                <img
                  src={`http://localhost:3008/movies/${item._id}.jpg`}
                  alt=""
                />
                <div className={stylee.title}>{item.title}</div>
                {/* <div className={styles.genre}>{movie_genre?.map((genre, index)=>index === movie_genre.length-1?genre.genre:genre.genre + "/")}</div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
