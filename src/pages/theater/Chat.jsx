import React, { useEffect, useRef, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "../../screens/theaters/global/Topbar";
import AddShows from "../../screens/theaters/dasboard/AddShows";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../../axios/axios";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import ChatContainer from "../../screens/theaters/chat/ChatContainer";
import Welcome from "../../screens/theaters/chat/Welcome";
import Contacts from "../../screens/theaters/chat/Contacts";
import Sidebar from "../../screens/theaters/global/Sidebar";

function Chat() {
  const host = "http://localhost:3001";
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    async function setUser() {
      const token = cookies.TheaterToken;
      const decoded = await jwt_decode(token);
      setCurrentUser(decoded.id);
    }
    setUser();
  }, []);

  //   useEffect(() => {
  //     if (currentUser) {
  //       //   socket.current = io(host);
  //       //   socket.current.emit("add-user", currentUser);
  //     }
  //   }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      //   const token = cookies.TheaterToken;
      //   const decoded = await jwt_decode(token);

      //   const id = decoded.id;

      const { data } = await axios.get(`/api/theater/allAdminStaff`);
      console.log(data);
      setContacts(data);
    };
    fetchData();
  }, []);

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
            <Sidebar />
            <main className="content">
              <Topbar></Topbar>

              <Container>
                <div className="container">
                  <Contacts
                    contacts={contacts}
                    changeChat={handleChatChange}
                    currentUser={currentUser}
                  />
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
