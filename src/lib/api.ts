import axios from "axios";

const { VITE_API_PROTOCOL, VITE_API_BASE_URL, VITE_API_VERSION, VITE_API_BEARER } = import.meta.env;
const baseURL = `${VITE_API_PROTOCOL}://${VITE_API_BASE_URL}/${VITE_API_VERSION}`;

const api = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
})

api.interceptors.request.use(
	(config) => {

		if (VITE_API_BEARER) {
			config.headers.Authorization = `Bearer ${VITE_API_BEARER}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.warn("Unauthorized");
		}

		return Promise.reject(error);
	}
);

export default api;
