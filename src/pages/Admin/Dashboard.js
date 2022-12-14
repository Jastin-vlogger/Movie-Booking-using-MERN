import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Admin/global/Topbar";
import "./app.css";
import SideBar from "../../components/Admin/global/SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "../../screens/admin/dashboard/Dashboard";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";


function Dashboards() {
  const [theme, colorMode] = useMode();
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate()
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.adminToken) {
        navigate("/admin/login");
      } else {
        const { data } = await axios.get("/api/admin/", {
          withCredentials: true,
        });
        console.log(data);
        if (!data.status) {
          removeCookie("adminToken");
          navigate("/admin/login");
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
              <Topbar></Topbar>
              <Dashboard />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboards;
