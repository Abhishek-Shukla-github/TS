interface Person{
    readonly nationality: string
    name: string,
    age: number,
    geneder?: string
}

let person1: Person = {
    nationality: "Earthian",
    name: "Abhi",
    age:21,
}

interface Product{
    price: number,
    name: string,
    applyDiscount: (percentage: number) => number
    applyDiscountFunctional(percentage: number): number
}

// let Reebok: Product = {
//     name: "Nike Sloth Edition",
//     price: 213,
//     applyDiscount: (discount: number) => this.price*(1-discount),
//     applyDiscountFunctional(percentage: number) {
//         return this.price
//     },
// }

let Reebok: Product = {
    name: "Nike Sloth Edition",
    price: 213,
    applyDiscount: (discount: number) => this.price * (1 - discount),
    applyDiscountFunctional(percentage: number) {
        return this.price* (1 - percentage);
    },
}

console.log(Reebok.applyDiscount(0.5));
console.log(Reebok.applyDiscountFunctional(0.5));


//Interfaces inheritance
interface Human{
    name: string,
    age: number
}

interface Athlete{
    sport: string,
    team: string[]
}

interface Footballer extends Human,Athlete{
    position: "striker" | "centre-back" | "winger"
}

let Zlatan: Footballer = {
    name: "Zlatan Ibrahimovic",
    age: 42,
    sport: "Football",
    position: "striker",
    team: ["AC Milan","Inter Milan", "Man UTD", "PSG"]
}