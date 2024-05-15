"use strict";

const toyCategoryDropdown = document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyName = document.getElementById("toyName");
const toyManufacturer = document.getElementById("toyManufacturer");
const toyAge = document.getElementById("toyAge");

window.onload = () => {
  console.log("onload");
  toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
  toyList.onchange = onToyListChange;
};

function onToyCategoryDropdownChange() {
  let selectedToyCategory = toyCategoryDropdown.value;

  toyList.options.length = 0;

  //   =========== An old way of going throufh loops with everything in one function=========//
  // for(let i = 0; i < toyCategoryDropdown.length; i++){
  //   if(selectedToyCategory == "Action Figures"){
  //     let toyName = toysObject["Action Figures"][i].name;
  //     // console.log(toyName);
  //     let newOption = document.createElement("Option");
  //     newOption.textContent = toyName;
  //     toyList.appendChild(newOption);
  //   } else if(selectedToyCategory == "Educational Toys"){
  //     let toyName = toysObject["Educational Toys"][i].name;
  //     // console.log(toyName);
  //     let newOption = document.createElement("Option");
  //     newOption.textContent = toyName;
  //     toyList.appendChild(newOption);
  //   }
  //   else if(selectedToyCategory == "Outdoor Toys"){
  //     let toyName = toysObject["Outdoor Toys"][i].name;
  //     // console.log(toyName);
  //     let newOption = document.createElement("Option");
  //     newOption.textContent = toyName;
  //     toyList.appendChild(newOption);
  //   }
  // }
  // =========== A new way of going through loops with function for every executions=========//

  let toysInCategory = getToysForCategoryCode(selectedToyCategory);

  for (let toy of toysInCategory) {
    addToyNameToToyList(toy.name);
  }
}

function addToyNameToToyList(toyName) {
  let newOption = document.createElement("option");
  newOption.value = toyName;
  newOption.innerHTML = toyName;
  toyList.appendChild(newOption);
}

let toysObject = toys.Toys;

function getToysForCategoryCode(categoryCode) {
  if (categoryCode == "Action Figures") {
    return toysObject["Action Figures"];
  } else if (categoryCode == "Educational Toys") {
    return toysObject["Educational Toys"];
  } else if (categoryCode == "Outdoor Toys") {
    return toysObject["Outdoor Toys"];
  } else {
    console.log("No toy is selected");
  }
  return [];
}

function onToyListChange() {


    // ==============from chat gpt=============//
    
  let selectedCategory = toyCategoryDropdown.value;
  let selectedToy = toyList.value;
  let toyInCategory = getToysForCategoryCode(selectedCategory);
  let toyDetails = toyInCategory.find((toy) => toy.name == selectedToy);       

  if (toyDetails != "") {
    toyDetailRow.style.display = "block";
    toyName.textContent = toyDetails.name;
    toyManufacturer.textContent = toyDetails.manufacturer;
    toyAge.textContent = toyDetails.age_range;
  } else {
    toyDetailRow.style.display = "none";
  }
}
