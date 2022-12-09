import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboards from "./pages/Admin/Dashboard";
import HomePage from "./pages/Public/HomePage/HomePage";
import User from "./screens/admin/users/User";


function Routess() {
  return (
    
      
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            {/* admin routes */}
            <Route exact path="/admin" element={<Dashboards />} />
            <Route exact path="/theaters" element={<User />} />
            
          </Routes>
        
      
  );
}

export default Routess;
