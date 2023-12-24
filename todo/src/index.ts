console.log("Bonjour!!!")
console.log("Ety toii!!!")

let btn = document.querySelector("button")! // ! -> indicates that particular statement will never be null and hence TS can ignore it safely
console.log(btn)
btn.addEventListener("click",() => console.log("Hiii"))