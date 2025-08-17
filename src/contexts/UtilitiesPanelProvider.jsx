import { useState } from "react";
import { UtilitiesPanelContext } from "./UtilitiesPanelContext.jsx";

export const UtilitiesPanelProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  const closeUtilitiesPanel = () => setIsVisible(false);

  return (
    <UtilitiesPanelContext.Provider
      value={{ isVisible, closeUtilitiesPanel, toggle }}
    >
      {children}
    </UtilitiesPanelContext.Provider>
  );
}; 