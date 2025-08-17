/* eslint-disable */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import useInitTheme from "../../hooks/useInitTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TrafficByDevice({ resizing }) {
  const { isDark } = useInitTheme(); // ✅ changed from isDarkMode → isDark
  const title = "Traffic By Device";
  const data = [
    {
      x: "Linux",
      y: 14391,
      colorLight: "#95A4FC",
      colorDark: "#95A4FC",
    },
    {
      x: "Mac",
      y: 27575,
      colorLight: "#BAEDBD",
      colorDark: "#BAEDBD",
    },
    {
      x: "iOS",
      y: 19381,
      colorLight: "#1C1C1C",
      colorDark: "#C6C7F8",
    },
    {
      x: "Windows",
      y: 19381,
      colorLight: "#B1E3FF",
      colorDark: "#B1E3FF",
    },
    {
      x: "Android",
      y: 10022,
      colorLight: "#A8C5DA",
      colorDark: "#A8C5DA",
    },
    {
      x: "Others",
      y: 22996,
      colorLight: "#A1E3CB",
      colorDark: "#A1E3CB",
    },
  ];
  const colorList = data.map((v) => (isDark ? v.colorDark : v.colorLight));

  const chartData = {
    labels: data.map((d) => d.x),
    datasets: [
      {
        label: title,
        data: data.map((d) => d.y / 1000),
        backgroundColor: colorList,
        borderWidth: 0,
        barThickness: 32,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false,
      },
    },
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        border: { display: false },
        grid: { display: false },
      },
      y: {
        border: { display: false },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center py-md px-sm flex-col gap-4 bg-gray-100 dark:bg-light-low rounded-large">
      <p className="text-sm leading-5 font-semibold m-0 transition-all duration-300 ease-out hover:translate-x-2">
        {title}
      </p>
      {!resizing && <Bar data={chartData} options={options} />}
    </div>
  );
}
