"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Ethiopian Scent", price: 9.79 },
  { product: "Sweet Aroma", price: 3.89 },
  { product: "Candy Lovers", price: 1.89 },
  { product: "Habesha", price: 5.49 },
  { product: "Hot Spice", price: 2.69 },
  { product: "Plain sweet", price: 0.69 },
];

// Which candies costs less than $4.00?

// Using find method which return the first element that matches the requirement

//    function lessThanFourbucks(value){
// return value.price < 4;
//    }

//    console.log(products.find(lessThanFourbucks).product)

// Using the filter method that return an array of the results that satisfy the condition

// function lessThanFourbucks(value) {
//   return value.price < 4;
// }

// let result = products.filter(lessThanFourbucks);

// for(let i=0; i<result.length; i++){
//     console.log(result[i].product)
// }


// Using the forEach method

// function lessThanFourbucks(value){
//    if(value.price < 4){
//     console.log(value.product)
//    }
// }

// products.forEach(lessThanFourbucks)


// using map method

// function lessThanFourbucks(value) {
//   if(value.price < 4){
//     console.log(value.product)
//   }
// }

// products.map(lessThanFourbucks)

// using reduce method

// let lessThan4Candy = products.reduce((acc, curr) => {
//    if(curr.price < 4){
//     acc.push(curr.product)
//    }
//    return acc
// }, [])

// console.log(lessThan4Candy)



// Which candies has "M&M" its name?

// Using the find() method

// let mAndMProducts = products.find((value) => value.product.includes("M&M"));


// console.log(mAndMProducts)


// Using the filter method

// let mAndMProduct = products.filter((value) => value.product.includes("M&M"));


// console.log(mAndMProduct)


// using the foreach method

// function mAndMproducts(item){
//     if(item.product.includes("M&M")){
//         console.log(item.product)
//     }
// }
// products.forEach(mAndMproducts);


// using map method

// function mAndMproducts(item){
//     if(item.product.includes("M&M")){
//         console.log(item.product)
//     }
// }

// products.map(mAndMproducts);

// using reduce() method

// let getMandM = products.reduce((acc, curr) => {
//     if(curr.product.includes("M&M")){
//       acc.push(curr.product)
//     }
//     return acc
// }, []);

// console.log(getMandM)




// Do we carry "Swedish Fish"?

// using find method

// function checkWeCarrySwedishFish(item){
//     return item.product === "Swedish Fish";
// }

// console.log(products.filter(checkWeCarrySwedishFish).product);


// using filter method 1

// function checkIfWeCarrySwedishFish(v){
//     if(v.product.includes("Swedish Fish")){
//         console.log( value.product + " $" + value.price)
//     }
// }

// products.filter(checkIfWeCarrySwedishFish);


// using filter method 2


// function checkWeCarrySwedishFish(item){
//     return item.product === "Swedish Fish";
// }

// console.log(products.filter(checkWeCarrySwedishFish).map((item) => item.product));



// Using foreach method

// function checkMandM(val){
//     if(val.product === "Swedish Fish"){
//         console.log(val.product)
//     }
// }

// products.forEach(checkMandM)





// Using reduce method

// let checkIfWeHaveSwedish = products.reduce((acc, curr) => {
//     if(curr.product === "Swedish Fish"){
//       acc.push(curr.product)
//     }
//     return acc
// }, [])

// console.log(checkIfWeHaveSwedish)

