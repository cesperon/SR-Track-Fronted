import React from "react";
import Backdrop from "../Misc/Backdrop";
import { motion } from "framer-motion";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
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
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className=" rounded-xl
         bg-gray-100 dark:bg-wc-gradient bg-cover text-wc-green dark:text-white shadow-md font-roboto "
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white w-10 h-10">Login</div>
      </motion.div>
    </Backdrop>
  );
};

export default Login;
