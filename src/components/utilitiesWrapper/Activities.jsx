import activityImage1 from "../../assets/activity-1.png";
import activityImage2 from "../../assets/activity-2.png";
import activityImage3 from "../../assets/activity-3.png";
import activityImage4 from "../../assets/activity-4.png";
import activityImage5 from "../../assets/activity-5.png";
import UtilityPanel from "../sharedComponents/UtilityPanel.jsx";

const activitiesList = [
  {
    id: 1,
    image: activityImage1,
    label: "Changed the style.",
    date: "Just now",
  },
  {
    id: 2,
    image: activityImage2,
    label: "Released a new version.",
    date: "59 minutes ago",
  },
  {
    id: 3,
    image: activityImage3,
    label: "Submitted a bug.",
    date: "12 hours ago",
  },
  {
    id: 4,
    image: activityImage4,
    label: "Modified A data in Page X.",
    date: "Today, 11:59 AM",
  },
  {
    id: 5,
    image: activityImage5,
    label: "Deleted a page in Project X.",
    date: "Today, 11:59 AM",
  },
];

function Activities() {
  return (
    <UtilityPanel title="Activities">
      <ul className="space-y-narrow">
        {activitiesList.map((item) => (
          <li key={item.id} className="flex items-start gap-sm">
            <div className="rounded-regular overflow-hidden">
              <img src={item.image} alt="user image" className="object-cover" />
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

export default Activities;
