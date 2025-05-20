/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
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
  const select = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    validation(select);
    setBio(true);
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
        <div className="w-full h-screen z-50 bg-pink-600 overflow-hidden transition ease-in flex flex-col justify-center">
          <p className="text-center font-bold mb-2 text-2xl text-white">
            Edit Info
          </p>
          <form
            class="max-sm:w-85 mx-auto w-100 h-150 bg-gradient-to-b from-blue-400/70 to-blue-800/5 rounded-2xl flex justify-center flex-col"
            submit={(e) => submitHandler(e)}
          >
            <button
              className="max-sm:w-10 max-sm:h-10 relative left-[-10px] top-[-90px] text-2xl bg-white rounded-full p-1 font-bold w-10 h-10 "
              onClick={() => setBio(false)}
            >
              X
            </button>
            <div className="flex flex-col w-full h-100 justify-center gap-3 p-10">
              <div class="">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={select.name}
                  type="text"
                  id="base-input"
                  onChange={(e) => dispatch(getName(e.target.value))}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Family Name
                </label>
                <input
                  value={select.family}
                  type="text"
                  id="base-input"
                  onChange={(e) => dispatch(getFamily(e.target.value))}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  value={select.phoneNumber}
                  onChange={(e) => dispatch(getPhoneNumber(e.target.value))}
                  type="text"
                  id="large-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-5">
                <label
                  for="large-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>

                <textarea
                  value={select.bio}
                  type="text"
                  onChange={(e) => dispatch(getbio(e.target.value))}
                  id="large-input"
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  rows="5"
                  cols="50"
                >
                  {select.bio}
                </textarea>
                <button
                  className="bg-blue-300 w-full p-4 rounded-3xl mt-5 font-bold"
                  type="submit"
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div class="w-full h-screen px-10 pt-10">
          <div class="relative mt-16 mb-10 max-w-sm mx-auto">
            <div class="rounded overflow-hidden shadow-md bg-white h-150">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-50 w-50">
                  <img
                    src={select.image}
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class=" flex flex-col gap-5 justify-center px-6 mt-40">
                <h1 class="font-bold text-3xl text-center mb-1">
                  {selectUser.name}
                </h1>
                <p class="text-gray-800 text-lg text-center">
                  {selectUser.phoneNumber}
                </p>
                <p class="text-gray-800 text-lg text-center">
                  {select.bio.length > 50 && select.bio.slice(0, 100)}
                </p>
                <button
                  class="text-center text-gray-600 text-xl pt-3 font-bold cursor-pointer "
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
