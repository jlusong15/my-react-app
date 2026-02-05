import axios from "axios";

const { VITE_API_PROTOCOL, VITE_API_BASE_URL, VITE_API_VERSION, VITE_API_BEARER } = import.meta.env;

const baseURL = `${VITE_API_PROTOCOL}://${VITE_API_BASE_URL}/${VITE_API_VERSION}`;
const token = 'rqYQtd11BTST0j63ZT7h';

const api = axios.create({
	baseURL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
})

api.interceptors.request.use(
	(config) => {

		if (token) {
			config.headers.Authorization = `Bearer ${VITE_API_BEARER}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
