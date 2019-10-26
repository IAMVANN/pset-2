const scanner=require("readline-sync");
let yearlySalary=Number(scanner.question("\nAnnual salary: "));
const kcontribution=yearlySalary*.07;
yearlySalary=yearlySalary-kcontribution;
const fedTax=yearlySalary*.157;
const stateTax=yearlySalary*.0447;
const socialSecurityTax=yearlySalary*.062;
const medicareTax=yearlySalary*.0145;
const tax=fedTax+stateTax+socialSecuritytax+medicareTax;
const finalSalary=yearlySalary-tax;
const homePay=(finalSalary/24).toLocaleString('en',{
  style:'currency', currency:'USD'
});
console.log("\nYour take-home pay each check will be " + homePay + ".");
