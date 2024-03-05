import { ChatGoogleGenerativeAI,GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
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
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function prompting() {
    let qn = String;
    readline.question("Ask question[Press Q to exit]: ", async (qn: string) => {
    if((qn=="q") || (qn=="Q")){
      console.log("Exiting chat.Thank you!"), readline.close();
      return
    }
    const res = (await retrieverchain).invoke({
      input: qn,
    });
    console.log((await res).answer), readline.close();
})};
prompting();


