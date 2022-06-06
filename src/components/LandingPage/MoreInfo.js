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
const MoreInfo = ({ handleClose }) => {
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
        <h2 className="text-black text-xl">About</h2>
        <p className="text-black">
          lorem ipsum dolor sit amet, lorem ipsum dolor sit lorem
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default MoreInfo;
