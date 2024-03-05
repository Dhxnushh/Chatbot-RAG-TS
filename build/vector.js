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
exports.vectordata = void 0;
const memory_1 = require("langchain/vectorstores/memory");
const webloader_1 = require("./webloader");
function vectordata(model) {
    return __awaiter(this, void 0, void 0, function* () {
        //check webloader.ts for getDocs().
        const docs = yield (0, webloader_1.getDocs)();
        //initializing vectorstore.
        const vectorstore = yield memory_1.MemoryVectorStore.fromDocuments(docs, model);
        return vectorstore;
    });
}
exports.vectordata = vectordata;
