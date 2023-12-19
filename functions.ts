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