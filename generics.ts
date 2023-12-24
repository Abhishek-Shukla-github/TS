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