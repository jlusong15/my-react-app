import api from "@/lib/api";
import { mapDocs } from "@/lib/utils";
import { TagTypeId } from "@/store/tagtype";
import { CharacterDocsModel, CharacterModel } from "@/types/browse.model";

export const dashboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// Simple Data Table API
		getSimpleDataTableList: builder.query<CharacterDocsModel[], void>({
			query: () => '/character',
			providesTags: [TagTypeId.SimpleDataTable],
			transformResponse: (res: any) => mapDocs(res),
		}),

		// Integrated Data Table API
		getIntegratedDataTableList: builder.query<CharacterModel, string>({
			query: (params) => `/character${params && '?'}${params}`,
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
