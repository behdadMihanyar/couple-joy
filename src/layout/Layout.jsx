import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Behdad from "../Pages/Behdad";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.pathname === "/" ? (
        <Outlet />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Layout;
