import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Public/HomePage/HomePage";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
