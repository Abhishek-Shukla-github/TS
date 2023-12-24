"use strict";
// console.log("Bonjour!!!")
// console.log("Ety toii!!!")
// let btn = document.querySelector("button")! // ! -> indicates that particular statement will never be null and hence TS can ignore it safely
// console.log(btn)
// btn.addEventListener("click",() => console.log("Hiii"))
// //Type Assertions: Telling TS that you know more and specifying what an element's type would definitely be
// let nameString: unknown = "Abhishek";
// // console.log(nameString.length) //This'll throw an error because nameString is of type unknown and .length on unknown is not allowed
// console.log((nameString as string).length)  //THis does not throw an error because now we're asserting TS that type of numstring in this particular context is sure to be of type string despite the declared type as "unknown"
// Project Begins
let form = document.querySelector("#todo-form");
let handleSubmit = function (e) {
    e.preventDefault();
    alert(e);
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    alert("HELLO");
    e.preventDefault();
});
