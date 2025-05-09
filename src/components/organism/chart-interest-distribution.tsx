'use client'

import { Label, Pie, PieChart, Sector } from 'recharts'

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
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

const chartConfig = {
  total: {
    label: 'Total',
    color: '#3b82f6',
  },
  interest: {
    label: 'Interest',
    color: '#22c55e',
  },
} satisfies ChartConfig

export function ChartInterestDistribution({
  interestPercentage,
}: {
  interestPercentage: number
}) {
  const interestPercentageValue = interestPercentage || 0
  const chartData = [
    {
      title: 'interest',
      percentage: interestPercentageValue,
      fill: 'var(--color-interest)',
    },
    {
      title: 'total',
      percentage: 100 - interestPercentageValue,
      fill: 'var(--color-total)',
    },
  ]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center text-xl font-semibold">
          Interest Distribution
        </CardTitle>
        <CardDescription>Team 1 - Team 2</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="title"
              innerRadius={70}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {interestPercentageValue}%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="title" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
