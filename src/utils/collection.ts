import weaviate from 'weaviate-client'
import client from "@/utils/weaviate"

export default async function createCollection(collectionName: string) {
    await client.collections.create({
      name: collectionName,
      vectorizers: weaviate.configure.vectorizer.text2VecOpenAI(),
      generative: weaviate.configure.generative.openAI(),
    });
  }