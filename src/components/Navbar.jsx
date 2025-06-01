import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useLocation();
  console.log(navigate);
  const counter = useSelector((state) => state.like.counter);
  return (
    <div className="w-full">
      <nav>
        <ul className="flex gap-3 justify-around bg-pink-500 fixed w-full bottom-0 p-2 z-10 rounded-t-2xl lg:justify-around ">
          <li className="flex flex-col items-center text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              className="w-6"
              alt=""
            />
            <Link to="/" className="text-center text-amber-50">
              {navigate.pathname === "/" ? (
                <h1 className="font-bold">Home</h1>
              ) : (
                "Home"
              )}
            </Link>
          </li>
          <li className="flex flex-col items-center text-center">
            <Link to="/chat" className="text-center text-amber-50">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14/14558.png"
                alt=""
                className="w-6"
              />
              {navigate.pathname === "/chat" ? (
                <h1 className="font-bold">Chat</h1>
              ) : (
                "Chat"
              )}
            </Link>
          </li>
          <li className="flex flex-col items-center text-center">
            <div className="flex gap-1 ">
              <img
                src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
                alt=""
                className="w-6"
              />
n            </div>

            <Link to="/friends" className="text-center text-amber-50">
              {navigate.pathname === "/friends" ? (
                <h1 className="font-bold">Friends</h1>
              ) : (
                "Friends"
              )}
            </Link>
          </li>
          <li className="flex flex-col items-center text-center">
            <img
              src="https://www.iconpacks.net/icons/1/free-user-icon-972-thumb.png"
              alt=""
              className="w-6"
            />
            <Link to="/profile" className="text-center text-amber-50">
              {navigate.pathname === "/profile" ? (
                <h1 className="font-bold">Profile</h1>
              ) : (
                "Profile"
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
