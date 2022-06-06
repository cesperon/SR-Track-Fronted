import React from "react";
import Backdrop from "../Misc/Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "-20vh",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "-100vh", opacity: 0 },
};
const Signup = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className=" rounded-xl
         bg-gray-100 dark:bg-wc-gradient bg-cover text-wc-green dark:text-white shadow-md font-roboto w-2/12 p-8 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-black text-xl">Signup</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="first name"
            className="rounded h-10 border-2 border-gray-200 text-black w-full p-2"
          />
          <input
            type="text"
            placeholder="last name"
            className="rounded h-10 border-2 border-gray-200 text-black w-full p-2"
          />
        </div>
        <input
          type="text"
          placeholder="username"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <input
          type="text"
          placeholder="email"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <input
          type="text"
          placeholder="phone number"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <input
          type="password"
          placeholder="password"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <button className="bg-blue-500 rounded h-10 hover:bg-blue-300">
          Login
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Signup;
