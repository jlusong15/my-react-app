import { CharacterDocsModel } from "./browse.model";

export interface CharacterTableDataDocsModel extends CharacterDocsModel {
	id?: number
}

export interface CharacterTableDataModel {
	docs: CharacterTableDataDocsModel[]
	total: number
	limit: number
	offset: number
	page: number
	pages: number
}

export interface IntegratedDataTableDocsModel extends CharacterDocsModel {
	id?: number
}
export interface IntegratedDataTablePayload {
	sort?: string;
	limit?: number
	offset?: number
	page?: number
}

export interface IntegratedDataTableModel<TData> {
	docs: TData[]
	total: number
	limit: number
	offset: number
	page: number
	pages: number
}
