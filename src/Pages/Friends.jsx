import React from "react";
import { useSelector } from "react-redux";
const Friends = () => {
  const states = useSelector((state) => state.like);
  return <div className="h-full w-full bg-red-300 "></div>;
};

export default Friends;
