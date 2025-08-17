import Icon from "../sharedComponents/Icon";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

function TrendingItem({ index, title, value, percent }) {
  return (
    <div
      className={`border-0 rounded-lg p-6 ${
        index % 2 != 0
          ? "bg-sky-200 dark:bg-light-low"
          : "bg-indigo-100 dark:bg-dark-low"
      }`}
    >
      <h3 className="text-left text-md font-bold">{title}</h3>
      <div className="mt-2 flex justify-between">
        <section>
          <span className="text-lg font-bold">{value}</span>
        </section>
        <p
          className={`flex items-center gap-0.5 ${
            percent > 0 ? "text-green-700" : "text-red-700"
          }`}
        >
          {percent > 0 ? "+" : ""}
          {percent}%
          {percent > 0 ? <HiArrowTrendingUp /> : <HiArrowTrendingDown />}
        </p>
      </div>
    </div>
  );
}

export default function SummaryPanel() {
  const Trends = [
    { title: "Views", value: "721K", percent: 11.02 },
    { title: "Visits", value: "367K", percent: -0.03 },
    { title: "New Users", value: "1156", percent: 15.03 },
    { title: "Active Users", value: "239K", percent: 6.08 },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shadow-inner">
        {Trends.map((item, index) => (
          <TrendingItem
            key={index}
            index={index}
            title={item.title}
            value={item.value}
            percent={item.percent}
          />
        ))}
      </div>
    </>
  );
}
