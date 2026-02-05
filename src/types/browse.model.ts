export interface BookModel {
  docs: BookDocsModel[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface BookDocsModel {
  _id: string
  name: string
}

export interface CharacterModel {
  docs: CharacterDocsModel[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface CharacterDocsModel {
  _id: string
  name: string
  wikiUrl: string
  race: string
  birth: any
  gender: string
  death: any
  hair: any
  height: any
  realm: any
  spouse: string
}
