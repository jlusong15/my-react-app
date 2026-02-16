import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { IntegratedDataTableModel, IntegratedDataTablePayload } from "@/types/dashboard.model"

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	PaginationState,
	SortingState,
	useReactTable,
} from "@tanstack/react-table"

import { useState } from "react"

type QueryResult<TData> = {
	data?: IntegratedDataTableModel<TData>
	isLoading: boolean
	isFetching: boolean
}

interface IntegratedDataTableProps<TData, TValue> {
	title?: string
	columns: ColumnDef<TData, TValue>[]
	dataQuery: (arg: IntegratedDataTablePayload) => QueryResult<TData>
}

export default function IntegratedDataTable<TData, TValue>({
	title,
	columns,
	dataQuery,
}: IntegratedDataTableProps<TData, TValue>) {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	})
	const [sorting, setSorting] = useState<SortingState>([])
	const [globalFilter, setGlobalFilter] = useState<string>("")
	const getSort = (): string => {
		if (sorting?.length === 0) {
			return ""
		}
		return `${sorting?.[0].id}:${sorting?.[0].desc ? "desc" : "asc"}`
	}
	const { data, isLoading, isFetching } = dataQuery({
		page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
		sort: getSort(),
	})
	const table = useReactTable<TData>({
		data: data?.docs ?? [],
		columns,
		rowCount: data?.total ?? 0,
		pageCount: data ? Math.ceil(data.total / data.limit) : -1,
		state: {
			sorting,
			globalFilter,
			pagination,
		},
		initialState: {
			sorting: [
				{
					id: "name",
					desc: false,
				},
			],
		},
		manualPagination: true,
		manualSorting: true,
		onPaginationChange: setPagination,
		onSortingChange: setSorting,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	})

	console.log("sorting", sorting)

	return (
		<div>
			<div className="flex items-center">
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
							className={cn("max-w-sm", isFetching && "pointer-events-none opacity-50")}
						/>
					</div>

					<div className="overflow-auto rounded-md border">
						<Table className="w-full">
							<TableHeader className="bg-gray-100">
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<TableHead
												key={header.id}
												className={cn("p-0", isFetching && "pointer-events-none opacity-50")}
												style={{
													width: header.getSize(),
												}}
												onClick={isFetching ? undefined : header.column.getToggleSortingHandler()}
											>
												{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
											</TableHead>
										))}
									</TableRow>
								))}
							</TableHeader>

							<TableBody>
								{table.getRowModel().rows.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow key={row.id} className={cn(isFetching && "pointer-events-none opacity-50")}>
											{row.getVisibleCells().map((cell) => (
												<TableCell
													key={cell.id}
													style={{
														width: cell.column.getSize(),
													}}
												>
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
