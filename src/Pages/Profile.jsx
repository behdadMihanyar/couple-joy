/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";

import {
  getbio,
  getFamily,
  getImage,
  getName,
  getPhoneNumber,
} from "../redux/user";
import validation from "../Validation/formValidation";
import { Link } from "react-router-dom";
const Profile = () => {
  const [preview, setPreview] = useState("");
  const [imageName, setImageName] = useState("");
  const [bio, setBio] = useState(false);
  const [fulltxt, setFulltxt] = useState(false);
  const select = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    validation(select);
    setBio(false);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const imageUrl = URL.createObjectURL(file); // creates a temporary local URL
      setPreview(imageUrl);
      dispatch(getImage(imageUrl));
    }
  };
  const bioHandler = () => {
    setBio(true);
  };
  const selectUser = useSelector((state) => state.user);
  console.log(select.name, select.family);
  return (
    <>
      {bio ? (
        <div className="w-full h-screen z-50 bg-pink-600 transition ease-in flex flex-col justify-center">
          <p className="text-center font-bold mb-2 text-2xl text-white">
            Edit Info
          </p>
          <form
            className="max-sm:w-85 mx-auto w-100 h-150 bg-gradient-to-b from-blue-400/70 to-blue-800/5 rounded-2xl flex justify-center flex-col"
            onSubmit={(e) => submitHandler(e)}
          >
            <button
              className="max-sm:w-10 max-sm:h-10 relative left-[-10px] top-[-90px] text-2xl bg-white rounded-full p-1 font-bold w-10 h-10 "
              onClick={() => setBio(false)}
            >
              X
            </button>
            <div className="flex flex-col w-full h-100 justify-center gap-3 p-10">
              <div className="">
                <label
                  for="base-input"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={select.name}
                  type="text"
                  id="base-input"
                  onChange={(e) => dispatch(getName(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="">
                <label
                  for="base-input"
                  className="block mb-2 text-md  font-medium text-gray-900 dark:text-white"
                >
                  Family Name
                </label>
                <input
                  value={select.family}
                  type="text"
                  id="base-input"
                  onChange={(e) => dispatch(getFamily(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="small-input"
                  className="block mb-2 text-md  font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  value={select.phoneNumber}
                  onChange={(e) => dispatch(getPhoneNumber(e.target.value))}
                  type="text"
                  id="large-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-5">
                <label
                  for="large-input"
                  className="block mb-2 text-md  font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>

                <textarea
                  value={select.bio}
                  type="text"
                  onChange={(e) => dispatch(getbio(e.target.value))}
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  rows="5"
                  cols="50"
                >
                  {select.bio}
                </textarea>
                <button
                  className="bg-blue-300 w-full p-4 rounded-3xl mt-5 font-bold cursor-pointer"
                  type="submit"
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full h-full px-7 mb-20">
          <div className="relative mb-10 max-w-sm mx-auto">
            <div className="rounded shadow-md bg-white h-auto pb-10">
              <div className="absolute -mt-15 w-full flex justify-center">
                <div className="h-35 w-35">
                  <img
                    src={select.image}
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-5 justify-center px-6 pt-25 mt-15">
                <FaPerson
                  style={{
                    fontSize: "30px",
                    color: "#FF90BB",
                    alignSelf: "center",
                  }}
                />

                <h1 className="font-bold text-3xl text-center mb-1">
                  _{selectUser.name}_
                </h1>
                <p className="text-gray-800 text-lg text-center">
                  {selectUser.phoneNumber}
                </p>
                <h1 className="text-center font-bold text-2xl">_ Bio _</h1>
                <p className="text-gray-800 text-lg text-center">
                  {select.bio.length > 50 && fulltxt == false ? (
                    <>
                      {select.bio.slice(0, 50)}{" "}
                      <button
                        className="cursor-pointer font-bold"
                        onClick={() => setFulltxt(true)}
                      >
                        read more ...
                      </button>
                    </>
                  ) : (
                    select.bio
                  )}
                </p>
                <button
                  className="text-center text-gray-600 text-xl pt-3 font-bold cursor-pointer "
                  onClick={() => bioHandler()}
                >
                  Edit your info ...
                </button>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="file"
                  className=" text-center"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="flex justify-center text-white font-bold cursor-pointer "
          >
            <IoMdArrowBack style={{ fontSize: "30px" }} />
            Home
          </Link>
        </div>
      )}
    </>
  );
};

export default Profile;
