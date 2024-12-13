import client from "@/utils/weaviate"
import { generative, vectorizer } from "weaviate-client";

export const runtime = "edge";

export default async function createCollection(collectionName: string) {
    await client.collections.create({
      name: collectionName,
      vectorizers: vectorizer.text2VecOpenAI(),
      generative: generative.openAI(),
    });
  }