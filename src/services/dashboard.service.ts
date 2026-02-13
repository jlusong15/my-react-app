import api from "@/lib/api";
import { mapDocs } from "@/lib/utils";
import { TagTypeId } from "@/store/tagtype";
import { IntegratedDataTableDocsModel, IntegratedDataTableModel, IntegratedDataTablePayload } from "@/types/dashboard.model";

export const dashboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// Simple Data Table API
		getSimpleDataTableList: builder.query<IntegratedDataTableDocsModel[], void>({
			query: () => '/character',
			providesTags: [TagTypeId.SimpleDataTable],
			transformResponse: (res: any) => mapDocs(res),
		}),

		// Integrated Data Table API
		getIntegratedDataTableList: builder.query<IntegratedDataTableModel<IntegratedDataTableDocsModel>, IntegratedDataTablePayload>({
			query: (params: IntegratedDataTablePayload) => {
				const p = params as Record<string, string>
				const queryString = params ? new URLSearchParams(p).toString() : '';
				return `/character${queryString && '?'}${queryString}`
			},
			providesTags: [TagTypeId.IntegratedDataTable],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetSimpleDataTableListQuery,
	useGetIntegratedDataTableListQuery,
	useLazyGetIntegratedDataTableListQuery
} = dashboardApi;
