let numArray: number[] = [1, 2, 3, 4, 5, 6];

let numArray2: Array<number> = [12, 3, 4, 5, 6, 67]; // 2 different ways of declaring an array

//Having an array of types
type Person = {
  name: string;
  age: number;
};

let personsArray: Person[] = [{ name: "John", age: 21 }];
personsArray.push({
  name: "Shawn",
  age: 24,
});

//2D array
let TwoDArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
