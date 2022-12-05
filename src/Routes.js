import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Public/register/Register";
import HomePage from "./pages/Public/HomePage/HomePage";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={< Register/>} />
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
