const scanner=require("readline-sync");
const width=Number(scanner.question("\nWidth: "));
const length=Number(scanner.question("Length: "));
const diagonal=Math.sqrt(width ** 2 + length ** 2).toLocaleString('en', {
  style:'decimal',maximumFractionDigits: 2, minimumFractionDigits: 2
});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).");
