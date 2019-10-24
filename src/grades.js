const scanner=require("readline-sync");
console.log("\nEnter three homework grades.");
const homework1=Number(scanner.question());
const homework2=Number(scanner.question());
const homework3=Number(scanner.question());
const homeworkweight=((homework1+homework2+homework3)/3)*.15;
console.log("\nEnter three quiz grades.");
const quiz1=Number(scanner.question());
const quiz2=Number(scanner.question());
const quiz3=Number(scanner.question());
const quizweight=((quiz1+quiz2+quiz3)/3)*.35;
console.log("\nEnter three test grades.");
const test1=Number(scanner.question());
const test3=Number(scanner.question());
const test2=Number(scanner.question());
const testweight=((test1+test2+test3)/3)*.5;
const grade=((homeworkweight+quizweight+testweight)/100).toLocaleString('en',{
  style:'percent',maximumFractionDigits: 2, minimumFractionDigits: 2
})
console.log("\nYour rmarking period grade is " + grade +"." );
