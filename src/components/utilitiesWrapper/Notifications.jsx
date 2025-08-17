import Icon from "../sharedComponents/Icon.jsx";
import UtilityPanel from "../sharedComponents/UtilityPanel.jsx";

const notificationsList = [
  { id: 1, icon: "bug", label: "You fixed a bug.", date: "Just now" },
  {
    id: 2,
    icon: "user",
    label: "New user registered.",
    date: "59 minutes ago",
  },
  { id: 3, icon: "bug", label: "You fixed a bug.", date: "12 hours ago" },
  {
    id: 4,
    icon: "broadcast",
    label: "Andi Lane subscribed to you.",
    date: "Today, 11:59 AM",
  },
];

function Notifications() {
  return (
    <UtilityPanel title="Notifications">
      <ul className="space-y-narrow">
        {notificationsList.map((item) => (
          <li key={item.id} className="flex items-start gap-sm">
            <div className="p-sm text-dark-primary bg-[#E6F1FD] rounded-regular">
              <Icon name={item.icon} size="20" className="" />
            </div>

            <div className="flex flex-col items-start gap-sm">
              <p className="text-tiny text-start">{item.label}</p>

              <p className="text-tiny text-dark-tertiary dark:text-light-tertiary">
                {item.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </UtilityPanel>
  );
}

export default Notifications; 