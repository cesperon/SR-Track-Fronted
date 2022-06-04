import React, { useState, useRef } from "react";

import { GiPoliceCar } from "react-icons/gi";

const Header = ({ openLogin }) => {
  const menuIndex = Array(4).fill(false);
  menuIndex[0] = true;
  const [menu, setMenu] = useState(menuIndex);
  const setMenuIndex = (index) => {
    const temp = Array(4).fill(false);
    temp[index] = true;
    setMenu(temp);
    console.log(menu);
  };
  return (
    <div className="flex justify-center items-center gap-12 text-black text-3xl tracking-wider bg-white shadow-xl relative border-blue-500 border-b-2">
      <span className="ml-4 rounded-full bg-blue-400 p-2 absolute left-0">
        <GiPoliceCar size="30" />
      </span>
      <ul className="flex gap-4 text-xl">
        <li
          className={`cursor-pointer ${
            !menu[0] && "hover:bg-gray-200 hover:text-black"
          } p-2 my-1 rounded flex items-center justify-center ${
            menu[0] && "bg-blue-400 text-white"
          }`}
          onClick={() => {
            setMenuIndex(0);
          }}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${
            !menu[1] && "hover:bg-gray-200 hover:text-black"
          }  p-2 my-1 rounded flex items-center justify-center ${
            menu[1] && "bg-blue-400 text-white"
          }`}
          onClick={() => {
            setMenuIndex(1);
          }}
        >
          About
        </li>
        <li
          className={`cursor-pointer ${
            !menu[2] && "hover:bg-gray-200 hover:text-black"
          } p-2 my-1 rounded flex items-center justify-center ${
            menu[2] && "bg-blue-400 text-white"
          }`}
          onClick={() => {
            setMenuIndex(2);
            openLogin();
          }}
        >
          Login
        </li>
        <li
          className={`cursor-pointer ${
            !menu[3] && "hover:bg-gray-200 hover:text-black"
          } p-2 my-1 rounded flex items-center justify-center ${
            menu[3] && "bg-blue-400 text-white"
          }`}
          onClick={() => {
            setMenuIndex(3);
          }}
        >
          Sign up
        </li>
      </ul>
    </div>
  );
};

export default Header;
