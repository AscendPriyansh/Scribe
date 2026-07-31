import { ChartAreaGradient } from "@/components/ui/ChartAreaGradient";
import { ChartPieLabel } from "@/components/ui/ChartPieLabel";
import { ChartRadarDefault } from "@/components/ui/ChartRadarDefault";
import { ChartRadialText } from "@/components/ui/ChartRadialText";

function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 flex flex-col gap-4">
        <ChartAreaGradient title={"Visitors"} description={"Last 6 months visitors graph."} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <ChartPieLabel />
          <ChartRadialText />
        </div>
        <ChartRadarDefault />
      </div>
    </div>
  )
}

export default HomePage;