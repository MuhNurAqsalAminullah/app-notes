import React from "react";
import { Outlet } from "react-router-dom";

// component >>>>
import Sidebar from "../components/sidebar";

const Layout = ({ burger, setBurger }) => {
  return (
    <div className="app-layout">
      <Sidebar burger={burger} setBurger={setBurger} />
      <Outlet />
    </div>
  );
};

export default Layout;
