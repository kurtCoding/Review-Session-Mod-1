// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not
const arr1 = [1, 3, 6, 7, 2, 55, 6];
const arr2 = ["Tammy", "Chris", "Darryl"];

function findTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return target;
      }
    }
    return undefined;
}

console.log(findTarget(arr1, 7));
console.log(findTarget(arr2, "Chris"));

// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

const arr3 = [11, 13, 14, 9, 22, 33, 7];

// function isNumBiggerThanFourteen(arr) {
//     for (let num of arr) {
//         if (num > 14) {
//             return num;
//         }
//     }
//     return undefined;
// } 

function isNumBiggerThanFourteen(arr) {
    return arr.find((num) => num > 14);
}

console.log(isNumBiggerThanFourteen(arr1));
console.log(isNumBiggerThanFourteen(arr3));
// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

const strArr = ["Bob", "Bill", "Kurt", "Darryl", "Samantha"];
function longerWord(arr) {
    for (str of arr) {
        if (str.length > 4) {
            return str;
        }
    }
    return undefined;
}


console.log(longerWord(arr2));
console.log(longerWord(strArr));

// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/