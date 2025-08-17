import achievementImage1 from "../../assets/user2-image.png";
import achievementImage2 from "../../assets/user3-image.png";
import achievementImage3 from "../../assets/user4-image.png";
import achievementImage4 from "../../assets/user5-image.png";
import achievementImage5 from "../../assets/user6-image.png";

const achievements = [
  {
    id: 1,
    image: achievementImage1,
    label: "You have a bug that needs to be fixed.",
    date: "Just now",
  },
  {
    id: 2,
    image: achievementImage2,
    label: "Released a new version",
    date: "59 minutes ago",
  },
  {
    id: 3,
    image: achievementImage3,
    label: "Submitted a bug",
    date: "12 hours ago",
  },
  {
    id: 4,
    image: achievementImage4,
    label: "Modified A data in Page X",
    date: "Today, 11:59 AM",
  },
  {
    id: 5,
    image: achievementImage5,
    label: "Deleted a page in Project X",
    date: "Feb 2, 2025",
  },
];

function RoadmapAchievements() {
  return (
    <ul className="space-y-compact">
      {achievements.map((item) => (
        <li key={item.id} className="flex items-start gap-1.5">
          <div className="rounded-circle overflow-hidden">
            <img src={item.image} alt="user image" />
          </div>

          <div className="flex flex-col items-start">
            <p className="">{item.label}</p>

            <p className="text-dark-tertiary dark:text-light-tertiary">
              {item.date}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RoadmapAchievements; 