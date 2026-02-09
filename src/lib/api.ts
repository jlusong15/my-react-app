import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { VITE_API_PROTOCOL, VITE_API_BASE_URL, VITE_API_VERSION, VITE_API_BEARER } = import.meta.env;
const baseUrl = `${VITE_API_PROTOCOL}://${VITE_API_BASE_URL}/${VITE_API_VERSION}`;

const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			if (VITE_API_BEARER) {
				headers.set('authorization', `Bearer ${VITE_API_BEARER}`);
			}
			return headers;
		},
	}),
	tagTypes: ['Character', 'Book'], // ✅ declare all tags here
	endpoints: () => ({}),
});

export default api;
