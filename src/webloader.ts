import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

//Scrapping the web and geting a document.
export async function getDocs() {
    const loader = new CheerioWebBaseLoader("https://www.businessinsider.in/business");
    const docs = await loader.load();
    const splitter = new RecursiveCharacterTextSplitter();
    const splitDocs = await splitter.splitDocuments(docs);
    return splitDocs
}
