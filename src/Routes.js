import { Routes, Route } from "react-router-dom";
import AddMovies from "./pages/Admin/AddMovies";
import Dashboards from "./pages/Admin/Dashboard";
import Login from "./pages/Admin/Login";
import Movie from "./pages/Admin/Movie";
import HomePage from "./pages/Public/HomePage/HomePage";
import Registration from "./pages/theater/Registration";
import Moviepage from "./pages/Public/moviepage/Moviepage";
import LoginTheater from "./pages/theater/LoginTheater";
import Theater from "./pages/Admin/Theater";
import TheaterHome from "./pages/theater/TheaterHome";
import AddScre from "./pages/theater/AddScre";
import Screen from "./pages/theater/Screen";
import AddShow from "./pages/theater/AddShow";
import TrailerPage from "./pages/Public/TrailerPage";

function Routess() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/moviepage" element={<Moviepage />} />
      <Route exact path="/moviepage/trailer" element={<TrailerPage />} />

      {/* admin routes */}
      <Route exact path="/admin" element={<Dashboards />} />
      <Route exact path="/admin/movies" element={<Movie />} />
      <Route exact path="/admin/theaters" element={<Theater />} />
      <Route exact path="/admin/movies/addMovies" element={<AddMovies />} />
      <Route exact path="/admin/login" element={<Login />} />

    
      <Route exact path="/theater/register" element={<Registration />} />
      <Route exact path="/theater/login" element={<LoginTheater />} />
      <Route exact path="/theater" element={<TheaterHome />} />
      <Route exact path="/theater/addScreen" element={<AddScre />} />
      <Route exact path="/theater/screens" element={<Screen />} />
      <Route exact path="/theater/addShows" element={<AddShow />} />
     
    </Routes>
  );
}

export default Routess;
