const week = [
  { id: 1, day: "sunday", date: "22", isActive: false },
  { id: 2, day: "Monday", date: "22", isActive: true },
  { id: 3, day: "Tuesday", date: "22", isActive: false },
  { id: 4, day: "Wednesday", date: "22", isActive: false },
  { id: 5, day: "Thursday", date: "22", isActive: false },
  { id: 6, day: "Friday", date: "22", isActive: false },
  { id: 7, day: "saturday", date: "22", isActive: false },
];

function RoadmapWeekdays() {
  return (
    <div className="flex justify-between items-center w-full">
      {week.map((day) => (
        <div
          key={day.id}
          className={`flex flex-col items-center py-xs px-sm ${
            day.isActive && "bg-accent"
          } rounded-regular`}
        >
          <span className="text-tiny font-extralight">
            {day.day.charAt(0).toUpperCase() + day.day.slice(1, 2)}
          </span>
          <span className="font-semibold">{day.date}</span>
        </div>
      ))}
    </div>
  );
}

export default RoadmapWeekdays; 