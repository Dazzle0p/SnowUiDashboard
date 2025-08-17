import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useInitTheme from "../../hooks/useInitTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function TrafficByLocation({ resizing }) {
  const { isDark } = useInitTheme();
  const trafficsByLocation = [
    {
      location: "United States",
      traffic: 52.1,
      colorLight: "#1C1C1C",
      colorDark: "#C6C7F8",
    },
    {
      location: "Mexico",
      traffic: 22.8,
      colorLight: "#B1E3FF",
      colorDark: "#B1E3FF",
    },
    {
      location: "Canada",
      traffic: 13.9,
      colorLight: "#BAEDBD",
      colorDark: "#BAEDBD",
    },
    {
      location: "Other",
      traffic: 11.2,
      colorLight: "#A8C5DA",
      colorDark: "#A8C5DA",
    },
  ];

  const colorList = trafficsByLocation.map((v) =>
    isDark ? v.colorDark : v.colorLight
  );

  const data = {
    labels: trafficsByLocation.map((v) => v.location),
    datasets: [
      {
        data: trafficsByLocation.map((v) => v.traffic),
        backgroundColor: colorList,
        borderWidth: 3,
        borderColor: isDark ? "#272727" : "#F7F9FB",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    layout: {
      padding: { left: 5, right: 5, top: 5, bottom: 5 },
    },
    cutoutPercentage: 50,
    responsive: true,
    hoverOffset: 10,
    maintainAspectRatio: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };

  return (
    <div className=" w-full flex justify-center items-center py-md  flex-col gap-4  bg-gray-100 dark:bg-light-low rounded-large">
      <p className="text-sm leading-5 font-semibold transition-all duration-300 ease-out hover:translate-x-2">
        Traffic by Location
      </p>

      {!resizing && (
        <div className="flex items-center justify-evenly flex-1 gap-4 ">
          {/* Donut Chart */}
          <div className="h-[70%] aspect-square">
            <Doughnut key={isDark} data={data} options={options} />
          </div>

          {/* Legend */}
          <div className="min-h-[250px] flex flex-col justify-center gap-3">
            {trafficsByLocation.map(
              ({ location, traffic, colorLight, colorDark }, i) => (
                <div
                  className="w-full sm:w-[148px] flex items-center justify-start"
                  key={i}
                >
                  <span
                    className="w-[6px] h-[6px] rounded-full mr-2"
                    style={{
                      background: isDark ? colorDark : colorLight,
                    }}
                  />
                  <p className="text-xs leading-[18px] font-normal mr-2 sm:mr-0">
                    {location}
                  </p>
                  <p className="text-xs leading-[18px] font-normal ml-auto">
                    {traffic}%
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
