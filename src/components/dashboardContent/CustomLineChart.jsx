import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "Jan", thisYear: 13, lastYear: 8 },
  { month: "Feb", thisYear: 8, lastYear: 17 },
  { month: "Mar", thisYear: 7, lastYear: 16.5, highlight: true },
  { month: "Apr", thisYear: 14, lastYear: 10 },
  { month: "May", thisYear: 17, lastYear: 12 },
  { month: "Jun", thisYear: 19, lastYear: 11 },
  { month: "Jul", thisYear: 20, lastYear: 22 },
];

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  if (payload && payload.highlight) {
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={4}
          fill="#93C5FD"
          stroke="white"
          strokeWidth={2}
        />
        {/* Tooltip positioned exactly at the dot */}
        <g>
          <rect
            x={cx - 35}
            y={cy - 35}
            width={70}
            height={25}
            fill="#374151"
            rx={4}
            ry={4}
          />
          <text
            x={cx}
            y={cy - 18}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="500"
          >
            18,256,598
          </text>
        </g>
      </g>
    );
  }
  return null;
};

const CustomLineChart = () => {
  return (
    <div className="relative p-2 sm:p-8 bg-gray-100 dark:bg-light-low rounded-2xl shadow-sm transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center flex-wrap space-x-8">
          <button className="text-sm font-medium pb-1 border-b-2 text-gray-900 dark:text-white border-gray-900 dark:border-white transition-colors">
            Total Users
          </button>
          <button className="text-sm font-medium pb-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Total Projects
          </button>
          <button className="text-sm font-medium pb-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Operating Status
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              This year
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Last year
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 40,
              bottom: 20,
            }}
          >
            {/* Y-axis grid lines */}
            <ReferenceLine
              y={0}
              stroke="#E5E7EB"
              className="dark:stroke-gray-600"
              strokeWidth={1}
              opacity={0.5}
            />
            <ReferenceLine
              y={10}
              stroke="#E5E7EB"
              className="dark:stroke-gray-600"
              strokeWidth={1}
              opacity={0.5}
            />
            <ReferenceLine
              y={20}
              stroke="#E5E7EB"
              className="dark:stroke-gray-600"
              strokeWidth={1}
              opacity={0.5}
            />
            <ReferenceLine
              y={30}
              stroke="#E5E7EB"
              className="dark:stroke-gray-600"
              strokeWidth={1}
              opacity={0.5}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
                fontWeight: 400,
              }}
              className="dark:fill-gray-400"
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
                fontWeight: 400,
              }}
              className="dark:fill-gray-400"
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-10}
            />

            {/* Last year line (blue) with highlighted dot */}
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#93C5FD"
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={false}
            />

            {/* This year line (solid first half, dashed second half) */}
            <defs>
              <linearGradient
                id="dashGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="50%"
                  stopColor="#000000"
                  className="dark:stop-white"
                />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Solid line for first half */}
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000000"
              className="dark:stroke-white"
              strokeWidth={3}
              dot={false}
              activeDot={false}
              strokeDasharray="0"
              mask="url(#solidMask)"
            />

            {/* Dashed line for second half */}
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000000"
              className="dark:stroke-white"
              strokeWidth={3}
              strokeDasharray="8 6"
              dot={false}
              activeDot={false}
              mask="url(#dashedMask)"
            />

            <defs>
              <mask id="solidMask">
                <rect x="0" y="0" width="50%" height="100%" fill="white" />
              </mask>
              <mask id="dashedMask">
                <rect x="50%" y="0" width="50%" height="100%" fill="white" />
              </mask>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomLineChart;
