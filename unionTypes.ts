let age: number | string = 12;
age = "21"

type Person = {
    name: string,
    isHuman: boolean
}

type Pet = {
    name: string,
    type: string
}

let JohnDoe: Person | Pet = {
    name: "John",
    isHuman: true
} //Initially assigned the Person type

JohnDoe = {
    name: "John",
    type: "Cat"
} // Later changed to the Pet type and TS doesn't complain because JohnDoe is a union of Person and Pet types


//Union types with Arrays
let numBoolArray: (number | boolean)[] = [1,2,3,4,5,true,false]
