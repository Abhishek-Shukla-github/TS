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
