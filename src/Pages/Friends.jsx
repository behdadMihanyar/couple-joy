import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { first, fourth, second, third } from "../redux/like";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";

const Friends = () => {
  const like = useSelector((state) => state.like);
  const dispatch = useDispatch();
  console.log(like);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-7">
        <IoIosNotifications fontSize="45" color="white" />
        <p className="font-bold text-white">Notification</p>
      </div>
      {like.first && like.second && like.third && like.fourth == true ? (
        <div className="flex flex-col justify-center font-bold items-center h-100 text-3xl text-white">
          <div className="text-center mt-7 ">
            <p> No friend request ...</p>
            <Link
              className="text-center flex justify-center content-center mt-5"
              to="/"
            >
              <IoMdArrowBack />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-5  mt-10 max-sm:p-2">
          {!like.first && (
            <div className="bg-white rounded-full p-5 flex flex-row justify-between font-bold">
              <span className="flex ">
                <FaUserFriends fontSize="20px" className="max-sm:hidden" />
                You have sent request to Behdad
              </span>
              <span
                className="cursor-pointer hover:scale-120"
                onClick={() => dispatch(first())}
              >
                <MdCancel fontSize="30px" color="black" />
              </span>
            </div>
          )}
          {!like.second && (
            <div className="bg-white rounded-full p-5 flex flex-row justify-between font-bold">
              <span className="flex ">
                <FaUserFriends fontSize="20px" className="max-sm:hidden" />
                You have sent request to Amir
              </span>
              <span className="cursor-pointer hover:scale-120 ">
                <MdCancel
                  fontSize="30px"
                  color="black"
                  onClick={() => dispatch(second())}
                />
              </span>
            </div>
          )}
          {!like.third && (
            <div className="bg-white rounded-full p-5 flex flex-row justify-between font-bold">
              <span className="flex ">
                <FaUserFriends fontSize="20px" className="max-sm:hidden" />
                You have sent request to Mahsa
              </span>
              <span
                className="cursor-pointer hover:scale-120 "
                onClick={() => dispatch(third())}
              >
                <MdCancel fontSize="30px" color="black" />
              </span>
            </div>
          )}
          {!like.fourth && (
            <div className="bg-white rounded-full p-5 flex flex-row justify-between font-bold">
              <span className="flex ">
                <FaUserFriends fontSize="20px" className="max-sm:hidden" />
                You have sent request to Nika
              </span>
              <span
                className="cursor-pointer hover:scale-120 "
                onClick={() => dispatch(fourth())}
              >
                <MdCancel fontSize="30px" color="black" />
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Friends;
