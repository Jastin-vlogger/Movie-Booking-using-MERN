import React from "react";
// import './index.css'
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
// import './home.css'
import { Button } from "../../../components/Public/PublicDashboard/components/Buttton/Button";

function Home() {
  
  return (
    <>
      <div className="private">
        <h1>welcome home</h1>
        <Link to='/theater/addScreen'>Add Screen </Link>
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;
