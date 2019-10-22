const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
const areaInMili=width*25.4*length*25.4;
const rounder= Math.round(areaInMili * 100)/100;
//let rounder= (width*length*25.4).toFixed(2);
const finalarea=rounder.toLocaleString('en');
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + finalarea + " square milimeter(s).");
