import { useNavigate } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useCookies } from 'react-cookie';
import { ColorModeContext, useMode } from '../../thems';
import Topbar from '../../components/Admin/global/Topbar';
import './app.css';
import SideBar from '../../components/Admin/global/SideBar';
import Dashboard from '../../screens/admin/dashboard/Dashboard';

import axios from '../../axios/axios';

function Dashboards() {
  const [theme, colorMode] = useMode();
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.adminToken) {
        navigate('/admin/login');
      } else {
        const { data } = await axios.get('/api/admin/', {
          withCredentials: true,
        });
        if (!data.status) {
          removeCookie('adminToken');
          navigate('/admin/login');
        }
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar />
              <Dashboard />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboards;
