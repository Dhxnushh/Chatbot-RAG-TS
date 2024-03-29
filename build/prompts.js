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
exports.prompting = void 0;
//Creating input function
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Function for prompting
function prompting(chain) {
    return __awaiter(this, void 0, void 0, function* () {
        let qn = String;
        //Asking for input
        readline.question("Ask question[Press Q to exit]: ", (qn) => __awaiter(this, void 0, void 0, function* () {
            //Quit statement
            if (qn == "q" || qn == "Q") {
                console.log("Exiting chat.Thank you!"), readline.close();
                return;
            }
            //Invoke model
            const res = (yield chain).invoke({
                input: qn,
            });
            //Display answer
            console.log((yield res).answer), readline.close();
        }));
    });
}
exports.prompting = prompting;
