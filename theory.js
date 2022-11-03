// 1. boolean
var b = true;
var witcher = false;
// 2. arrays
var c = [1, 2];
var sideCharacters = [8, 10];
var charactersCount = [5, 6, sideCharacters, [8]];
[5, 6, [8, 10], [8]];

// spread
var charactersCount2 = [5, 6, ...sideCharacters, ...[8]];
[5, 6, 8, 10, 8];
// numbers
var z = 1;

var myArray = [1, 2, c];
console.log(myArray[0]); // print the first item in myArray
console.log(myArray[1]); // print the second item in myArray
console.log(myArray[2]); // print the third item in myArray
// Object
var ellen = { type: "cat", age: 5, boyfriend: null };

// destructuring
const { type, age } = ellen;
console.log(type);

ellen.type;
// cat
ellen.age;
// 5
// undefined
var u = undefined;
// null
var n = null;
// string
var c = "Holiday";
// function
function printc() {
    console.log(c);
}
