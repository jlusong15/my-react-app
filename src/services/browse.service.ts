import api from "@/lib/api";
import { mapDocs } from "@/lib/utils";
import { TagTypeId } from "@/store/tagtype";
import { BookDocsModel, CharacterDocsModel } from "@/types/browse.model";

export const browseApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// Books
		getBooks: builder.query<BookDocsModel[], void>({
			query: () => '/book',
			transformResponse: (res: any) => mapDocs(res),
			providesTags: [TagTypeId.Book],
		}),

		// Characters list
		getCharacters: builder.query<CharacterDocsModel[], void>({
			query: () => '/character',
			providesTags: [TagTypeId.Character],
			transformResponse: (res: any) => mapDocs(res),
		}),

		// Character details
		getCharacterData: builder.query<CharacterDocsModel, string>({
			query: (id) => `/character/${id}`,
			transformResponse: (res: any) => mapDocs(res)?.[0],
			providesTags: (_result, _error, id) => [{ type: TagTypeId.Character, id }],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetBooksQuery,
	useGetCharactersQuery,
	useGetCharacterDataQuery,
	useLazyGetCharacterDataQuery
} = browseApi;
