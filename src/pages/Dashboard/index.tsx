import { Spinner } from "@/components/ui/spinner"
import { useGetIntegratedDataTableListQuery, useGetSimpleDataTableListQuery } from "@/services/dashboard.service"
import IntegratedDataTable from "./IntegratedDataTable"
import SimpleDataTable from "./SimpleDataTable"
import { simpleDataTableCols } from "./SimpleDataTable/columns"
import { IntegratedDataTableCols } from "./IntegratedDataTable/columns"

export default function Dashboard() {
	const { data: simpleDataTableData, isLoading: simpleDataLoading } = useGetSimpleDataTableListQuery()

	return (
		<div className="container">
			{/* Simple Data Table */}
			<div className="rounded-md border m-3 p-5">
				<h2>Simple Data Table</h2>
				{!simpleDataLoading ? (
					<SimpleDataTable columns={simpleDataTableCols} data={simpleDataTableData || []} />
				) : (
					<Spinner className="mt-2" />
				)}
			</div>

			{/* API Integrated Data Table */}
			<div className="rounded-md border m-3 p-5">
				<IntegratedDataTable
					title="API Integrated Data Table"
					columns={IntegratedDataTableCols}
					dataQuery={useGetIntegratedDataTableListQuery}
				/>
			</div>
		</div>
	)
}
