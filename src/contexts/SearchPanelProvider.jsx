import { useState } from "react";
import { SearchPanelContext } from "./SearchPanelContext.jsx";

export const SearchPanelProvider = ({ children }) => {
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);

  const openSearchPanel = () => setIsSearchPanelOpen(true);
  const closeSearchPanel = () => setIsSearchPanelOpen(false);

  return (
    <SearchPanelContext.Provider
      value={{ isSearchPanelOpen, openSearchPanel, closeSearchPanel }}
    >
      {children}
    </SearchPanelContext.Provider>
  );
}; 