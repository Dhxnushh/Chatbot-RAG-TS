"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_genai_1 = require("@langchain/google-genai");
const generative_ai_1 = require("@google/generative-ai");
const prompts_1 = require("./prompts");
const dotenv_1 = require("dotenv");
const chain_1 = require("./chain");
//loading api keys
(0, dotenv_1.config)();
//initializing models.
const model = new google_genai_1.ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
});
const embedding = new google_genai_1.GoogleGenerativeAIEmbeddings({
    modelName: "embedding-001", // 768 dimensions
    taskType: generative_ai_1.TaskType.RETRIEVAL_DOCUMENT,
    title: "docs",
});
//check chain.ts for chain().
const retrieverchain = (0, chain_1.chain)(model, embedding);
//prompting and invoking model.
//check prompt.ts for prompting().
(0, prompts_1.prompting)(retrieverchain);
