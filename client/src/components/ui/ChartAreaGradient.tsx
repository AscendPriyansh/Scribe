import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An area chart with gradient fill"

const defaultChartData = [
    { month: "January", users: 0, downloads: 0 },
    { month: "February", users: 0, downloads: 0 },
    { month: "March", users: 0, downloads: 0 },
    { month: "April", users: 0, downloads: 0 },
    { month: "May", users: 0, downloads: 0 },
    { month: "June", users: 0, downloads: 0 },
]

const chartConfig = {
    users: {
        label: "Users",
        color: "var(--chart-1)",
    },
    downloads: {
        label: "Downloads",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

type ChartAreaGradientProps = {
    title: string
    description: string
    data?: { month: string; users: number; downloads: number }[]
}

export function ChartAreaGradient({ title, description, data }: ChartAreaGradientProps) {
    const chartData = data ?? defaultChartData
    const totalUsers = chartData.reduce((sum, d) => sum + d.users, 0)
    const totalDownloads = chartData.reduce((sum, d) => sum + d.downloads, 0)

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="aspect-auto h-[30vh]">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-users)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-users)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillDownloads" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-downloads)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-downloads)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="downloads"
                            type="natural"
                            fill="url(#fillDownloads)"
                            fillOpacity={0.4}
                            stroke="var(--color-downloads)"
                            stackId="a"
                        />
                        <Area
                            dataKey="users"
                            type="natural"
                            fill="url(#fillUsers)"
                            fillOpacity={0.4}
                            stroke="var(--color-users)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            {totalUsers} new users and {totalDownloads} downloads this period <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Last 6 months
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
