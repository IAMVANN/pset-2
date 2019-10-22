console.log("Hi! What's your name?");
const readlineSync= require("readline-sync");

const name=readlineSync.question("");
console.log("\nHello, " + name + "!");
