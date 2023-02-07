import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../Register/Modal/Modal";
import "./Navbar.css";
import { useSelector } from "react-redux";
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
import { Modal } from "antd";

const useDeBounce = (value, time = 250) => {
  const [deBonuceVal, setDeBouncVal] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeBouncVal(value);
    }, time);
    return () => clearTimeout(timeout);
  }, [value, time]);
  return deBonuceVal;
};

function Navbar() {
  const [query, setQuery] = React.useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userInformation);
  const deBonuceVal = useDeBounce(query);
  const [modal1Open, setModal1Open] = useState(false);

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

  useEffect(() => {
    console.log(deBonuceVal);
    if (!deBonuceVal.trim()) {
      setSuggestion([]);
      return;
    } else {
      axios.get(`/api/user/search/${deBonuceVal}`).then(({ data }) => {
        console.log(data);
        setSuggestion(data);
      });
    }
  }, [deBonuceVal]);

  const moviePageRedirection = (id) => {
    console.log(id);
    navigate(`/moviepage/${id}`);
  };

  const openModal = () => {
    setModal1Open(true);
  };

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
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" onClick={openModal}>
                <SearchIcon />
              </Link>
            </li>
            <Modal
              title="Search for any movie"
              centered
              open={modal1Open}
              onOk={() => setModal1Open(false)}
              footer={null}
              onCancel={() => setModal1Open(false)}
            >
              <div className="search">
                <input
                  type="text"
                  placeholder="Search for Movies"
                  onChange={(e) => setQuery(e.target.value)}
                />

                {suggestion &&
                  suggestion.map((item) => (
                    <div style={{ cursor: "pointer" }}>
                      <Box
                        component="span"
                        sx={{ display: "block", color: "primary.main" }}
                        key={item._id}
                        onClick={() => {
                          console.log("clicked");
                          moviePageRedirection(item._id);
                        }}
                      >
                        {item.title}
                      </Box>
                    </div>
                  ))}
              </div>
            </Modal>
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
                <li className="nav-links">
                  <Modals />
                </li>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
