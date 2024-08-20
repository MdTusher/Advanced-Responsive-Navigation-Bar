import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  const openSubmenu = (text, coord) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coord);
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        submenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
