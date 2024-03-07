import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

//Scrapping the web and geting a document.
export async function getDocs() {
    //loading data from website and turning into document
    const loader = new CheerioWebBaseLoader("https://sathyabama.ac.in/about-us");
    const docs = await loader.load();
    //splitting docs
    const splitter = new RecursiveCharacterTextSplitter();
    const splitDocs = await splitter.splitDocuments(docs);
    return splitDocs
}
