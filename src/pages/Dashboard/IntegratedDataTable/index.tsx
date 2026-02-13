import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import {
	IntegratedDataTableDocsModel,
	IntegratedDataTableModel,
	IntegratedDataTablePayload,
} from "@/types/dashboard.model"
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	PaginationState,
	SortingState,
	TableOptions,
	useReactTable,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"

// type PaginatedResult<T> = {
// 	data: {
// 		docs: T[]
// 		total: number
// 		limit: number
// 		offset: number
// 		page: number
// 		pages: number
// 	}
// 	isLoading: boolean
// 	isFetching: boolean
// }

interface PaginatedResult {
	data: {
		// docs: IntegratedDataTableDocsModel[]
		docs: any
		total: number
		limit: number
		offset: number
		page: number
		pages: number
	}
	isLoading: boolean
	isFetching: boolean
}

export default function IntegratedDataTable<TData, TValue>({
	title,
	columns,
	dataQuery,
}: {
	title?: string
	columns: ColumnDef<TData, TValue>[]
	dataQuery: (arg: IntegratedDataTablePayload) => PaginatedResult
}) {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	})
	const defaultData = useMemo(() => [], [])
	const { data, isLoading, isFetching } = dataQuery({
		page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	})
	const [sorting, setSorting] = useState<SortingState>([])
	const [globalFilter, setGlobalFilter] = useState<string>("")
	const table = useReactTable({
		data: data?.docs ?? defaultData,
		rowCount: data?.total || 0,
		columns,
		pageCount: data ? Math.ceil(data.total / data.limit) : -1,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onGlobalFilterChange: setGlobalFilter,
		getFilteredRowModel: getFilteredRowModel(),
		manualPagination: true,
		onPaginationChange: setPagination,
		state: {
			sorting,
			globalFilter,
			pagination,
		},
	})

	return (
		<div>
			<div className="flex">
				<h2>{title}</h2>
				{(isFetching || isLoading) && <Spinner className="ml-2 mt-1" />}
			</div>

			{!isLoading && (
				<>
					<div className="flex items-center py-4">
						<Input
							type="text"
							value={globalFilter ?? ""}
							onChange={(e) => setGlobalFilter(e.target.value)}
							placeholder="Search all columns..."
							className={cn("max-w-sm", isFetching ? "pointer-events-none opacity-50" : "")}
						/>
					</div>
					<div className="overflow-auto rounded-md border">
						<Table className="w-full">
							<TableHeader className="bg-gray-100">
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead
													key={header.id}
													className={cn("p-0", isFetching ? "pointer-events-none opacity-50" : "")}
													style={{ width: header.getSize() }}
													onClick={isFetching ? undefined : header.column.getToggleSortingHandler()}
												>
													{header.isPlaceholder
														? null
														: flexRender(header.column.columnDef.header, header.getContext())}
												</TableHead>
											)
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && "selected"}
											className={cn(isFetching ? "pointer-events-none opacity-50" : "")}
										>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={columns.length} className="h-24 text-center">
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
					<div className="flex items-center justify-end space-x-2 py-4">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage() || isFetching}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage() || isFetching}
						>
							Next
						</Button>
					</div>
				</>
			)}
		</div>
	)
}
