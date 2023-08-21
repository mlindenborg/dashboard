import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Header = ({ category, title }) => {
  const { currentColor } = useStateContext();
  console.log(currentColor);
  return (
    <div className=" mb-10">
      <p className="text-lg font-extralight text-gray-400">{category}</p>
      <p
        className="text-3xl font-extrabold tracking-tight text-slate-900  dark:text-gray-200"
        style={{ color: currentColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;