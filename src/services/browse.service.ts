import api from "@/lib/api";

export const getBooks = async () => {
	const { data } = await api.get("/book");
	return data;
};

export const getCharacters = async () => {
	const { data } = await api.get("/character");
	return data;
};