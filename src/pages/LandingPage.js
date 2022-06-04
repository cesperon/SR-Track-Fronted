import React, { useState } from "react";
import Header from "../components/LandingPage/Header";
import About from "../components/LandingPage/About";
import Login from "../components/LandingPage/Login";
import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [login, setLogin] = useState(false);
  const openLogin = () => {
    console.log("openLogin");
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };
  return (
    <div className="bg-sr bg-cover h-screen font-roboto">
      <div className="bg-opaq-black h-screen flex flex-col">
        <Header openLogin={openLogin} />
        <About />
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {login && <Login handleClose={closeLogin} />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
