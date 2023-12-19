function greet(name: string = "Stranger"){
    console.log(`Hello , ${name}`)
}

greet()
greet("Ibra")
greet("Shuklao")


//return type annotations
function square(num : number) : number{
    return num*num
}

//void return type
function printTwice(name): void{
    console.log(name)
    console.log(name)
    // return true
    //if we uncomment the above line we'll get an error since we have annotated the return as void for this function but now we're trying to return a boolean instead
}