import { useState } from "react";
import toggleTheme from "../../utils/toggleTheme.js";
import Icon from "../sharedComponents/Icon.jsx";
import APP_CONSTANTS from "../../constants/index.js";
import SearchTrigger from "./SearchTrigger.jsx";
import { useSidebar } from "../../hooks/useSidebar.js";
import { useUtilitiesPanel } from "../../hooks/useUtilitiesPanel.js";

function DashboardHeader() {
  const { toggle: toggleSidebar } = useSidebar();
  const { toggle: toggleUtilities } = useUtilitiesPanel();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains(APP_CONSTANTS.DARK_THEME_VALUE)
  );

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <header className=" flex justify-between items-center py-compact lg:py-md px-sm lg:px-xl border-b border-b-dark-faint dark:border-b-light-soft">
      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-sm">
          <button
            onClick={toggleSidebar}
            className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300"
          >
            <Icon name="sidebar" className="" />
          </button>

          <button className="hidden md:flex p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="star" className="" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-md">
          <button className="text-dark-tertiary hover:text-dark-secondary dark:text-light-tertiary">
            Dashboard
          </button>

          <span className="text-dark-tertiary dark:text-light-tertiary">/</span>

          <button className="hover:text-dark-tertiary hover:dark:text-light-secondary">
            Default
          </button>
        </div>
      </div>

      <div className="flex items-center gap-spaced">
        <SearchTrigger />

        <div className="flex items-center gap-sm">
          <button
            onClick={handleThemeToggle}
            className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300"
          >
            <Icon name={isDark ? "sun" : "moon"} className="" />
          </button>

          <button className="hidden lg:flex p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="clock-counter-clockwise" className="" />
          </button>

          <button className="hidden lg:flex p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="bell" className="" />
          </button>

          <button
            onClick={toggleUtilities}
            className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300"
          >
            <Icon name="sidebar" className="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
