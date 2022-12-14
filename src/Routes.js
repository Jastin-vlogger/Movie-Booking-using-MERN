import { Routes, Route } from "react-router-dom";
import AddMovies from "./pages/Admin/AddMovies";
import Dashboards from "./pages/Admin/Dashboard";
import Login from "./pages/Admin/Login";
import Movie from "./pages/Admin/Movie";
import HomePage from "./pages/Public/HomePage/HomePage";

import Moviepage from "./pages/Public/moviepage/Moviepage";

function Routess() {
  
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/moviepage" element={<Moviepage />} />

      {/* admin routes */}
      <Route exact path="/admin" element={<Dashboards />} />
      <Route exact path="/admin/movies" element={<Movie />} />
      <Route exact path="/admin/movies/addMovies" element={<AddMovies />} />
      <Route exact path="/admin/login" element={<Login />} />
    </Routes>
  );
}

export default Routess;
