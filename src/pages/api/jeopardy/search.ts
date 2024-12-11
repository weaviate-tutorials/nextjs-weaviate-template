import client from "@/utils/weaviate";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const collectionName = "Jeopardy"

    const jeopardy = client.collections.get(collectionName)
    const searchTerm = req.query.query

    if (searchTerm) {
        const response = await jeopardy.query.nearText(searchTerm, {
            limit: 4
        })
        res.status(200).json(response);
    }
    else {
        res.status(400).json({ "error": "no query" })
    }
}





