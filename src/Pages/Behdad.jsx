import React from "react";
import { Link } from "react-router-dom";
const Behdad = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Link className="text-2xl font-bold text-white block p-5" to="/">
        X
      </Link>
      <div className="flex flex-col h-full justify-start items-center text-4xl gap-7 text-white  ">
        <a className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold">
          LinkedIn
        </a>
        <a className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold">
          Github
        </a>
        <a className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold">
          Whatsaap
        </a>
        <a className="shadow-2xl shadow-black cursor-pointer hover:scale-125 transition ease-in-out hover:text-gray-800 font-bold">
          Email
        </a>
      </div>
    </div>
  );
};

export default Behdad;
