import { CharacterDocsModel } from "./browse.model";

export interface CharacterTableDataModel extends CharacterDocsModel {
	action?: number
}

export interface CharacterTableModel {
  docs: CharacterTableDataModel[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}