import { Spinner } from "@/components/ui/spinner"
import { useGetIntegratedDataTableListQuery, useGetSimpleDataTableListQuery } from "@/services/dashboard.service"
import IntegratedDataTable from "./IntegratedDataTable"
import SimpleDataTable from "./SimpleDataTable"
import { simpleDataTableCols } from "./SimpleDataTable/columns"
import { IntegratedDataTableCols } from "./IntegratedDataTable/columns"
import "gridstack/dist/gridstack.min.css"
import { GridStack } from "gridstack"

export default function Dashboard() {
	const { data: simpleDataTableData, isLoading: simpleDataLoading } = useGetSimpleDataTableListQuery()
	GridStack.init()

	return (
		<div className="container">
			<div className="grid-stack">
				<div className="grid-stack-item" gs-w="4" gs-h="5">
					<div className="grid-stack-item-content rounded-md border m-3 p-3 bg-white">
						<h2>Simple Data Table</h2>
						{!simpleDataLoading ? (
							<SimpleDataTable columns={simpleDataTableCols} data={simpleDataTableData || []} />
						) : (
							<Spinner className="mt-2" />
						)}
					</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="1">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">Item 1</div>
				</div>
				<div className="grid-stack-item" gs-w="2" gs-h="3">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">Item 2</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="1">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">Item 5</div>
				</div>
				<div className="grid-stack-item" gs-w="1" gs-h="5">
					<div className="grid-stack-item-content rounded-md border m-3 p-2 bg-white">Item 6</div>
				</div>
				<div className="grid-stack-item" gs-w="9" gs-h="7.3">
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
