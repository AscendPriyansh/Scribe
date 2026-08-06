"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A radar chart"

type GenreSlice = { genre: string; value: number }

export function ChartRadarDefault({ data = [] }: { data: GenreSlice[] }) {
  const chartData = data.map((d) => ({
    month: d.genre,
    desktop: d.value,
  }))

  const chartConfig = {
    desktop: {
      label: "Downloads",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Downloads by Genre</CardTitle>
        <CardDescription>
          Most liked genres based on download counts
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[380px]"
        >
          <RadarChart data={chartData} margin={{ top: 20, right: 48, bottom: 20, left: 48 }}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          {data.length === 0 ? "No downloads yet" : "Based on download activity"}
        </div>
      </CardFooter>
    </Card>
  )
}
