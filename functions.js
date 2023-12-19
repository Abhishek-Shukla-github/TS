function greet(name) {
    if (name === void 0) { name = "Stranger"; }
    console.log("Hello , ".concat(name));
}
greet();
greet("Ibra");
greet("Shuklao");
//return type annotations
function square(num) {
    return num * num;
}
//void return type
function printTwice(name) {
    console.log(name);
    console.log(name);
    // return true
    //if we uncomment the above line we'll get an error since we have annotated the return as void for this function but now we're trying to return a boolean instead
}
