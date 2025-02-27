import weaviate,  { WeaviateClient } from 'weaviate-client'

const weaviateURL = process.env.WEAVIATE_URL as string;
const weaviateApiKey = process.env.WEAVIATE_API_KEY as string;
const cohereApiKey = process.env.COHERE_API_KEY as string;
const openaiKey = process.env.OPENAI_API_KEY as string;

const client: WeaviateClient = await weaviate.connectToWeaviateCloud(weaviateURL, { 
      authCredentials: new weaviate.ApiKey(weaviateApiKey),
      headers: {
        'X-Cohere-Api-Key': cohereApiKey, 
        'X-Openai-Api-Key': openaiKey
      }
    }
)

export default client