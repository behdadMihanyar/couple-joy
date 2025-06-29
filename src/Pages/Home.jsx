import Navbar from "../components/Navbar";
import People from "../components/People";
import Contact from "../components/Contact";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdvice } from "../features/advice";

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const [user, setUser] = useState({ name: "", family: "", phoneNumber: "" });
  const selectUser = useSelector((state) => state.user);
  const states = useSelector((state) => state.like);
  useEffect(() => {
    async function getAd() {
      return getAdvice(setAdvice);
    }
    getAd();
  }, []);
  console.log(advice);
  return (
    <>
      {states.status ? (
        <Form user={user} setUser={setUser} />
      ) : (
        <>
          <Contact />
          <Navbar />
          <div className="lg:flex justify-center flex-col items-center">
            <div className="mt-10 grid grid-cols-2 place-items-center content-center">
              <div className="max-sm:ml-[55%] max-md:ml-[80%] max-lg:ml-[80%] ml-[40%]  h-30 w-30 rounded-full text-center  ">
                <img
                  src="https://images.icon-icons.com/3150/PNG/512/user_profile_female_icon_192701.png"
                  alt=""
                />
              </div>
              <div className="max-sm:mr-[55%] max-md:mr-[80%] max-lg:mr-[80%] mr-[40%]  h-30 w-30 rounded-full text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4128/4128244.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-300">
              <div className="mt-10 flex justify-between rounded-full bg-fuchsia-400/30 p-7">
                <div>
                  <p className="text-white/50">
                    {selectUser.name} {selectUser.family}
                  </p>
                  <p className="text-2xl text-white">
                    {selectUser.phoneNumber}
                  </p>
                </div>
                <button className="bg-red-900/70 rounded-full p-5 text-white hover:bg-red-900/90 ease-in-out transition cursor-pointer">
                  <Link to="/profile">Edit</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between p-7 lg:justify-around">
              <p className="content-center font-bold text-white">
                New Daily Conversation
              </p>
              <p className="flex gap-1 rounded-full border border-purple-700 p-2 px-5 text-white">
                0
                <img
                  className="w-7"
                  src="https://www.iconpacks.net/icons/1/free-gift-icon-387-thumb.png"
                />
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex w-full gap-16 rounded-full bg-fuchsia-800/40 p-7 text-white lg:w-300 justify-between ">
              <div>
                <p className="text-amber-500 font-bold">Today's Qoute</p>
                <p>{advice}</p>
                <div className="mt-2 flex gap-2">
                  <div>
                    <img
                      className="w-5"
                      src="https://images.icon-icons.com/3150/PNG/512/user_profile_female_icon_192701.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-5"
                      src="https://cdn-icons-png.flaticon.com/512/4128/4128244.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between content-center">
                <div className="mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Emoji_u1f618.svg/2000px-Emoji_u1f618.svg.png?w=640"
                    className="w-10"
                    alt=""
                  />
                </div>
                <a
                  href="https://api.adviceslip.com/"
                  className="bg-red-900/50 rounded-full p-2 hover:bg-red-900/90 ease-in-out transition w-15 text-center"
                >
                  API
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-10">
            <div className="flex justify-between p-7 bg-linear-65 bg-fuchsia-800/40 rounded-full mt-3 mb-3 w-300">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8532/8532077.png"
                  className="w-15"
                  alt=""
                />
              </div>
              <div className="flex-1/3">
                <p className="text-white font-bold">Add Friend</p>
                <p className="text-white">
                  You can add friend from the list below.
                </p>
              </div>
            </div>
          </div>
          <People />
        </>
      )}
    </>
  );
};

export default Home;
