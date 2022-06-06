import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();
const UpdateSidebarContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};
export const useUpdateSidebar = () => {
  return useContext(UpdateSidebarContext);
};

export const ThemeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const updateSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <SidebarContext.Provider value={sidebar}>
        <UpdateSidebarContext.Provider value={updateSidebar}>
          {children}
        </UpdateSidebarContext.Provider>
      </SidebarContext.Provider>
    </>
  );
};
