import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Behdad from "../Pages/Behdad";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
