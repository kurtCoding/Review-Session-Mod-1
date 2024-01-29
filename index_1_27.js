 // 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -

// YOUR CODE HERE
function countOccurrences(arr) {
    const objOfKeys = {};
    // let eleCount = 0;

    for (let ele of arr) {
       if (!objOfKeys[ele]) {
            objOfKeys[ele] = 1;
        } else {
            objOfKeys[ele]++;
        }
    }
    return objOfKeys;
}

const arr1 = ["apple", "orange", "apple", "banana", "apple", "orange"];
console.log(countOccurrences(arr1));
// Example:
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    occupation: "Engineer"
  };
  
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver"
  };

// YOUR CODE HERE
function findPropertyValue(obj, key) {
    return (obj[key]) ? obj[key] : `${key} doesn't exist!`;
}

console.log(findPropertyValue(car, "make"));
console.log(findPropertyValue(person1, "occupation"));

// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};


// YOUR CODE HERE
function updateStreet(obj, key, input) {
    return obj[key] = input;
}
console.log(updateStreet(person, "street", "Brooklyn"));
// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

const companyOrganizationalStructure = {
    companyName: "TechCorp",
    CEO: {
      name: "John CEO",
      office: {
        location: "Floor 10, Building A",
        employees: {
          executiveAssistant: {
            name: "Alice Executive",
            desk: "A101",
          },
        },
      },
    },
    departments: {
      development: {
        head: {
          name: "Bob Head",
          office: {
            location: "Floor 8, Building B",
            employees: {
              softwareEngineer1: {
                name: "Charlie Engineer",
                desk: "B801",
              },
              softwareEngineer2: {
                name: "David Coder",
                desk: "B802",
              },
            },
          },
        },
      },
      marketing: {
        head: {
          name: "Eva Marketer",
          office: {
            location: "Floor 6, Building C",
            employees: {
              marketingSpecialist1: {
                name: "Frank Specialist",
                desk: "C601",
              },
              marketingSpecialist2: {
                name: "Grace Promoter",
                desk: "C602",
              },
            },
          },
        },
      },
    },
  };
  
  // YOUR CODE HERE
  const secondEngineerDesk = companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk;
  const marketingLocation = companyOrganizationalStructure.departments.marketing.head.office.location;
  const exeAssistant = companyOrganizationalStructure.CEO.office.employees.executiveAssistant.name;
   companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer3 = {name: "Kurt"};
  const newKey = companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer3;
  companyOrganizationalStructure.departments.marketing.head = "Johann Marketer";
  const newHeadMarketing = companyOrganizationalStructure.departments.marketing.head; 

  console.log(secondEngineerDesk);
  console.log(marketingLocation);
  console.log(exeAssistant);
  console.log(newKey);
  console.log(newHeadMarketing);
  // ------------------------------------------------------------------------
  
  // 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!
  
  const key = "name";
  const value = "Roberto Robertson"

      newObj = {
        [key]: value
    }
  
  
  console.log(newObj);
  // 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS

  let persona = {
    name: "kurt",
    age: 33,
    hair: "long"
  }
  
  // YOUR CODE HERE
  function logObjVals(obj) {
    console.log(obj, "line 171")
  }

  console.log(logObjVals(persona));
  // ------------------------------------------------------------------------
  
  // 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop
  
  // YOUR CODE HERE
  function checkObjValue(obj1, obj2) {
    
  }
  // ------------------------------------------------------------------------