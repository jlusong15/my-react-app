import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { useGetIntegratedDataTableListQuery, useGetSimpleDataTableListQuery } from "@/services/dashboard.service"
import { format } from "date-fns"
import { GridStack } from "gridstack"
import "gridstack/dist/gridstack.min.css"
import { Pin } from "lucide-react"
import { useEffect, useState } from "react"
import { ChartAreaBasic } from "./AreaChart"
import { DashboardChart } from "./Chart"
import IntegratedDataTable from "./IntegratedDataTable"
import { IntegratedDataTableCols } from "./IntegratedDataTable/columns"
import SimpleDataTable from "./SimpleDataTable"
import { simpleDataTableCols } from "./SimpleDataTable/columns"
import { BarChartBasic } from "./BarChart"
import PageLayout from "@/components/PageLayout"

export default function Dashboard() {
	const today = new Date()
	const { data: simpleDataTableData, isLoading: simpleDataLoading } = useGetSimpleDataTableListQuery()
	const [isGridLoading, setGridLoad] = useState<boolean>(true)

	useEffect(() => {
		GridStack.init()
		setGridLoad(false)
	}, [])

	return (
		<PageLayout>
			<div className="container">
				<div className="p-3 my-2">
					<h1 className="text-2xl font-semibold">Welcome! Today is {format(today, "PPPP")}!</h1>
				</div>
				{isGridLoading && <Spinner className="ml-3 mt-2" />}
				<div className={cn("grid-stack", isGridLoading && "hidden")}>
					<div className="grid-stack-item" gs-w="2" gs-h="4" gs-no-move="true" gs-no-resize="true" gs-locked="true">
						<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">
							<h4 className="mb-2 flex items-center">
								<Pin className="mr-1 size-5 text-primary" /> QOTD
							</h4>
							<strong>Quote of the Day</strong>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor viverra eros sit amet ullamcorper.
							</p>
						</div>
					</div>
					<div className="grid-stack-item" gs-w="5" gs-h="4">
						<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
							<h4>Visitor Statistics</h4>
							<DashboardChart />
						</div>
					</div>
					<div className="grid-stack-item" gs-w="5" gs-h="4">
						<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
							<h4>Simple Data Table</h4>
							{!simpleDataLoading ? (
								<SimpleDataTable columns={simpleDataTableCols} data={simpleDataTableData || []} />
							) : (
								<Spinner className="mt-2" />
							)}
						</div>
					</div>

					<div className="grid-stack-item" gs-w="5" gs-h="3.5">
						<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
							<h4>Milestone</h4>
							<BarChartBasic />
						</div>
					</div>
					<div className="grid-stack-item" gs-w="7" gs-h="6">
						<div className="grid-stack-item-content rounded-md border m-3 p-5 bg-white">
							<IntegratedDataTable
								title="API Integrated Data Table"
								columns={IntegratedDataTableCols}
								dataQuery={useGetIntegratedDataTableListQuery}
							/>
						</div>
					</div>
					<div className="grid-stack-item" gs-w="5" gs-h="2">
						<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">
							<h4 className="mb-2">Other Information</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor viverra eros sit amet ullamcorper.
								Donec tincidunt quam vel augue blandit dapibus. Phasellus aliquet dignissim dui a vehicula. Morbi
								tristique lorem eros, in volutpat nunc cursus sit amet. Nunc erat est, aliquet a nibh ultrices, rutrum
								hendrerit mauris. Fusce quis ultricies quam, tempus suscipit risus. Cras gravida arcu eget mauris
								luctus, ac aliquet ante mattis. Maecenas non urna eget arcu imperdiet iaculis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	)
}
