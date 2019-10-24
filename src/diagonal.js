const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
const diagonal=Math.sqrt(width ** 2 + length ** 2).toFixed(2);

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).")
