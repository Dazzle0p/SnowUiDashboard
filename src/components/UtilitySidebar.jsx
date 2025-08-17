import { useUtilitiesPanel } from "../hooks/useUtilitiesPanel.js";
import Icon from "./sharedComponents/Icon.jsx";
import Activities from "./utilitiesWrapper/Activities.jsx";
import Contacts from "./utilitiesWrapper/Contacts.jsx";
import Notifications from "./utilitiesWrapper/Notifications.jsx";

function UtilitySidebar() {
  const { toggle: toggleUtilities, isVisible } = useUtilitiesPanel();

  if (!isVisible) return null;

  return (
    <aside
      className={`
      flex flex-col gap-narrow h-full py-lg px-md border-s border-s-dark-faint dark:border-s-light-soft ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={toggleUtilities} className="lg:hidden">
        <Icon name="chevron-right" />
      </button>

      <Notifications />

      <Activities />

      <Contacts />
    </aside>
  );
}

export default UtilitySidebar; 