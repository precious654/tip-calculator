console.log("Hello");

let bill = document.querySelector(".bill-input") as HTMLInputElement;

let people = document.querySelector(".people-input") as HTMLInputElement;

let tipPerPerson = document.querySelector(".amount-input") as HTMLInputElement;

let totalPerPerson = document.querySelector(".total-input") as HTMLInputElement;

let five = document.querySelector(".button-one");

let ten = document.querySelector(".button-two");

let fifteen = document.querySelector(".button-three");

let twentyFive = document.querySelector(".button-four");

let fifty = document.querySelector(".button-five");

five?.addEventListener( "click", function(): void {

  let price: any = bill.value;

  let tip: number = price * 0.05;

  console.log( tip );
} );


ten?.addEventListener( "click", function(): void {

  let price: any = bill.value;

  let tip: number = price  * 0.1;

  console.log( tip );
} )

fifteen?.addEventListener( "click", function(): void {

  let price: any = bill.value;

  let noOfPeople: any = people.value;

  let tip: number = price * 0.15;

  console.log( tip );

  let finalValue: any = tip / noOfPeople;

  tipPerPerson.value = finalValue;

  let totalFinalValue: any = (price + tip) / noOfPeople;

  totalPerPerson.value = totalFinalValue;

  console.log( totalFinalValue )

} )

twentyFive?.addEventListener( "click", function(): void {

  let price: any = bill.value;

  let tip: number = price * 0.25;

  console.log( tip );
} )

fifty?.addEventListener( "click", function(): void {

  let price: any = bill.value;

  let tip: number = price * 0.5;

  console.log( tip );
} )
