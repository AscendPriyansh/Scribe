"use client"

import { Pie, PieChart } from "recharts"

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

export const description = "A pie chart with a label"

const PIE_COLORS = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
]

type PieSlice = { name: string; value: number }

export function ChartPieLabel({ data = [] }: { data: PieSlice[] }) {
    const chartData = data.map((d, i) => ({
        browser: d.name,
        visitors: d.value,
        fill: `var(--color-slice${i + 1})`,
    }))

    const chartConfig = {
        visitors: {
            label: "Downloads",
        },
        ...data.reduce<Record<string, { label: string; color: string }>>((acc, d, i) => {
            acc[`slice${i + 1}`] = {
                label: d.name,
                color: PIE_COLORS[i % PIE_COLORS.length] ?? "var(--chart-1)",
            }
            return acc
        }, {}),
    } satisfies ChartConfig

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Most Downloaded Books</CardTitle>
                <CardDescription>Top 5 books by downloads</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    {data.length === 0 ? "No downloads yet" : "Based on download activity"}
                </div>
            </CardFooter>
        </Card>
    )
}
