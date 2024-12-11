### From Zero to RAG: Practical Vector Search with Weaviate and TypeScript

This hands-on workshop aims to fix that as we walk through what it takes to build a privacy-focused AI Web App, covering concepts like vector search and RAG. You'll learn to work with LLMs, embedding models, and vector databases, leaving with both the confidence and practical skills to integrate AI into your JavaScript applications.

## Installation 

1. Clone the repo with the following command
    ```
    git clone https://github.com/weaviate-tutorials/nextjs-weaviate-template
    ```

2. Install the necessary project dependencies with the following command
    ```
    yarn install
    ```
3. Create a Weaviate instance on Weaviate Cloud Services as described in [this guide](https://weaviate.io/developers/weaviate/quickstart#step-2-create-an-instance)

4. Create a `.env` file and add the following keys
    - your Open AI API key as `OPENAI_API_KEY` (you can get this in your [Open AI settings](https://platform.openai.com/account/api-keys))
    - your Weaviate API key as `WEAVIATE_ADMIN_KEY` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
    - your Weaviate host URL as `WEAVIATE_HOST_URL` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
  
5. Import your data and initialize your collections by calling `api/jeopardy/import`
   
6. Start your frontend app with the following command
    ```
    yarn dev
    ```

7. Search away!!

## 📚 Resources
Learn more about Weaviate applications
- [Weaviate Generative Search](https://weaviate.io/developers/weaviate/modules/reader-generator-modules/generative-openai)
- [Vector Search](https://weaviate.io/developers/weaviate/search/similarity)
  
## 🤷🏾‍♂️ Troubleshooting
- Check out the [Weaviate Docs](https://weaviate.io/developers/weaviate)
- Open an [Issue](https://github.com/malgamves/vue-vector-search-demo/issues/new)
   
