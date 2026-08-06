import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/http/api";
import { ChartAreaGradient } from "@/components/ui/ChartAreaGradient";
import { ChartPieLabel } from "@/components/ui/ChartPieLabel";
import { ChartRadarDefault } from "@/components/ui/ChartRadarDefault";
import { ChartRadialText } from "@/components/ui/ChartRadialText";

type MonthUsers = { month: string; users: number };
type MonthDownloads = { month: string; downloads: number };

function HomePage() {
  const { data } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
    staleTime: 30000,
  });

  const stats = data?.data;

  const areaData = (stats?.usersPerMonth ?? []).map((u: MonthUsers) => {
    const downloads = stats?.downloadsPerMonth?.find(
      (d: MonthDownloads) => d.month === u.month,
    )?.downloads;
    return { month: u.month, users: u.users, downloads: downloads ?? 0 };
  });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 flex flex-col gap-4">
        <ChartAreaGradient
          title="Platform Activity"
          description="New users and book downloads - last 6 months."
          data={areaData}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <ChartPieLabel data={stats?.downloadsByBook ?? []} />
          <ChartRadialText value={stats?.profileVisits ?? 0} label="Visits" />
        </div>
        <ChartRadarDefault data={stats?.downloadsByGenre ?? []} />
      </div>
    </div>
  )
}

export default HomePage;
