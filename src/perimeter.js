const scanner=require("readline-sync");
const width=Number(scanner.question("\nWidth: "));
const length=Number(scanner.question("Length: "));
const perimeterInCenti=(2*width*2.54+2*length*2.54);
const finalperimeter=perimeterInCenti.toLocaleString('en', {
  style:'decimal',maximumFractionDigits: 2, minimumFractionDigits: 2
});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + finalperimeter + " centimeter(s).")
