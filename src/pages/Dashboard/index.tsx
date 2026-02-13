import { Spinner } from "@/components/ui/spinner"
import { useGetIntegratedDataTableListQuery, useGetSimpleDataTableListQuery } from "@/services/dashboard.service"
import IntegratedDataTable from "./IntegratedDataTable"
import { IntegratedDataTableCols } from "./IntegratedDataTable/columns"
import SimpleDataTable from "./SimpleDataTable"
import { simpleDataTableCols } from "./SimpleDataTable/columns"

export default function Dashboard() {
	const { data: simpleDataTableData, isLoading: simpleDataLoading } = useGetSimpleDataTableListQuery()
	const {
		data: characters,
		isLoading: isListLoading,
		isFetching: isFetchingList,
	} = useGetIntegratedDataTableListQuery("")

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
				<h2>API Integrated Data Table</h2>
				{!isListLoading && !isFetchingList ? (
					<IntegratedDataTable columns={IntegratedDataTableCols} data={characters?.docs || []} />
				) : (
					<Spinner className="mt-2" />
				)}
			</div>
		</div>
	)
}
