import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FcDatabase,
  FcCollaboration,
  FcBarChart,
  FcDownLeft,
} from "react-icons/fc";
import { useSidebar, useUpdateSidebar } from "../../context/SidebarContext";
const Sidebar = ({}) => {
  const showSidebar = useSidebar();
  const updateSidebar = useUpdateSidebar();
  const navigate = useNavigate();
  return (
    <div
      className={`fixed left-0 h-screen mt-[53px] w-80 bg-blue-500 text-white inset-y-0 transform transition duration-200 ease-in-out font-roboto z-20  ${
        showSidebar ? "" : "-translate-x-3/4 "
      }`}
    >
      <div className="fixed top-0 left-0 flex flex-col min-h-screen w-80 bg-white  text-black dark:bg-black transition duration-200 dark:text-white opacity-80 font-bold">
        <div
          className={`flex items-center p-4 ${
            showSidebar ? "justify-center" : "justify-end mr-1"
          }`}
        >
          <div
            className="cursor-pointer rounded-3xl h-10 w-10 bg-yellow-500 dark:bg-blue-500 transistion duration-200 flex items-center justify-center"
            onClick={() => {
              updateSidebar(!showSidebar);
            }}
          >
            {/* {colorTheme === "light" ? (
              <BsMoonStars size="18" />
            ) : (
              <BsSunFill size="18" />
            )} */}
          </div>
        </div>
        <hr className="opacity-40" />
        <div
          className={`profile items-center flex text-white py-5 ml-5 ${
            showSidebar ? "" : "justify-end "
          }`}
        >
          {/* <div className="profile-image ">
            <img src={require("../../assets/icon.png")} alt="profile icon" />
          </div> */}
          <div
            className={`profile-status flex flex-col ml-5 text-xs gap-1 text-black dark:text-white ${
              showSidebar ? "visible" : "hidden"
            }`}
          >
            {/* {user.data && (
              <span>{`${user.data.userById.firstName} ${user.data.userById.lastName}`}</span>
            )} */}
            <span>{localStorage.getItem("role")}</span>
            <span className="flex items-center">
              <div className="bg-lime-400 rounded-full w-2 h-2 mr-2"></div>
              online
            </span>
          </div>
          <hr className="opacity-40" />
        </div>
        <hr className="opacity-40" />
        <hr className="opacity-40" />
        <div className="py-5 ml-4  text-xl ">
          <h2 className={`${showSidebar ? "" : "hidden"}`}>Planning Tool</h2>
          <ul>
            <li
            //   className={`flex items-center mt-4 ${
            //     !menuIndex[0] && "hover:bg-wc-grey"
            //   } cursor-pointer rounded ${showSidebar && "p-2 mr-4"} ${
            //     menuIndex[0] && "bg-wc-green"
            //   }`}
            //   onClick={() => {
            //     menuToggle(0);
            //     toggleOptions();
            //   }}
            >
              <div
                className={`"" ${
                  showSidebar
                    ? "w-8 h-8 bg-slate-400 mr-2 text-black flex items-center justify-center rounded "
                    : "w-16 h-16 bg-slate-400 mr-2  text-black flex items-center justify-center rounded-xl  ml-auto my-1"
                }`}
              >
                <FcDatabase size={`${showSidebar ? "28" : "42"}`} />
              </div>
              <span className={`${showSidebar ? "ml-2 basis-8/12" : "hidden"}`}>
                Options
              </span>
              <span className={`${showSidebar ? "" : "hidden"}`}>
                {/* <MdKeyboardArrowRight size="28" /> */}
              </span>
            </li>
            <li
            //   className={`flex items-center mt-1 ${
            //     !menuIndex[1] && "hover:bg-wc-grey"
            //   } cursor-pointer rounded ${showSidebar && "p-2 mr-4"} ${
            //     menuIndex[1] && "bg-wc-green"
            //   }`}
            //   onClick={() => {
            //     menuToggle(1);
            //     toggleAlternatives();
            //   }}
            >
              <div
                className={`"" ${
                  showSidebar
                    ? "w-8 h-8 bg-slate-400 mr-2 text-black flex items-center justify-center rounded "
                    : "w-16 h-16 bg-slate-400 mr-2  text-black flex items-center justify-center rounded-xl  ml-auto my-1"
                }`}
              >
                <FcCollaboration size={`${showSidebar ? "28" : "42"}`} />
              </div>
              <span className={`${showSidebar ? "ml-2 basis-8/12" : "hidden"}`}>
                Alternatives
              </span>
              <span className={`${showSidebar ? "" : "hidden"}`}>
                {/* <MdKeyboardArrowRight size="28" /> */}
              </span>
            </li>
            <li
            //   className={`flex items-center mt-1 ${
            //     !menuIndex[2] && "hover:bg-wc-grey"
            //   } cursor-pointer rounded ${showSidebar && "p-2 mr-4"} ${
            //     menuIndex[2] && "bg-wc-green"
            //   }`}
            //   onClick={() => {
            //     menuToggle(2);
            //     toggleEvaluation();
            //   }}
            >
              <div
                className={`"" ${
                  showSidebar
                    ? "w-8 h-8 bg-slate-400 mr-2 text-black flex items-center justify-center rounded "
                    : "w-16 h-16 bg-slate-400 mr-2  text-black flex items-center justify-center rounded-xl  ml-auto my-1"
                }`}
              >
                <FcBarChart size={`${showSidebar ? "28" : "42"}`} />
              </div>
              <span className={`${showSidebar ? "ml-2 basis-8/12" : "hidden"}`}>
                Evaluation
              </span>
              <span className={`${showSidebar ? "" : "hidden"}`}>
                {/* <MdKeyboardArrowRight size="28" /> */}
              </span>
            </li>
            <li
              onClick={() => {
                navigate("/");
              }}
              //   className={`flex items-center mt-1 ${
              //     !menuIndex[3] && "hover:bg-wc-grey"
              //   } cursor-pointer rounded ${showSidebar && "p-2 mr-4"} ${
              //     menuIndex[3] && "bg-wc-green"
              //   }`}
              //   onClick={() => {
              //     menuToggle(3);
              //     toggleScenario();
              //   }}
            >
              <div
                className={`"" ${
                  showSidebar
                    ? "w-8 h-8 bg-slate-400 mr-2 text-black flex items-center justify-center rounded "
                    : "w-16 h-16 bg-slate-400 mr-2  text-black flex items-center justify-center rounded-xl  ml-auto my-1"
                }`}
              >
                <FcDownLeft size={`${showSidebar ? "28" : "42"}`} />
              </div>
              <span className={`${showSidebar ? "ml-2 basis-8/12" : "hidden"}`}>
                Scenarios
              </span>
              <span className={`${showSidebar ? "" : "hidden"}`}>
                {/* <MdKeyboardArrowRight size="28" /> */}
              </span>
            </li>
          </ul>
        </div>
        {/* <SidebarFooter toggle={toggleSidebar} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
