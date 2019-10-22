const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
const areaInMili= Math.round(width * length * 25.4 * 100)/100;

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaInMili + " square milimeter(s).");
