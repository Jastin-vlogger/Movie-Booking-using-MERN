import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "../Register/Modal/Modal";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { Button } from "../PublicDashboard/components/Buttton/Button";
import SearchIcon from "@mui/icons-material/Search";

function Navbar({ user }) {
  const [query, setQuery] = React.useState("");
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);

  const logout = () => {
    window.open("http://localhost:3008/auth/logout", "_self");
  };

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
          <div className='searchBar'>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Movies"
              onChange={(e) => setQuery(e.target.value)}
            />
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

            <li className="nav-item">
              {userInfo?.phone ? (
                <li className="nav-links">
                  <Button >
                    hello guest
                    {/* <NavDropdown title={userInfo.name} >
                    <Link to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </NavDropdown> */}
                  </Button>
                </li>
              ) : (
                <>
                  <li className="nav-links">
                    <Modal
                      open={openModal}
                      onClose={() => setOpenModal(false)}
                    />
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
