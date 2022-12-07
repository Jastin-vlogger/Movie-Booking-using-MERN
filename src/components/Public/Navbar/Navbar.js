import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../Register/Modal/Modal";
import "./Navbar.css";

function Navbar({ user }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleNav = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                New Releases
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Stream
              </Link>
            </li>
          </ul>
          {user ? (
            <>
              <li className="listItem">{user.displayName}</li>
              <li className="listItem" ></li>
            </>
          ) : (
            <>
              {button && (
                <>
                  <Modal open={openModal} onClose={() => setOpenModal(false)} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
