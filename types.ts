import { GenerativeReturn } from "weaviate-client"

export type Jeopardy = {
    category: string,
    question: string,
    answer: string
}


export type SearchResponse = {
  response?: GenerativeReturn<Jeopardy, undefined>
}