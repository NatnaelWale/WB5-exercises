"use strict";

let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

// Which vehicles are RED?????????????????????

// Using find method==========================

// console.log(vehicles.find(item => item.color === "Red").licenseNo)


// Using filter Method========================


// console.log(vehicles.filter(item => item.color === "Red").map(item => item.licenseNo))


// Using foreach method======================


// function checkRedVehicle(item){
//     if(item.color === "Red"){
//         console.log(item.licenseNo)
//     }
// }

// vehicles.forEach(checkRedVehicle)

// const checkRedCar = vehicles.forEach((item) => {

//     if(item.color === "Red"){
//     console.log(item.licenseNo)
// }
// })


// Using map method=========================


// const checkRed = vehicles.map((item) => {
//    if(item.color === "Red") {
//       let car = item.licenseNo
//       return car
//    }
// })

// console.log(checkRed.filter(item => item != undefined))



// Using reduce method========================

// const checkRedCar  = vehicles.reduce((acc, curr) => {
//     if(curr.color === "Red"){
//       acc.push(curr.licenseNo)
//     }
//     return acc
// }, [])

// console.log(checkRedCar)




// Which vehicles have registrations that are expired???????????????



// Using find method============================

// console.log(vehicles.find(item => item.registrationExpires < new Date()).licenseNo)



// Using filter method=========================


// console.log(vehicles.filter(item => item.registrationExpires < new Date()).map(item => item.licenseNo))


// Using foreach method==========================

// const expiredVehicles = vehicles.forEach(item => {
//     if(item.registrationExpires < new Date()){
//         console.log(item.licenseNo)
//     }
// })


// Using map method============================


// const expiredCars = vehicles.map((item) => {
//   if (item.registrationExpires < new Date()) {
//     return item.licenseNo
//   }
// });

// console.log(expiredCars)


// Using reduce method=========================


// const expiredVehicles = vehicles.reduce((acc, curr) => {
//   if (curr.registrationExpires < new Date()) {
//     acc.push(curr.licenseNo)
//   }
//   return acc
// }, []);

// console.log(expiredVehicles)




// Which vehicles that hold at least 6 people???????????????????


// Using find method===========================

// console.log(vehicles.find(item => item.capacity >= 6).licenseNo)


// Using filter method============================

// console.log(vehicles.filter(item => item.capacity >= 6).map(item => item.licenseNo))


// Using foreach method  =======================

// const largeCapacityVehicle = vehicles.forEach(item => {
//     if(item.capacity >= 6){
//         console.log(item.licenseNo)
//     }
// })


// Using map method===========================

// function checkCapacity(item) {
//   if (item.capacity >= 6) {
//     return item.licenseNo;
//   }
// }

// function filterVehicles(items){
//     let filtered = items.filter(item => item != undefined)

//     console.log(filtered)
// }

// let result = vehicles.map(checkCapacity)

// filterVehicles(result)


// Using reduce method=========================

// const highCapacityCars = vehicles.reduce((acc, curr) => {
//      if(curr.capacity >= 6){
//         acc.push(curr.licenseNo)
//      }
//      return acc
// }, [])

// console.log(highCapacityCars)



// Which vehicles have license plates that end with "222"?????????????????


// Using find method==============================

// console.log(vehicles.find(item => item.licenseNo.includes("222")).licenseNo)


// Using filter method=============================

// console.log(vehicles.filter(item => item.licenseNo.includes("222")).map(item => item.licenseNo))


// Using foreach method===========================


// const licensePlate = vehicles.forEach((item) => {
//   if(item.licenseNo.includes("222")) {
//     console.log(item.licenseNo)
//   }
// });



// Using map method==============================

// const checkLicense = vehicles.map(item => {
//     if(item.licenseNo.includes("222")){
//         return item.licenseNo
//     }
// });
// let filteredLicense = checkLicense.filter(item => item != undefined)

// console.log(filteredLicense)



// Using reduce method==========================

// const checkVehicleLicense = vehicles.reduce((acc, curr) => {
//     if(curr.licenseNo.includes("222")){
//      acc.push(curr.licenseNo)
//     }
//     return acc
// }, [])

// console.log(checkVehicleLicense);

