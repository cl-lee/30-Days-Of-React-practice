console.log('Welcome to 30DaysOfJavaScript')

// primitive data type
let testing = "test";
console.log("Test 1: " + testing);
console.log(testing[1]);

// this won't work. The "e" is not replaced with the value 1, because "testing" is a string. A string is a type of primitive data, and primitive data are immutable (i.e. can't be modified).
testing[1] = 1;
console.log("Test 2: " + testing);

// non-primitive data type
let testArray = ["T","E","S","T"];
console.log(testArray);

// "E" is replaced with "I". Unlike primitive data type, non-primitive data type such as an array are mutable, therefore it's value(s) can be changed
testArray[1] = "I";
console.log(testArray);

// array[0] = first element
// let length of array = n;
// array[n-1] = last element

const fruits = ["Apple", "Banana"];

console.log(fruits);

fruits[0] = "Orange";
console.log(fruits);

// Other ways of constructing new arrays
const newArray = Array();

console.log(newArray);

// or

let newArray2 = new Array();
console.log(newArray2);

// Array can have items of different data types

const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types
console.log(arr)
// last item in array:
console.log(arr[arr.length-1]);

// Create array by splitting a string
const splitTest = testing.split("");
console.log(splitTest);

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// ---METHODS TO MANIPULATE ARRAY---
// fill method (replaces values in an array within a range of indices)
const eightXValues = Array(8);
eightXValues.fill("X");
console.log(eightXValues);

// .concat (concatenates two arrays)
const firstPart = "Nether";
const secondPart = "lands";

const concatenated = firstPart.concat(secondPart);
console.log(concatenated);

// .length (get length of array)

// indexOf (Check if item exists. get index of item if exists, otherwise return -1)
// example:
const cars = ["Mercedes", "Rolls-Royce", "BMW", "Audi"];
let indexOfCar = cars.indexOf("Mercedes");

if (indexOfCar === -1) {
    console.log("This car does not exist");
} else {
    console.log("This car exists")
}

// .lastIndexOf (gives last index of specified item, returns -1 if item does not exist)

// .includes(check if item exists in array, returns boolean value)

