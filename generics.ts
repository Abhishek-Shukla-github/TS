// Generics return the type which is specified to at the function call
// eg if a function is given a string type then it'll return only a string type

// Template function:-
function identity<Type>(item: Type) : Type{
    return item;
}

interface Cat{
    name: string
    age: number
}

// usage:
identity<string>("Hello")
identity<number>(4)
identity<Cat>({name: "Billy",age: 21})


//Example 2
function getRandomElement<T>(item: T[]) : T{
    let rand = Math.floor(Math.random()*10)
    return item[rand]
}

getRandomElement<number>([1,2,3,4,5,6])
getRandomElement<string>(["a","b","c"])

//Multiple Types
interface Species{
    type: string
}

interface Human{
    age: number
}

function mergeObj<T,U>(item1:T, item2: U){
    return {...item1, ...item2}
}

let res = mergeObj<Species, Human>({type: "Human"},{age: 21})