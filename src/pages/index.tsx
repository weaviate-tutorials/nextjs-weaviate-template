import { useState } from "react";

import Container from '@/components/Container'
import InputCover from '@/components/InputCover'
import Cover from '@/components/Cover'
import Header from "@/components/Header"
import Loading from '@/components/Loading'
import { WeaviateReturn } from "weaviate-client";

export default function Page() {

  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [searchResponse, setSearchResponse] = useState<WeaviateReturn<undefined> | null>(null)
  const [isLoading, setLoading] = useState(false)

  function handleSubmit() {
    setSearch(false)
    setLoading(true)
    fetch('/api/jeopardy/search?' + new URLSearchParams({
      query: searchTerm,
    }))
      .then((res) => res.json())
      .then((data) => {
        setSearchResponse(data)
        setLoading(false)
        setSearch(true)
      })
  }

  return (
    <main>
      <Container>
      <Header text={"Vector Search with Weaviate"}/>
        <InputCover>
          <input type="text" id="SearchTerm" placeholder="what are you looking for?"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.currentTarget.value)
            }}
            className="input-main" />
        </InputCover>
        <Cover>
          <button
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit()
            }}>
            Search
          </button>
        </Cover>
        {
          search && searchResponse &&
          <div>
            <p>{searchResponse.objects[0].properties.question?.toString()}</p>
            <p>{searchResponse.objects[0].properties.answer?.toString()}</p>
          </div>

        }

           {/* {search && searchResponse &&
               <VectorSearchResult response={searchResponse} />
            } */}

            {/* {search && searchResponse &&
               <RAGResult response={searchResponse} />
            } */}
        {isLoading &&
                <Loading />
                }
      </Container>
    </main>
  )
}
