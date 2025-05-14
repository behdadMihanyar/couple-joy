import React from "react";
import { useDispatch } from "react-redux";
import { statusReverse } from "../redux/slice";
import { FaWpforms } from "react-icons/fa6";
const Form = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(statusReverse());
    console.log(e);
  };
  return (
    <>
      <div className="absolute w-full h-screen bg-cover z-10 opacity-90 bg-[url(https://png.pngtree.com/background/20250104/original/pngtree-seamless-stipple-linear-pink-hearts-valentine-s-day-background-aesthetic-vector-picture-image_15231608.jpg)]"></div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="h-screen w-full flex flex-col justify-center content-center items-center"
      >
        <span className="opacity-100 z-100 font-bold mb-5 text-2xl text-shadow-xl shadow-black">
          Welcome to Couple Joy
        </span>
        <div className="max-sm:w-auto h-120 shadow-2xl shadow-black bg-gray-800/90 grid z-100 grid-cols-1 rounded-4xl p-3 lg:grid-cols-5 lg:w-200 ">
          <div></div>
          <div className="grid grid-span-4 col-span-3 p-3 content-center text-center gap-3 font-bold text-white">
            <div className="sm: hidden lg:flex justify-center">
              <FaWpforms style={{ scale: "3" }} />
            </div>
            <div></div>
            <label>Name</label>
            <input
              autoFocus
              type="text"
              placeholder="type here ..."
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <label>Family</label>
            <input
              type="text"
              placeholder="type here ..."
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <label>Phone</label>
            <input
              type="number"
              placeholder="09xxxxxxxxx"
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <button
              type="onsubmit"
              className="bg-blue-400 rounded-3xl p-2 mt-4 hover:bg-blue-600 ease-in-out transition"
            >
              Submit
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </form>
    </>
  );
};

export default Form;
