import client from "@/utils/weaviate";
import type { NextApiRequest, NextApiResponse } from "next";
import { join } from 'path'
import { readFileSync } from 'fs'
import { generative, vectorizer } from "weaviate-client";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const collectionName = "JeopardyTEST"
  const fileName = "jeopardy.json"
  const importJson = getData(fileName)

  if (await client.collections.exists(collectionName) == false) {
    await createCollection(collectionName)
  }

  const myCollection = client.collections.get(collectionName)
  const response = await myCollection.data.insertMany(importJson)

  res.status(200).json(response);
}

function getData(fileName: string) {

  const filePath = join(process.cwd(), `./data/${fileName}`)
  const file = readFileSync(filePath);
  const jsonData = JSON.parse(file.toString())

  return jsonData
}

async function createCollection(collectionName: string) {
  await client.collections.create({
    name: collectionName,
    vectorizers: vectorizer.text2VecOpenAI(),
    generative: generative.openAI(),
  });
}




