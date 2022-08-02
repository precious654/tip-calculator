"use strict";
console.log("Hello");
let bill = document.querySelector(".bill-input");
let people = document.querySelector(".people-input");
let tipPerPerson = document.querySelector(".amount-input");
let totalPerPerson = document.querySelector(".total-input");
let five = document.querySelector(".button-one");
let ten = document.querySelector(".button-two");
let fifteen = document.querySelector(".button-three");
let twentyFive = document.querySelector(".button-four");
let fifty = document.querySelector(".button-five");
five === null || five === void 0 ? void 0 : five.addEventListener("click", function () {
    let price = bill.value;
    let tip = price * 0.05;
    console.log(tip);
});
ten === null || ten === void 0 ? void 0 : ten.addEventListener("click", function () {
    let price = bill.value;
    let tip = price * 0.1;
    console.log(tip);
});
fifteen === null || fifteen === void 0 ? void 0 : fifteen.addEventListener("click", function () {
    let price = bill.value;
    let noOfPeople = people.value;
    let tip = price * 0.15;
    console.log(tip);
    let finalValue = tip / noOfPeople;
    tipPerPerson.value = finalValue;
    let totalFinalValue = (price + tip) / noOfPeople;
    totalPerPerson.value = totalFinalValue;
    console.log(totalFinalValue);
});
twentyFive === null || twentyFive === void 0 ? void 0 : twentyFive.addEventListener("click", function () {
    let price = bill.value;
    let tip = price * 0.25;
    console.log(tip);
});
fifty === null || fifty === void 0 ? void 0 : fifty.addEventListener("click", function () {
    let price = bill.value;
    let tip = price * 0.5;
    console.log(tip);
});
