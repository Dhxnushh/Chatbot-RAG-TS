import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { getDocs } from "./webloader";

export async function vectordata(model:GoogleGenerativeAIEmbeddings) {
    //check webloader.ts for getDocs().
    const docs = await getDocs();
    //initializing vectorstore.
    const vectorstore = await MemoryVectorStore.fromDocuments(
      docs,
      model
    );
    return vectorstore;
  }