import { useSidebar } from "../hooks/useSidebar.js";
import FavoritesList from "./sidebarWrapper/FavoritesList.jsx";
import SidebarNavigation from "./sidebarWrapper/SidebarNavigation.jsx";
import SidebarTabs from "./sidebarWrapper/SidebarTabs.jsx";
import UserInfo from "./sidebarWrapper/UserInfo.jsx";
import logo from "../assets/snowUI.png";

function Sidebar() {
  const { isVisible } = useSidebar();

  if (!isVisible) return null;

  return (
    <aside
      className={`flex flex-col gap-narrow h-full py-lg px-md border-e border-e-dark-faint dark:border-e-light-soft ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <UserInfo />
      <SidebarTabs />
      <FavoritesList />
      <SidebarNavigation />

      <div className="mt-auto flex justify-center py-4">
        <img src={logo} alt="Snow Ui Logo" className="h-30" />
      </div>
    </aside>
  );
}

export default Sidebar;
