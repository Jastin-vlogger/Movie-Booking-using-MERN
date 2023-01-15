import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import Modal from "../Register/Modal/Modal";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { Button } from "../PublicDashboard/components/Buttton/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useCookies } from "react-cookie";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalActivitySharpIcon from "@mui/icons-material/LocalActivitySharp";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import axios from "../../../axios/axios";

function Navbar() {
  const [cookies] = useCookies([]);
  const [query, setQuery] = React.useState("");
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.userInformation);
  console.log(user)

  const logout = () => {
    // window.open("http://localhost:3008/auth/logout", "_self");
    localStorage.clear();
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
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const listItems = [
    {
      listIcon: <AccountCircleRoundedIcon />,
      listText: "Profile",
      path: "/profile",
    },
    {
      listIcon: <LocalActivitySharpIcon />,
      listText: "Your Orders",
      path: "/orderhistory",
    },
    {
      listIcon: <ContactSupportSharpIcon />,
      listText: "Help & Support",
    },
    {
      listIcon: <SettingsSharpIcon />,
      listText: "Account & Settings",
    },
  ];

  // useEffect(()=>{
  //   // async function verify(){
  //   //   const {data} =await axios.get('/login/success')
  //   //   console.log(data)

  //   // }
  //   // verify()
  // },[])

  const list = () => (
    <Box
      sx={{
        width: 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: 350,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <List>
          {listItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <Divider />
              <Link to={text.path}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "black" }}>
                    {text.listIcon}
                  </ListItemIcon>
                  <ListItemText primary={text.listText} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Button
          onClick={logout}
          variant="outlined"
          sx={{ bottom: 1, margin: 1, border: 1.5, color: "white" }}
        >
          LogOut
        </Button>
      </Box>
    </Box>
  );

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
          <div className="searchBar">
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
              {user?.userInfo ? (
                <li className="nav-links">
                  <div style={{ cursor: "pointer" }} onClick={toggleDrawer()}>
                    Hello guest
                  </div>
                  <SwipeableDrawer
                    open={open}
                    anchor="right"
                    onClose={toggleDrawer()}
                    onOpen={toggleDrawer()}
                    sx={{ borderRadius: "20px 20px 0 0" }}
                  >
                    {list()}
                  </SwipeableDrawer>
                </li>
              ) : (
                <>
                  <li className="nav-links">
                    <Modal
                    // open={openModal}
                    // onClose={() => setOpenModal(false)}
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
