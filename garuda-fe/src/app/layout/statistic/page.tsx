"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
const chartData = [
  { date: "2024-04-01", matcha: 222, americano: 150 },
  { date: "2024-04-02", matcha: 97, americano: 180 },
  { date: "2024-04-03", matcha: 167, americano: 120 },
  { date: "2024-04-04", matcha: 242, americano: 260 },
  { date: "2024-04-05", matcha: 373, americano: 290 },
  { date: "2024-04-06", matcha: 301, americano: 340 },
  { date: "2024-04-07", matcha: 245, americano: 180 },
  { date: "2024-04-08", matcha: 409, americano: 320 },
  { date: "2024-04-09", matcha: 59, americano: 110 },
  { date: "2024-04-10", matcha: 261, americano: 190 },
  { date: "2024-04-11", matcha: 327, americano: 350 },
  { date: "2024-04-12", matcha: 292, americano: 210 },
  { date: "2024-04-13", matcha: 342, americano: 380 },
  { date: "2024-04-14", matcha: 137, americano: 220 },
  { date: "2024-04-15", matcha: 120, americano: 170 },
  { date: "2024-04-16", matcha: 138, americano: 190 },
  { date: "2024-04-17", matcha: 446, americano: 360 },
  { date: "2024-04-18", matcha: 364, americano: 410 },
  { date: "2024-04-19", matcha: 243, americano: 180 },
  { date: "2024-04-20", matcha: 89, americano: 150 },
  { date: "2024-04-21", matcha: 137, americano: 200 },
  { date: "2024-04-22", matcha: 224, americano: 170 },
  { date: "2024-04-23", matcha: 138, americano: 230 },
  { date: "2024-04-24", matcha: 387, americano: 290 },
  { date: "2024-04-25", matcha: 215, americano: 250 },
  { date: "2024-04-26", matcha: 75, americano: 130 },
  { date: "2024-04-27", matcha: 383, americano: 420 },
  { date: "2024-04-28", matcha: 122, americano: 180 },
  { date: "2024-04-29", matcha: 315, americano: 240 },
  { date: "2024-04-30", matcha: 454, americano: 380 },
  { date: "2024-05-01", matcha: 165, americano: 220 },
  { date: "2024-05-02", matcha: 293, americano: 310 },
  { date: "2024-05-03", matcha: 247, americano: 190 },
  { date: "2024-05-04", matcha: 385, americano: 420 },
  { date: "2024-05-05", matcha: 481, americano: 390 },
  { date: "2024-05-06", matcha: 498, americano: 520 },
  { date: "2024-05-07", matcha: 388, americano: 300 },
  { date: "2024-05-08", matcha: 149, americano: 210 },
  { date: "2024-05-09", matcha: 227, americano: 180 },
  { date: "2024-05-10", matcha: 293, americano: 330 },
  { date: "2024-05-11", matcha: 335, americano: 270 },
  { date: "2024-05-12", matcha: 197, americano: 240 },
  { date: "2024-05-13", matcha: 197, americano: 160 },
  { date: "2024-05-14", matcha: 448, americano: 490 },
  { date: "2024-05-15", matcha: 473, americano: 380 },
  { date: "2024-05-16", matcha: 338, americano: 400 },
  { date: "2024-05-17", matcha: 499, americano: 420 },
  { date: "2024-05-18", matcha: 315, americano: 350 },
  { date: "2024-05-19", matcha: 235, americano: 180 },
  { date: "2024-05-20", matcha: 177, americano: 230 },
  { date: "2024-05-21", matcha: 82, americano: 140 },
  { date: "2024-05-22", matcha: 81, americano: 120 },
  { date: "2024-05-23", matcha: 252, americano: 290 },
  { date: "2024-05-24", matcha: 294, americano: 220 },
  { date: "2024-05-25", matcha: 201, americano: 250 },
  { date: "2024-05-26", matcha: 213, americano: 170 },
  { date: "2024-05-27", matcha: 420, americano: 460 },
  { date: "2024-05-28", matcha: 233, americano: 190 },
  { date: "2024-05-29", matcha: 78, americano: 130 },
  { date: "2024-05-30", matcha: 340, americano: 280 },
  { date: "2024-05-31", matcha: 178, americano: 230 },
  { date: "2024-06-01", matcha: 178, americano: 200 },
  { date: "2024-06-02", matcha: 470, americano: 410 },
  { date: "2024-06-03", matcha: 103, americano: 160 },
  { date: "2024-06-04", matcha: 439, americano: 380 },
  { date: "2024-06-05", matcha: 88, americano: 140 },
  { date: "2024-06-06", matcha: 294, americano: 250 },
  { date: "2024-06-07", matcha: 323, americano: 370 },
  { date: "2024-06-08", matcha: 385, americano: 320 },
  { date: "2024-06-09", matcha: 438, americano: 480 },
  { date: "2024-06-10", matcha: 155, americano: 200 },
  { date: "2024-06-11", matcha: 92, americano: 150 },
  { date: "2024-06-12", matcha: 492, americano: 420 },
  { date: "2024-06-13", matcha: 81, americano: 130 },
  { date: "2024-06-14", matcha: 426, americano: 380 },
  { date: "2024-06-15", matcha: 307, americano: 350 },
  { date: "2024-06-16", matcha: 371, americano: 310 },
  { date: "2024-06-17", matcha: 475, americano: 520 },
  { date: "2024-06-18", matcha: 107, americano: 170 },
  { date: "2024-06-19", matcha: 341, americano: 290 },
  { date: "2024-06-20", matcha: 408, americano: 450 },
  { date: "2024-06-21", matcha: 169, americano: 210 },
  { date: "2024-06-22", matcha: 317, americano: 270 },
  { date: "2024-06-23", matcha: 480, americano: 530 },
  { date: "2024-06-24", matcha: 132, americano: 180 },
  { date: "2024-06-25", matcha: 141, americano: 190 },
  { date: "2024-06-26", matcha: 434, americano: 380 },
  { date: "2024-06-27", matcha: 448, americano: 490 },
  { date: "2024-06-28", matcha: 149, americano: 200 },
  { date: "2024-06-29", matcha: 103, americano: 160 },
  { date: "2024-06-30", matcha: 446, americano: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  first: {
    label: "first",
    color: "hsl(var(--chart-1))",
  },
  second: {
    label: "second",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Statistic() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="w-1/2">
      <div className="m-2 p-2 bg-white rounded-xl border shadow-sm">
        {/* <h2 className="p-2 font-bold">Sales Report</h2> */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Report</CardTitle>
            <CardDescription>Report of Sales</CardDescription>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="fillfirst" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-first)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-first)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillsecond" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-second)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-second)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="matcha"
                  type="natural"
                  fill="url(#fillsecond)"
                  stroke="var(--color-second)"
                  stackId="a"
                />
                <Area
                  dataKey="americano"
                  type="natural"
                  fill="url(#fillfirst)"
                  stroke="var(--color-first)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
