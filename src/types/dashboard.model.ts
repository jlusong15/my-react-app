import { CharacterDocsModel } from "./browse.model";

export interface IntegratedDataTableDocsModel extends CharacterDocsModel {
	id?: number
}

export interface IntegratedDataTableModel<T> {
	docs: T[]
	total: number
	limit: number
	offset: number
	page: number
	pages: number
}

export interface IntegratedDataTablePayload {
	sort?: string;
	limit?: number
	offset?: number
	page?: number
}