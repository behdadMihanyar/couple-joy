import React from "react";
import { Link } from "react-router-dom";
const Behdad = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Link className="text-2xl font-bold text-white block p-5" to="/">
        X
      </Link>
      <div className="flex flex-col h-full justify-start items-center text-4xl gap-7 text-white  ">
        <a
          className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold"
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGTBZJ4TFi5NwAAAZbUiR2w8lACOX-I45fppwDam6-w92S8O6IO7MJfgRS41JY_SOld4VINZH_rknablHSkmao9pzgAxcKeS3lmU3wc5jJ__3IuPRGP1egxAwRAwYWTkOaBD0U=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fbehdad-mihanyar-73191a362%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
        >
          LinkedIn
        </a>
        <a
          className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold"
          href="https://github.com/behdadMihanyar?tab=repositories"
        >
          Github
        </a>
        <a
          className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold"
          href="https://wa.me/+989390290271"
        >
          Whatsaap
        </a>
        <a
          className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold"
          href="mailto:bmihanyar@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Behdad;
