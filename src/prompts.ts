//Creating input function
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Function for prompting
export async function prompting(chain: any) {
  let qn = String;
  //Asking for input
  readline.question("Ask question[Press Q to exit]: ", async (qn: string) => {
    //Quit statement
    if (qn == "q" || qn == "Q") {
      console.log("Exiting chat.Thank you!"), readline.close();
      return;
    }
    //Invoke model
    const res = (await chain).invoke({
      input: qn,
    });
    //Display answer
    console.log((await res).answer), readline.close();
  });
}
