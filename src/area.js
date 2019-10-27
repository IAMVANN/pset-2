const scanner=require("readline-sync");
const width=Number(scanner.question("\nWidth: "));
const length=Number(scanner.question("Length: "));
const areaInMili=width*25.4*length*25.4;
const finalArea=areaInMili.toLocaleString('en', {
  style:'decimal',maximumFractionDigits: 2, minimumFractionDigits: 2
});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + finalArea + " square milimeter(s).");
