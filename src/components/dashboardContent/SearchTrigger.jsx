import { useEffect } from "react";
import { useSearchPanel } from "../../hooks/useSearchPanel.js";
import Icon from "../sharedComponents/Icon.jsx";

function SearchTrigger() {
  const { openSearchPanel } = useSearchPanel();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchPanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSearchPanel]);

  return (
    <button
      onClick={openSearchPanel}
      className="flex items-center gap- max-w-[160px] py-xs px-sm text-dark-muted dark:text-light-tertiary bg-dark-faint dark:bg-light-soft rounded-regular overflow-hidden"
    >
      <Icon name="magnifying-glass" className="me-1" />

      <div className="flex justify-between items-center">
        <span className="">Search...</span>
        <span className="flex items-center px-2 text-[10px] text-dark-muted dark:text-light-tertiary dark:bg-dark-low border border-dark-low rounded-small">
          Ctrl K
        </span>
      </div>
    </button>
  );
}

export default SearchTrigger; 