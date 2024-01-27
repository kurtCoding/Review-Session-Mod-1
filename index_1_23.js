// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.
// function capitalizeWord(str) {
//     str.split("");
//     for (let i = 0; i < str.length; i++) {
//         str[i].toUpperCase;        
//     }
//     return str.join("");
// }
// console.log(capitalizeWord("big"));
// console.log(capitalizeWord(`time and time again`));
// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 

function formatGreeting(obj) {     
       return `Hello ${obj.firstName} ${obj.lastName}, have a great day at your job as a ${obj.occupation}`; 
}


const john = {
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  const rebecca = {
    firstName: "Rebecca",
    lastName: "Cohen",
    occupation: "Teacher"
  }
  
  console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")
  
  console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")
  
  // 3.----------------------------------
  // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  
function formattedString(arr, targetId) {
    for (let i = 0; i < arr.length; i++) {
    if (targetId) {
        return `Hello ${arr[i].firstName} ${arr[i].lastName}, id '${targetId}', have a great day at your job as a ${arr[i].occupation}`
    }
  }
}

  /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }*/
  const arr1 = [ 
    {
    id: "Tfjso_4M",
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  },
  {
    id: "A1b2C3d4",
    firstName: "Alice",
    lastName: "Smith",
    occupation: "Software Engineer"
  },
  {
    id: "XyZ_123",
    firstName: "Bob",
    lastName: "Johnson",
    occupation: "Graphic Designer"
  },
  {
    id: "987abc",
    firstName: "Emma",
    lastName: "Williams",
    occupation: "Doctor"
  },
  {
    id: "qwerty123",
    firstName: "Ryan",
    lastName: "Miller",
    occupation: "Teacher"
  },
  {
    id: "z1y2x3",
    firstName: "Lily",
    lastName: "Anderson",
    occupation: "Architect"
  },
  {
    id: "123xyz",
    firstName: "James",
    lastName: "Brown",
    occupation: "Chef"
  },
  {
    id: "AbCdEfG",
    firstName: "Sophie",
    lastName: "Roberts",
    occupation: "Marketing Specialist"
  },
  {
    id: "xyz123",
    firstName: "Daniel",
    lastName: "Clark",
    occupation: "Photographer"
  },
  {
    id: "789abc",
    firstName: "Grace",
    lastName: "Davis",
    occupation: "Financial Analyst"
  } ]
  
  console.log(formattedString(arr1, "XyZ_123"));