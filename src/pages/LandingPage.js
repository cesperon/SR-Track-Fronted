import React, { useState } from "react";
import Header from "../components/LandingPage/Header";
import About from "../components/LandingPage/About";
import Login from "../components/LandingPage/Login";
import Signup from "../components/LandingPage/Signup";
import MoreInfo from "../components/LandingPage/MoreInfo";
import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [login, setLogin] = useState(false);
  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };

  const [signup, setSignup] = useState(false);
  const openSignup = () => {
    setSignup(true);
  };
  const closeSignup = () => {
    setSignup(false);
  };

  const [moreinfo, setMoreinfo] = useState(false);
  const openMoreinfo = () => {
    setMoreinfo(true);
  };
  const closeMoreinfo = () => {
    setMoreinfo(false);
  };

  return (
    <div className="bg-sr bg-cover h-screen font-roboto">
      <div className="bg-opaq-black h-screen flex flex-col">
        <Header
          openLogin={openLogin}
          openSignup={openSignup}
          openInfo={openMoreinfo}
        />
        <About />
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {login && <Login handleClose={closeLogin} />}
        {signup && <Signup handleClose={closeSignup} />}
        {moreinfo && <MoreInfo handleClose={closeMoreinfo} />}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
