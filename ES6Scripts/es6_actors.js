"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];



// Who is the Academy Member whose ID is 187???????????????????


// using find method=================================


// console.log(academyMembers.find((value) => value.memID === 187).name);


// using filter method===============================


// console.log(academyMembers.filter((value) => value.memID === 187).map((item) => item.name ))


// using foreach method===============================


// function checkActorWithId(item){
//     if(item.memID === 187){
//         console.log(item.name)
//     }
// }
// academyMembers.forEach(checkActorWithId)


// Using map method===================================


// console.log(academyMembers.map((item)=> item.memID === 187))

// function checkWithMemId(item){
//     if(item.memID === 187){
//        return item.name
//     }
// }

// console.log(academyMembers.map(checkWithMemId).filter(item => item !== undefined));


// Using reduce method==============================


// const checkWithId = academyMembers.reduce((acc, curr) => {
//     if(curr.memID === 187){
//         acc.push(curr.name)
//     }
//     return acc
// }, []);

// console.log(checkWithId)





// Who has been in at least 3 films???????????????????????


// Using find method====================================


// console.log(academyMembers.find((item) => item.films.length >= 3).name)



// Using filter method==================================


// console.log(academyMembers.filter((item) => item.films.length >= 3).map(item => item.name))


// Using foreach method================================


// let checkNumberOfMovies = academyMembers.forEach((item) => {
//     if(item.films.length >= 3){
//         console.log(item.name)
//     }
// });


// Using map method===================================


// const moreThan3Movies = academyMembers.map((item) => {
//     if(item.films.length >= 3){
//         console.log(item.name)
//     }
// });


// const moreThan3Movies = academyMembers.map((item) => {
//     if(item.films.length >= 3){
//         let name = item.name
//         return name
//     }
// });

// console.log(moreThan3Movies.filter((item) => item !== undefined))



// Using reduce method===============================

// const checkNumOfMovies = academyMembers.reduce((acc, curr) => {
//     if( curr.films.length >= 3){
//         acc.push(curr.name)
//     }
//     return acc
// }, []);

// console.log(checkNumOfMovies)





// Who has a name that starts with "Bob"????????????????



// Using find method==================================


// console.log(academyMembers.find((item) => item.name.includes("Bob")).name)




// Using filter method================================


// console.log(academyMembers.filter((item) => item.name.includes("Bob")).map(item => item.name))



// Using foreach method================================


// const checkBobName = academyMembers.forEach((item) => {
//     if(item.name.includes("Bob")){
//         console.log(item.name)
//     }
// });


// Using map method===================================


// const checkNameWithBob = academyMembers.map((item) => {
//     if(item.name.includes("Bob")){
//         return item.name
//     }
// })

// let filteredResult = checkNameWithBob.filter((item) => item !== undefined)
// console.log(filteredResult)


// const checkNameWithBob2 = academyMembers.map((item) => {
//     if(item.name.includes("Bob")){
//         console.log(item.name)
//     }
// })




// Using Reduce method=================================


// const nameWithBob = academyMembers.reduce((acc, curr) => {
//     if(curr.name.includes("Bob")){
//         acc.push(curr.name)
//     }
//     return acc
// }, [])

// console.log(nameWithBob)



// HARDER: Which Academy Members have been in a film that starts with "A"??????????


// Using find method======================================


// console.log(academyMembers.find((item) => {
//     let movies = item.films
//     for(let i=0; i < movies.length; i++){
//        if(movies[i].includes("A")) {
//         return movies[i]
//        }
//     }
// }).name);


// Using filter method==================================


// console.log(academyMembers.filter((item) => {
//     let movies = item.films
//     for(let i=0; i < movies.length; i++){
//        if(movies[i].includes("A")) {
//         return movies[i]
//        }
//     }
// }).map(item => item.name));


// Using foreach method=================================


//  const moviesWithA = academyMembers.forEach((item) => {
//     let movies = item.films
//     for(let i=0; i < movies.length; i++){
//        if(movies[i].includes("A")) {
//         console.log(item.name)
//        }
//     }
// });


// Using map method====================================


// const mapAMovie = academyMembers.map((item) => {
//     let movies = item.films
//     for(let i=0; i < movies.length; i++){
//        if(movies[i].includes("A")) {
//         console.log(item.name)
//        }
//     }
// })


// Using reduce method==================================


// const reducedMovieWithA = academyMembers.reduce((acc, curr) => {
//     let movies = curr.films
//     for(let i=0; i < movies.length; i++){
//        if(movies[i].includes("A")) {
//         acc.push(curr.name)
//        }
//        return acc
//     }
// }, [])

// console.log(reducedMovieWithA)