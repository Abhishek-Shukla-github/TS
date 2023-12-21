var _this = this;
var person1 = {
    nationality: "Earthian",
    name: "Abhi",
    age: 21,
};
// let Reebok: Product = {
//     name: "Nike Sloth Edition",
//     price: 213,
//     applyDiscount: (discount: number) => this.price*(1-discount),
//     applyDiscountFunctional(percentage: number) {
//         return this.price
//     },
// }
var Reebok = {
    name: "Nike Sloth Edition",
    price: 213,
    applyDiscount: function (discount) { return _this.price * (1 - discount); },
    applyDiscountFunctional: function (percentage) {
        return this.price * (1 - percentage);
    },
};
console.log(Reebok.applyDiscount(0.5));
console.log(Reebok.applyDiscountFunctional(0.5));
// console.log(Reebok.applyDiscount(0.5))
// console.log(Reebok.applyDiscountFunctional(0.5))
