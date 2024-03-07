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
exports.getDocs = void 0;
const cheerio_1 = require("langchain/document_loaders/web/cheerio");
const text_splitter_1 = require("langchain/text_splitter");
//Scrapping the web and geting a document.
function getDocs() {
    return __awaiter(this, void 0, void 0, function* () {
        //loading data from website and turning into document
        const loader = new cheerio_1.CheerioWebBaseLoader("https://sathyabama.ac.in/about-us");
        const docs = yield loader.load();
        //splitting docs
        const splitter = new text_splitter_1.RecursiveCharacterTextSplitter();
        const splitDocs = yield splitter.splitDocuments(docs);
        return splitDocs;
    });
}
exports.getDocs = getDocs;
