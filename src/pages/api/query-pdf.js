import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/community/vectorstores/pinecone";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAI } from "@langchain/openai";
export default async function handler(req, res){
  const {namespace, query} = JSON.parse(req.body)
  const pinecone = new Pinecone()
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { 
      pineconeIndex,
      namespace: namespace.replace(/['"]/gm,"")
    }
  );
  const model = new OpenAI({model:'gpt-3.5-turbo', topP:0.5, });
  const vectorStoreRetriever = vectorStore.asRetriever();
  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  const response = await chain._call({
    query,
  });
  res.json({result:response})
}