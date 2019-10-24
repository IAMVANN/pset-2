const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
const perimeterInCenti=(2*width*2.54+2*length*2.54);
const rounder=Math.round(perimeterInCenti*100)/100;
const finalperimeter=rounder.toLocaleString('en');

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + finalperimeter + " cenimeter(s).")
