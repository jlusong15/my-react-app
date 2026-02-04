export interface BookModel {
  docs: BookDocsModel[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface BookDocsModel {
  id: string
  name: string
}
