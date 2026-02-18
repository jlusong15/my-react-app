import { Spinner } from "@/components/ui/spinner"
import { useGetIntegratedDataTableListQuery, useGetSimpleDataTableListQuery } from "@/services/dashboard.service"
import { format } from "date-fns"
import { GridStack } from "gridstack"
import "gridstack/dist/gridstack.min.css"
import { useEffect } from "react"
import { DashboardChart } from "./Chart"
import IntegratedDataTable from "./IntegratedDataTable"
import { IntegratedDataTableCols } from "./IntegratedDataTable/columns"
import SimpleDataTable from "./SimpleDataTable"
import { simpleDataTableCols } from "./SimpleDataTable/columns"

export default function Dashboard() {
	const today = new Date()
	const { data: simpleDataTableData, isLoading: simpleDataLoading } = useGetSimpleDataTableListQuery()

	useEffect(() => {
		GridStack.init()
	}, [])

	return (
		<div className="container">
			<div className="p-3 my-2">
				<h1 className="text-2xl font-semibold">Welcome! Today is {format(today, "PPPP")}!</h1>
			</div>
			<div className="grid-stack">
				<div className="grid-stack-item" gs-w="5" gs-h="3.5">
					<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
						<h2>Visitor Statistics</h2>
						<DashboardChart />
					</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="1">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-amber-100">Item 1</div>
				</div>
				<div className="grid-stack-item" gs-w="4" gs-h="4">
					<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
						<h2>Simple Data Table</h2>
						{!simpleDataLoading ? (
							<SimpleDataTable columns={simpleDataTableCols} data={simpleDataTableData || []} />
						) : (
							<Spinner className="mt-2" />
						)}
					</div>
				</div>
				<div className="grid-stack-item" gs-w="2" gs-h="3">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-blue-100">Item 2</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="1">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-emerald-100">Item 5</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="2">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-pink-100">Item 6</div>
				</div>
				<div className="grid-stack-item" gs-w="9" gs-h="6">
					<div className="grid-stack-item-content rounded-md border m-3 p-5 bg-white">
						<IntegratedDataTable
							title="API Integrated Data Table"
							columns={IntegratedDataTableCols}
							dataQuery={useGetIntegratedDataTableListQuery}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
