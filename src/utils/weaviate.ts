import weaviate,  { WeaviateClient } from 'weaviate-client'

const weaviateURL = process.env.WEAVIATE_URL as string;
const weaviateApiKey = process.env.WEAVIATE_API_KEY as string;
const openAIKey = process.env.OPENAI_API_KEY as string;

const client = await weaviate.connectToWeaviateCloud(weaviateURL, { 
      authCredentials: new weaviate.ApiKey(weaviateApiKey),
      headers: {
        'X-OpenAI-Api-Key': openAIKey, 
      }
    }
)

export default client