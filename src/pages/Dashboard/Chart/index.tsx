import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMemo, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { chartData } from "./data"
import { SelectDropdown } from "@/components/SelectDropdown"

export const description = "An interactive area chart"

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	desktop: {
		label: "Desktop",
		color: "var(--chart-1)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig

export function DashboardChart() {
	const timeRangeList = [
		{
			value: "7d",
			display: "Last 7 days",
		},
		{
			value: "30d",
			display: "Last 30 days",
		},
		{
			value: "90d",
			display: "Last 90 days",
		},
	]
	const [timeRange, setTimeRange] = useState<String>("7d")
	const filteredData = useMemo(
		() =>
			chartData.filter((item) => {
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
			}),
		[timeRange],
	)

	return (
		<>
			<div className="mb-2 w-[50%] float-right">
				<SelectDropdown
					value={timeRange?.toString()}
					onValueChange={setTimeRange}
					placeholder="Select"
					items={timeRangeList}
				/>
			</div>
			<ChartContainer config={chartConfig} className="aspect-auto h-56 w-full">
				<AreaChart data={filteredData}>
					<defs>
						<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
							<stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
						</linearGradient>
						<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
							<stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
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
					<Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
					<Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
					<ChartLegend content={<ChartLegendContent />} />
				</AreaChart>
			</ChartContainer>
		</>
	)
}
