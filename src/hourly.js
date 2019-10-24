const scanner=require("readline-sync");
const hourlywage=Number(scanner.question("\nHourly wage: "));
const monday=Number(scanner.question("\nMonday: "));
const tuesday=Number(scanner.question("Tuesday: "));
const wednesday=Number(scanner.question("Wednesday: "));
const thursday=Number(scanner.question("Thursday: "));
const friday=Number(scanner.question("Friday: "));
const saturday=Number(scanner.question("Saturday: "));
const sunday=Number(scanner.question("Sunday: "));
const pay= (monday* hourlywage + tuesday* hourlywage + wednesday * hourlywage + thursday * hourlywage + friday*hourlywage + saturday*hourlywage + sunday*hourlywage).toLocaleString('en',{
  style:'currency', currency: "USD"
});
console.log("\nYou'll make " + pay + " this week.");
