import { useState } from "react";
import { SidebarContext } from "./SidebarContext.jsx";

export const SidebarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  const closeSidebar = () => setIsVisible(false);

  return (
    <SidebarContext.Provider value={{ isVisible, closeSidebar, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}; 