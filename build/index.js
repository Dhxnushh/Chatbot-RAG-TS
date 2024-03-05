"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_genai_1 = require("@langchain/google-genai");
const generative_ai_1 = require("@google/generative-ai");
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
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
function prompting() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            let qn = String;
            readline.question("Ask question[Press Q to exit]: ", (qn) => __awaiter(this, void 0, void 0, function* () {
                if ((qn == "q") || (qn == "Q")) {
                    console.log("Exiting chat.Thank you!"), readline.close();
                    return;
                }
                const res = (yield retrieverchain).invoke({
                    input: qn,
                });
                console.log((yield res).answer), readline.close();
            }));
        }
    });
}
;
prompting();
