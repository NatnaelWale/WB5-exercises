"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];


function fullName(arr){
    console.log(arr.first + " " + arr.last)
}

kids.forEach(fullName)

console.log("=============")

kids.map(fullName)

function buildFullName(arrayElement) {
    return arrayElement.first + " " + arrayElement.last;
   }
   let namesList = kids.map(buildFullName);
   
