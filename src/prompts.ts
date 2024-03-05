const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });


export async function prompting(chain:any){
    let qn = String;
    readline.question("Ask question[Press Q to exit]: ", async (qn: string) => {
    if((qn=="q") || (qn=="Q")){
      console.log("Exiting chat.Thank you!"), readline.close();
      return
    }
    const res = (await chain).invoke({
      input: qn,
    });
    console.log((await res).answer), readline.close();
})};