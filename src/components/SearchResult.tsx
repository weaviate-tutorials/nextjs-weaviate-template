"use client";

import React from "react";
import { type WeaviateReturn } from "weaviate-client";
import { type Jeopardy } from "../../types";

export default function VectorSearchResult({ response }: {
    response: WeaviateReturn<Jeopardy>
}) {

    return (
        <div className="flex items-start justify-center">
            <div
                className="item-start absolute flex z-10 mt-2 w-[750px] divide-y divide-gray-100 rounded-md border border-gray-100 bg-slate-200 shadow-lg"
                role="menu">
                <div className="p-2">
                    <strong className="block p-2 text-xs font-bold uppercase text-black">
                        Results
                    </strong>
                    <div>
                    </div>
                    <div>
                        {
                            response.objects.map((result) => (
                                <div key={result.uuid} className="space-y-4 p-2">
                                    <a className="font-bold text-xl pt-2 pb-2 underline">
                                        {result.properties.question}
                                    </a>
                                    <h3 className="-translate-y-2 w-full">
                                        {result.properties.answer}
                                    </h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}