import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import HomePage from "./pages/Public/HomePage/HomePage";


function Routess() {
  return (
    
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            {/* admin routes */}
            <Route exact path="/admin" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      
  );
}

export default Routess;
