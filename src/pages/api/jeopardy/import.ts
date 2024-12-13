import client from "@/utils/weaviate";
import createCollection from "@/utils/collection"
import type { NextApiRequest, NextApiResponse } from "next";
import { join } from 'path'
import { readFileSync } from 'fs'

// export const runtime = "edge";

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






