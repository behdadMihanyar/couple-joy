import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaWpforms } from "react-icons/fa6";
import { statusReverse } from "../redux/like";
import validation from "../Validation/formValidation";
import toast, { Toaster } from "react-hot-toast";
import { getFamily, getName, getPhoneNumber } from "../redux/user";
import { IoMdArrowBack } from "react-icons/io";
const Form = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.user);
  const submitHandler = (e) => {
    e.preventDefault();
    validation(select);
    dispatch(statusReverse());
    toast(`Hello ${select.name}!`, {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    console.log(e);
  };
  console.log(select.name);
  return (
    <>
      <div className="overscroll-none absolute w-full h-screen bg-cover z-10 opacity-90 bg-[url(https://png.pngtree.com/background/20250104/original/pngtree-seamless-stipple-linear-pink-hearts-valentine-s-day-background-aesthetic-vector-picture-image_15231608.jpg)]"></div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="h-screen w-full flex flex-col justify-center content-center items-center"
      >
        <div className="max-sm:w-auto h-120 shadow-2xl shadow-black bg-pink-700/90 grid z-100 grid-cols-1 rounded-4xl p-3 lg:grid-cols-5 lg:w-200 ">
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
              onChange={(e) => dispatch(getName(e.target.value))}
              value={select.name}
              placeholder="Type here ..."
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <label>Family</label>
            <input
              value={select.family}
              onChange={(e) => dispatch(getFamily(e.target.value))}
              type="text"
              placeholder="Type here ..."
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <label>Phone</label>
            <input
              value={select.phoneNumber}
              onChange={(e) => dispatch(getPhoneNumber(e.target.value))}
              type="number"
              placeholder="09xxxxxxxxx"
              className="border-white border-2 p-3 rounded-full focus:scale-110 transition ease focus:bg-white/20"
            />
            <button
              type="submit"
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
