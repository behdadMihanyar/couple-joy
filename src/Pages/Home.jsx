import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import People from "../components/People";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <Contact />
      <Navbar />
      <div>
        <div className="mt-10 grid grid-cols-2 place-items-center content-center">
          <div className="ml-[75%] h-30 w-30 rounded-full text-center lg:ml-[87%] ">
            <img
              src="https://images.icon-icons.com/3150/PNG/512/user_profile_female_icon_192701.png"
              alt=""
            />
          </div>
          <div className="lg-ml-[87%] mr-[75%] h-30 w-30 rounded-full text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4128/4128244.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex w-full justify-between rounded-full bg-fuchsia-400/30 p-7">
          <div>
            <p className="text-white/50">New Commergift</p>
            <p className="text-2xl text-white">00:11:15</p>
          </div>
          <button className="text-5xl text-amber-50 hover:text-black transition ease-in-out"></button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between p-7">
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
      <div className="flex w-full gap-16 rounded-full bg-fuchsia-800/40 p-7 text-white md:justify-between">
        <div>
          <p className="text-amber-500 font-bold">Next in: 12:12:52</p>
          <p>Do any of your partner's friend make you feel uncomfortable?</p>
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
          <button className="bg-red-900/50 rounded-full p-2 hover:bg-red-900/90 ease-in-out transition">
            Answer
          </button>
        </div>
      </div>
      <div className="flex justify-between p-7 bg-linear-65 bg-fuchsia-800/40 rounded-full mt-3 mb-3">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8532/8532077.png"
            className="w-15"
            alt=""
          />
        </div>
        <div className="flex-1/3">
          <p className="text-white font-bold">Invite your partner</p>
          <p className="text-white">Enjoy the full app experience together!</p>
        </div>
      </div>
      <People />
    </>
  );
};

export default Home;
