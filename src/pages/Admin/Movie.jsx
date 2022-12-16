import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../../thems';
import Topbar from '../../components/Admin/global/Topbar';
import './app.css';
import SideBar from '../../components/Admin/global/SideBar';
import Movies from '../../screens/admin/users/Movies';

function Movie() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar />
              <Movies />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Movie;
