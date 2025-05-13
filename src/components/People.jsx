import { useDispatch, useSelector } from "react-redux";
import { incremenet, first, second, third, fourth } from "../redux/slice";
import toast, { Toaster } from "react-hot-toast";
const People = () => {
  const states = useSelector((state) => state.like);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 px-10 mb-20">
        <div className="rounded-2xl bg-purple-800/50 h-50 flex flex-col justify-center items-center relative">
          <img
            src="/images/heart.png"
            alt=""
            className="w-7 absolute left-4 top-4"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png"
            alt=""
            className="w-20"
          />
          <p className="font-bold text-gray-800">Victoria Zarabi</p>
          {states.first ? (
            <button
              onClick={() => {
                dispatch(incremenet());
                toast.success("Friend request sent");
                dispatch(first());
              }}
              className="font-bold bg-red-400 rounded-full px-4 py-1 text-white hover:bg-red-600 transition ease-in-out cursor-pointer"
            >
              Add Friend
            </button>
          ) : (
            <div className="font-bold bg-gray-600 rounded-full px-4 py-1 text-white transition ease-in-out">
              Sent
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-red-200/50 h-50 flex flex-col justify-center items-center relative">
          <img
            src="/images/heart.png"
            alt=""
            className="w-7 absolute left-4 top-4"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png"
            alt=""
            className="w-20"
          />
          <p className="font-bold text-gray-800">Victoria Zarabi</p>
          {states.second ? (
            <button
              onClick={() => {
                dispatch(incremenet());
                toast.success("Friend request sent");
                dispatch(second());
              }}
              className="font-bold bg-red-400 rounded-full px-4 py-1 text-white hover:bg-red-600 transition ease-in-out cursor-pointer"
            >
              Add Friend
            </button>
          ) : (
            <div className="font-bold bg-gray-600 rounded-full px-4 py-1 text-white transition ease-in-out">
              Sent
            </div>
          )}
        </div>
        <div className="rounded-2xl bg-orange-700/50 h-50 flex flex-col justify-center items-center relative">
          <img
            src="/images/heart.png"
            alt=""
            className="w-7 absolute left-4 top-4"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png"
            alt=""
            className="w-20"
          />
          <p className="font-bold text-gray-800">Victoria Zarabi</p>
          {states.third ? (
            <button
              onClick={() => {
                dispatch(incremenet());
                toast.success("Friend request sent");
                dispatch(third());
              }}
              className="font-bold bg-red-400 rounded-full px-4 py-1 text-white hover:bg-red-600 transition ease-in-out cursor-pointer"
            >
              Add Friend
            </button>
          ) : (
            <div className="font-bold bg-gray-600 rounded-full px-4 py-1 text-white transition ease-in-out">
              Sent
            </div>
          )}
        </div>
        <div className="rounded-2xl bg-blue-200/50 h-50 flex flex-col justify-center items-center relative">
          <img
            src="/images/heart.png"
            alt=""
            className="w-7 absolute left-4 top-4"
          />
          <img
            src="https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png"
            alt=""
            className="w-20"
          />
          <p className="font-bold text-gray-800">Victoria Zarabi</p>
          {states.fourth ? (
            <button
              onClick={() => {
                dispatch(incremenet());
                toast.success("Friend request sent");
                dispatch(fourth());
              }}
              className="font-bold bg-red-400 rounded-full px-4 py-1 text-white hover:bg-red-600 transition ease-in-out cursor-pointer"
            >
              Add Friend
            </button>
          ) : (
            <div className="font-bold bg-gray-600 rounded-full px-4 py-1 text-white transition ease-in-out">
              Sent
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default People;
