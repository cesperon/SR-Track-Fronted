import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Misc/DashboardHeader";
import { useSidebar, useUpdateSidebar } from "../context/SidebarContext";

const Dashboard = () => {
  const sidebar = useSidebar();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white h-full"
    >
      <div className="flex flex-col ">
        <Header />
        <div className="flex p-16 ">
          <Sidebar />
          {/* translate 80 */}
          {/* translate 320 */}
          <div
            className={`h-full w-full bg-white ${
              sidebar === false && "translate-x-[80px] mr-[80px]"
            } ${sidebar === true && "translate-x-[320px] mr-[320px]"}  
            flex transform transition duration-200 ease-in-out gap-8`}
          >
            <div className="w-6/12 h-10 basis-6/12 bg-blue-500 rounded"></div>
            <div className="w-6/12 h-10 basis-6/12 bg-green-500 rounded"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
