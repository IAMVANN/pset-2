const scanner=require("readline-sync");
let yearlysalary=Number(scanner.question("\nAnnual salary: "));
const kcontribution=yearlysalary*.07;
let yearlysalary=yearlysalary-kcontribution;
const tax=
