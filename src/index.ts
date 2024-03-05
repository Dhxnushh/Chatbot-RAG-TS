import { ChatGoogleGenerativeAI,GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { prompting } from "./prompts";
import { config } from "dotenv";
import { chain } from "./chain";

//loading api keys
config();

//initializing models.
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  maxOutputTokens: 2048,
});
const embedding = new GoogleGenerativeAIEmbeddings({
  modelName: "embedding-001", // 768 dimensions
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "docs",
});

//check chain.ts for chain().
const retrieverchain = chain(model,embedding);

//prompting and invoking model.
//check prompt.ts for prompting().
prompting(retrieverchain);


