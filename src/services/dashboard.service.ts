import api from "@/lib/api";
import { mapDocs } from "@/lib/utils";
import { TagTypeId } from "@/store/tagtype";
import { CharacterTableDataModel, CharacterTableModel, IntegratedDataTablePayload } from "@/types/dashboard.model";

export const dashboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// Simple Data Table API
		getSimpleDataTableList: builder.query<CharacterTableDataModel[], void>({
			query: () => '/character',
			providesTags: [TagTypeId.SimpleDataTable],
			transformResponse: (res: any) => mapDocs(res),
		}),

		// Integrated Data Table API
		getIntegratedDataTableList: builder.query<CharacterTableModel, IntegratedDataTablePayload>({
			query: (params: IntegratedDataTablePayload) => {
				console.log('prams', params)
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
