import { useContext } from "react";
import { UtilitiesPanelContext } from "../contexts/UtilitiesPanelContext.jsx";

export const useUtilitiesPanel = () => {
  const context = useContext(UtilitiesPanelContext);
  if (!context) {
    throw new Error(
      "useUtilitiesPanel must be used within UtilitiesPanelProvider"
    );
  }
  return context;
}; 