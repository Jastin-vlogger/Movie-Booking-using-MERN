import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovies from "./pages/Admin/AddMovies";
import Dashboards from "./pages/Admin/Dashboard";
import Movie from "./pages/Admin/Movie";
import HomePage from "./pages/Public/HomePage/HomePage";


function Routess() {
  return (
    
      
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            {/* admin routes */}
            <Route exact path="/admin" element={<Dashboards />} />
            <Route exact path="/admin/movies" element={<Movie />} />
            <Route exact path="/admin/movies/addMovies" element={<AddMovies />} />
            
            
          </Routes>
        
      
  );
}

export default Routess;
