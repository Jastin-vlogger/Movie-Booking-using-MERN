import User from '../../screens/admin/users/User'
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Admin/global/Topbar";
import "./app.css";
import SideBar from "../../components/Admin/global/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";

function Theater() {
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
            <User />
          </main>
        </div>
      </ProSidebarProvider>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default Theater
