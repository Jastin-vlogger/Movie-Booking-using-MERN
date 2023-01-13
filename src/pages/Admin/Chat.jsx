import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Admin/global/Topbar";
import "./app.css";
import SideBar from "../../components/Admin/global/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import AddMoviess from "../../screens/admin/users/addmovies/AddMoviess";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "../../axios/axios";
import Contacts from "../../screens/admin/chat/Contacts";
import Welcome from "../../screens/theaters/chat/Welcome";
import ChatContainer from "../../screens/admin/chat/ChatContainer";
import styled from "styled-components";
import { io } from "socket.io-client";

function Chat() {
  const host = "http://localhost:3008"
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect( () => {
    async function setUser(){
        const token = cookies.adminToken;
        const decoded = await jwt_decode(token);
        console.log("adminnnnnnnnnnn",decoded.id)
        setCurrentUser(decoded.id);
    }
    setUser()
  }, []);
  
  
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser);
    }
  }, [currentUser]);


  useEffect(() => {
    async function fetchData(){
      const token = cookies.adminToken;
      const decoded = await jwt_decode(token);
      console.log("jwt",decoded.id)
      const id =(decoded.id)
      // console.log("state",currentUser);
      // const data = await axios.get(`http://localhost:3001/theater/allTheater/${id}`);
      const data = await axios.get(`api/theater/allTheater`);
      // console.log(data);
      setContacts(data.data)
    }
    fetchData();
  }, [])
  


  // useEffect(async () => {
  //   // if (currentUser) {
  //   // if (currentUser.isAvatarImageSet) {
  //   const data = await axios.get("http://localhost:3001/theater/allTheater");
  //   console.log("in use effect");
  //   setContacts(data.data);
  //   // } else {
  //   // navigate("/setAvatar");
  //   // }
  //   // }
  // }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar></Topbar>

              <Container>
                <div className="container">
                  <Contacts contacts={contacts} changeChat={handleChatChange} />
                  {currentChat === undefined ? (
                    <Welcome />
                  ) : (
                    <ChatContainer
                      currentChat={currentChat}
                      currentUser={currentUser}
                      socket={socket}
                    />
                  )}
                </div>
              </Container>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #fff;
  .container {
    height: 85vh;
    width: 70vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
