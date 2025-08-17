import { useEffect, useState } from "react";
export default function TrafficByWeb() {
  const trafficsByWeb = [
    { service: "Google", value: 40 },
    { service: "YouTube", value: 80 },
    { service: "Instagram", value: 50 },
    { service: "Pinterest", value: 100 },
    { service: "Facebook", value: 30 },
    { service: "Twitter", value: 60 },
  ];
  const [localTraffic, setLocalTraffic] = useState(
    trafficsByWeb.map((v) => ({ ...v, value: 40 }))
  );

  useEffect(() => {
    setTimeout(() => setLocalTraffic(trafficsByWeb), 1000);
  }, []);

  return (
    <div className="flex flex-col gap-7 flex-1 select-none py-md px-md bg-gray-100 dark:bg-light-low rounded-large">
      <h3 className="text-sm leading-5 font-semibold transition-transform duration-300 ease-out hover:translate-x-2">
        Traffic by Website
      </h3>

      <div className="flex flex-1 gap-4 transition-transform duration-300 ease-out hover:translate-x-2">
        {/* Services */}
        <div className="flex flex-col justify-between w-max">
          {localTraffic.map((item, i) => (
            <p key={i} className="text-xs leading-4 font-normal">
              {item.service}
            </p>
          ))}
        </div>

        {/* Bars */}
        <div className="flex flex-col justify-between flex-1 space-y-2">
          {localTraffic.map((item, i) => (
            <div
              key={i}
              className="h-4 flex items-center gap-0.5"
              style={{ width: `${item.value}%` }}
            >
              {/* Solid bar */}
              <span className="block h-1 w-full bg-gray-900 dark:bg-gray-50 rounded-full opacity-100"></span>
              <span className="block h-1 w-full bg-gray-900 dark:bg-gray-50 rounded-full opacity-40"></span>
              <span className="block h-1 w-full bg-gray-900 dark:bg-gray-50 rounded-full opacity-10"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
