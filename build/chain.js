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
exports.chain = void 0;
const combine_documents_1 = require("langchain/chains/combine_documents");
const retrieval_1 = require("langchain/chains/retrieval");
const prompts_1 = require("@langchain/core/prompts");
const vector_1 = require("./vector");
function chain(model, embedding) {
    return __awaiter(this, void 0, void 0, function* () {
        //check vector.ts for vectordata().
        let data = (0, vector_1.vectordata)(embedding);
        const retriever = (yield data).asRetriever();
        //creating prompt template.
        const msg = `You are magenta a webscrapper AI,you scrape the web for and give answers based on the given context
    <context>
    {context}
    </context>
    Question: {input}`;
        const prompt = prompts_1.ChatPromptTemplate.fromTemplate(msg);
        //creating documentchain.
        const documentChain = yield (0, combine_documents_1.createStuffDocumentsChain)({
            llm: model,
            prompt,
        });
        //creating retrievalchain.
        const retrievalChain = yield (0, retrieval_1.createRetrievalChain)({
            combineDocsChain: documentChain,
            retriever,
        });
        return retrievalChain;
    });
}
exports.chain = chain;
