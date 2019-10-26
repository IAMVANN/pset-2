const scanner=require("readline-sync");
const students=Number(scanner.question("\nStudents: "));
const teachers=Number(scanner.question("Teachers: "));
const busSize=Number(scanner.question("Bus capacity: "));
const people=students+teachers;
const lastBus=people%busSize;
const numberOfBuses=((people/busSize - lastBus/busSize)+1).toLocaleString('en',{
  style:"decimal", maximumFractionDigits:2
});

console.log("\n" + numberOfBuses + " bus(es) is (are) needed, with " + lastBus + " passenger(s) on the last bus.");
