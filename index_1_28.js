// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 
function findStrLength(arr) {
    let strLength = [];
    // for (let str of arr) {
    //     strLength.push(str.length); 
    // }
    // return strLength;
    return strLength = arr.map((str) => str.length);
}

const arr1 = ["hello", "world"];
console.log(findStrLength(arr1));
// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)
function findLongestWords(arr) {
    // let arrOfStrings = [];

    // for (let str of arr) {
    //     if (str.length > 5) {
    //         arrOfStrings.push(str);
    //     }
    // }
    // return arrOfStrings;
    return arr.filter(str => str.length > 5);

}

const programmingLanguages = ["JavaScript", "Python", "C++", "Java", "Ruby on Rails"];
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon"];

console.log(findLongestWords(programmingLanguages));
console.log(findLongestWords(colors));
console.log(findLongestWords(fruits));

// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters
function arrOfLongWords(arr) {
    // let newArrOfLongWord = [];
    // for (let str of arr) {
    //     if (str.length > 5) {
    //         newArrOfLongWord.push(str.length);
    //     }
    // }
    // return newArrOfLongWord;
  return arr.filter(str => str.length > 5).map((str) => (str.length))
 }

console.log(arrOfLongWords(programmingLanguages));
console.log(arrOfLongWords(colors));
console.log(arrOfLongWords(fruits));

// 4. Write a function that takes an array of numbers and returns the sum of all even numbers
function sumOfEvenNumbers(arr) {
    // let sum = 0;
    // for (let num of arr) {
    //     if (num % 2 === 0) {
    //         sum += num;
    //     }
    // }
    // return sum;
    return arr.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0)

}

const mixedArray0 = [1, 3, 2, 5, 6, 10, 7];
const mixedArray1 = [5, 20, 3, 15, 100, 11];
const mixedArray2 = [2, 50, 8, 75, 10, 23, 6];
const mixedArray3 = [1, 30, 6, 40, 200, 111, 113];

console.log(sumOfEvenNumbers(mixedArray1));
console.log(sumOfEvenNumbers(mixedArray2));
console.log(sumOfEvenNumbers(mixedArray3));
console.log(sumOfEvenNumbers(mixedArray0));


// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)