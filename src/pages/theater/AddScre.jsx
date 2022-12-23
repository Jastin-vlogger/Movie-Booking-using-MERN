import React from "react";
import AddScreen from "../../screens/theaters/dasboard/AddScreen";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "../../screens/theaters/global/Sidebar";
import Topbar from "../../screens/theaters/global/Topbar";

function AddScre() {
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
              <AddScreen />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AddScre;
