import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import { ProSidebarProvider } from "react-pro-sidebar";
import Home from "../../screens/theaters/dasboard/Home";
import Sidebar from "../../screens/theaters/global/Sidebar";
import Topbar from "../../screens/theaters/global/Topbar";
import ScreensList from "../../screens/theaters/dasboard/ScreensList";

function Screen() {
    const [theme, colorMode] = useMode();
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProSidebarProvider>
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />
                <ScreensList />
              </main>
            </div> 
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default Screen
