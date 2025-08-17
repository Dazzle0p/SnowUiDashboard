import SummaryPanel from "./SummaryPanel.jsx";
import TrafficByLocation from "./TrafficByLocation.jsx";
import TrafficByDevice from "./TrafficByDevice.jsx";
import TrafficByWeb from "./TrafficByWeb.jsx";
import CustomLineChart from "./CustomLineChart.jsx";

function DashboardPanels() {
  return (
    <section className="space-y-cozy lg:space-y-xl">
      <SummaryPanel />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-cozy lg:gap-xl">
        <div className="md:col-span-3">
          <CustomLineChart />
        </div>
        <TrafficByWeb />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-cozy lg:gap-xl">
        <TrafficByDevice />
        <TrafficByLocation />
      </div>
    </section>
  );
}

export default DashboardPanels;
