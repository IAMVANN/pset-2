const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
let rounder= Math.round(width * length * 25.4 * 100)/100;
//let rounder= (width*length*25.4).toFixed(2);
let areaInMili=rounder.toLocaleString('en');
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaInMili + " square milimeter(s).");
