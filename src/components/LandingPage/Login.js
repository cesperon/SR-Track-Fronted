import React from "react";
import Backdrop from "../Misc/Backdrop";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
const Login = ({ handleClose }) => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("dashboard");
  };
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
        <h2 className="text-black text-xl">Login</h2>
        <input
          type="text"
          placeholder="username"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <input
          type="password"
          placeholder="password"
          className="rounded h-10 border-2 border-gray-200 text-black p-2"
        />
        <button
          className="bg-blue-500 rounded h-10 hover:bg-blue-300"
          onClick={submit}
        >
          Login
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Login;
