import { Routes, Route } from "react-router-dom";
import AddMovies from "./pages/Admin/AddMovies";
import Dashboards from "./pages/Admin/Dashboard";
import Login from "./pages/Admin/Login";
import Movie from "./pages/Admin/Movie";
import HomePage from "./pages/Public/HomePage/HomePage";
import Registration from "./pages/theater/Registration";
import Moviepage from "./pages/Public/moviepage/Moviepage";
import LoginTheater from "./pages/theater/LoginTheater";

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

    
      <Route exact path="/theater/register" element={<Registration />} />
      <Route exact path="/theater/login" element={<LoginTheater />} />
     
    </Routes>
  );
}

export default Routess;
