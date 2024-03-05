import { ChatGoogleGenerativeAI,GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { vectordata } from "./vector";


export async function chain(
  model: ChatGoogleGenerativeAI,
  embedding: GoogleGenerativeAIEmbeddings
) {
  //check vector.ts for vectordata().
  let data = vectordata(embedding);
  const retriever = (await data).asRetriever();

  //creating prompt template.
  const msg = `You are magenta a webscrapper AI,you scrape the web for and give answers based on the given context
    <context>
    {context}
    </context>
    Question: {input}`;
  const prompt = ChatPromptTemplate.fromTemplate(msg);

  //creating documentchain.
  const documentChain = await createStuffDocumentsChain({
    llm: model,
    prompt,
  });

  //creating retrievalchain.
  const retrievalChain = await createRetrievalChain({
    combineDocsChain: documentChain,
    retriever,
  });
  return retrievalChain;
}
