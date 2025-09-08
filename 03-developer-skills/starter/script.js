// // // Remember, we're gonna use strict mode in all scripts now!
// // "use strict";

// // //Messy code
// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult.";
// //   } else {
// //     return "Hello " + name + ", you are a minor.";
// //   }
// // };

// // console.log("Current messy code example:", messyExample("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // // Extension Installation Test
// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);

// // // Prettier Configuration Test
// // const prettierTest = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   skills: ["JavaScript", "React", "Node.js"],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = (items) => {
// //   return items.map((item) => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   "Before Prettier formatting - this code works but looks unprofessional"
// // );

// // //Practice Prettier Formatting
// // //Exercise Code
// // const studentTest = {
// //   firstName: "Yhuna",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   experience: "beginner",
// //   goals: ["become-developer", "build-projects"],
// // };

// // const testFunc = function (data) {
// //   for (let i = 0; i < data.length; i++) console.log(data[i]);
// // };

// // // Live Server Testing

// // // Test 1: Basic live reload
// // let liveServerTest = "Initial message - change #2";
// // console.log("Live Server test:", liveServerTest);

// // // Test 2: Time-based updates
// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // Test 3: Function testing
// // function demonstrateLiveReload() {
// //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // // Student Exercise: Add this function and test live reload
// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log("Current time:", now);
// //   return now;
// // }

// // showCurrentTime();

// // // Code Snippets Testing
// // function testSnippets() {
// //   console.log("Testing snippet functionality - cl + Tab!");
// //   return "Snippets working perfectly!";
// // }

// // testSnippets();

// // const snippetTest = (message) => {
// //   console.log(`Arrow function from snippet: ${message}`);
// //   return message;
// // };

// // snippetTest("Snippets save so much typing time!");

// // console.log("Professional Development Environment Complete!");
// // console.log("Prettier: Automatic code formatting");
// // console.log("Live Server: Automatic browser refresh");
// // console.log("Snippets: Fast code generation");
// // console.log("Extensions: Enhanced productivity");
// // console.log("Ready for professional JavaScript development!");

// // //Calculate time savings
// // function calculateTimeSavings() {
// //   const dailyConsoleLogs = 50;
// //   const keystrokesSavedPerLog = 11;
// //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// //   const monthlySavings = dailySavings * 22;

// //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// //   return { daily: dailySavings, monthly: monthlySavings };
// // }

// // calculateTimeSavings();

// 'use strict';

// console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');
// console.log(
//   'Key insight: Professional developers think systematically, not just code'
// );
// console.log('Goal: Transform from beginner to professional problem-solver');

// console.log('4-Step Framework: Understand → Divide → Research → Implement');

// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

// /*
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Temperature amplitude = difference between highest and lowest temperature
// - Sensor errors = 'error' strings that should be ignored
// - Return a number representing amplitude (max - min)

// STEP 2: SUB-PROBLEMS
// 1. How to ignore errors? (Skip non-number values)
// 2. Find max value in temperature array
// 3. Find min value in temperature array
// 4. Subtract min from max and return result
// */

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // EXTENDED PROBLEM: Two Arrays

// /*
// PROBLEM 2: Function should handle TWO arrays of temperatures

// STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
// STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm
// STEP 3: RESEARCH - array1.concat(array2) method
// STEP 4: IMPLEMENT - Combine and reuse existing code
// */

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log(amplitudeNew);

// console.log(
//   'Problem-solving framework applied successfully to extended challenge!'
// );

// console.log('Framework mastered - ready for independent problem solving!');

//Array Limitation Problem

//The Array Problem
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

console.log(jonasArray[0]);
console.log(jonasArray[1]);
console.log(jonasArray[2]);

//Basic Object Creation
//Objects - Creation with Object Literal Syntax
const jonas = {
  firstName: 'Jonas', // property: string value
  lastName: 'Schmedtmann', // property: string value
  age: 2037 - 1991, // property: calculated value
  job: 'teacher', // property: string value
  friends: ['Michael', 'Peter', 'Steven'], // property: array value
};
console.log(jonas);

//The Same Data - Arrays vs Objects
//Array approach (hard to understand):
const jonasArray2 = [
  'Jonas',
  'Schmedtmann',
  46,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

//Object approach (self-documenting):
const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 46,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

//Property Access Methods
//Dor Notation (Most Common)

//Clean and readable
console.log(jonas.firstName);
console.log(jonas.lastName);
console.log(jonas.age);
console.log(jonas.job);
console.log(jonas.friends);

//Bracket Notation (More Flexible)
// Bracket notation - uses strings
console.log(jonas['firstName']);
console.log(jonas['lastName']);
console.log(jonas['age']);

//Bracket Notation's Superpower
//Bracket notation with expressions - compute property names!
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Both notations work for modification
jonas.job = 'programmer';
jonas['age'] = 35;
console.log(jonas);

//Adding New Properties
// Objects can grow - add properties after creation
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
jonas.hasDriversLicense = true;
console.log(jonas);

//Exercise 1: Personal Object
// Create your own objects:
// 1. Create a 'book' object with title, author, pages, and isRead properties
// 2. Create a 'playlist' object with name, creator, songs array, and genre
// 3. Access and log different properties using both dot and bracket notation
// 4. Add a new property to each object
// 5. Modify an existing property in each object

// Your code here...

const book = {
  title: 'Twilight',
  author: 'Stephenie Meyer',
  pages: 498,
  isRead: false,
};

const playlist = {
  name: 'Chill Vibes',
  creator: 'Yhuna',
  songs: ['Ocean Eyes', 'Riptide', 'Let Her Go'],
  genre: 'Indie/Pop',
};

console.log(book.title);
console.log(playlist['creator']);
console.log(book.pages);
console.log(playlist.name);
console.log(book.author);

//Objects vs Arrays: When to Use What
//Ordered, indexed data - think lists
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ['apples', 'bananas', 'milk', 'bread'];
const testScores = [85, 92, 78, 96];

//Array characteristics

//Named, descriptive data
const person = {
  name: 'Jonas',
  age: 46,
  occupation: 'teacher',
};

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'blue',
};

//Combining Objects and Arrays
const student = {
  name: 'Sarah',
  grades: [85, 92, 78],
  address: {
    street: '123 Main St',
    city: 'New York',
  },
};

console.log(student.grades[0]);
console.log(student.address.city);

//Object Methods
const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};
console.log(jonas2.calcAge(1991));
console.log(jonas2.calcAge(jonas.birthYear));

//"This" Keyword - Accessing Own Properties
const jonas2Improved = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(jonas2Improved.calcAge());

//Advanced: Storing Calculated Values
const jonasAdvanced = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(jonasAdvanced.calcAge());
console.log(jonasAdvanced.age);
console.log(jonasAdvanced.getSummary());

//Exercise 2: Calculator Object
// Create a 'calculator' object:
// 1. Properties: num1, num2, operator
// 2. Methods: add(), subtract(), multiply(), divide()
// 3. Method: calculate() that uses the operator to perform the right operation
// 4. Method: getResult() that returns a formatted string
// 5. Use 'this' to access the object's own properties

const calculator = {
  num1: 10,
  num2: 5,
  operator: '+',

  add: function () {
    return this.num1 + this.num2;
  },

  subtract: function () {
    return this.num1 - this.num2;
  },

  multiply: function () {
    return this.num1 * this.num2;
  },

  divide: function () {
    return this.num2 !== 0 ? this.num1 / this.num2 : 'Error: Division by zero';
  },

  calculate: function () {
    if (this.operator === '+') return this.add();
    if (this.operator === '-') return this.subtract();
    if (this.operator === '*') return this.multiply();
    if (this.operator === '/') return this.divide();
    return 'Invalid operator';
  },

  getResult: function () {
    return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
  },
};

// Test your calculator
console.log(calculator.calculate());
console.log(calculator.getResult());

// Coding Challenge #3 - User Profile System
const user = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  birthYear: 1995,
  location: 'New York',
  interests: ['photography', 'travel', 'coding'],
  friends: [
    { name: 'Michael', status: 'active' },
    { name: 'Emma', status: 'inactive' },
    { name: 'David', status: 'active' },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = 'active') {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === 'active').length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    this.calcAge(); // Ensure age is calculated
    const totalFriends = this.friends.length;
    const activeFriends = this.getActiveFriends();
    const statusText = this.isActive ? 'Online' : 'Offline';

    return `
  ${this.firstName} ${this.lastName}, ${this.age}
 Location: ${this.location}
 Status: ${statusText}
 Friends: ${activeFriends} active / ${totalFriends} total
Interests: ${this.interests.join(', ')}
    `;
  },
};

// Test your user profile system
console.log(user.getSummary());

user.addFriend('Alex', 'active');
user.toggleStatus();

console.log(`\nAfter updates:`);
console.log(user.getSummary());
