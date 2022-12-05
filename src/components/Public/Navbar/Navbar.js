import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../PublicDashboard/components/Buttton/Button";
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleNav = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = ()=>{
    if(window.innerWidth <=960){
        setButton(false)
    }else{
        setButton(true)
    }
  }
  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize',showButton)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MOVIE+
          </Link>
          <div className="menu-icon" onClick={handleNav}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/releases'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                New Releases
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/stream'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stream
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
