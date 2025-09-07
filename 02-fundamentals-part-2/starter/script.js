// // // console.log("Part 2 is now working");
 
// // // // Functions - Declarations and Expressions
// // // console.log('=== FUNCTIONS===');
 
// // // function logger () {
// // //     console.log("My name is Yhuna");
// // // }
 
// // // logger ();
// // // logger ();
// // // logger ();
 
// // // function fruitProcessor (apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // //     return juice;
// // // }
 
// // // console.log(fruitProcessor(5, 3));
// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);
// // // console.log(juice1);
 
// // // //Function expressions
// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // }
 
// // // console.log(calcAge (2000));
// // // console.log(calcAge(1991));
 
// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// // //     return introduction
// // // }
 
// // // console.log(introduce ("Yhuna", "Villas", "20"));
 
// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge (birthYear);
// // //     const retirement = 65 - age;
 
// // //     if (retirement > 0) {
// // //         return  `${firstName} retires in ${retirement} years` ;
// // //     } else {
// // //         return `${firstName} had already retired`
// // //     }
// // // }
 
// // // console.log(yearsUntilRetirement (2004, "Yhuna"));
 
// // // //global scope
// // // const globaVar = "I am global";
 
// // // function testScope () {
// // //     const localVar = "I am local";
// // //     console.log(globaVar);
// // //     console.log(localVar);
// // // }
 
// // // testScope();
 
// // // //CODING CHALLENGE ^-^
// // // //The Challenge
// // // // Back to the two gymnastics teams, the Dolphins and the Koalas! There's a new gymnastics discipline.**
// // // // Each team competes 3 times, and the average of the 3 scores is calculated. A team only wins if it has at least **DOUBLE** the average score of the other team. Otherwise, no team wins!
 
// // // // **Your Tasks:**
 
// // // // 1. Create a function `calcAverage` to calculate the average of 3 scores
// // // // 2. Use the function to calculate the average for both teams
// // // // 3. Create a function `checkWinner` that determines the winner
// // // // 4. Use your functions to determine the winner for different test data
 
// // // // **Test Data 1:** Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49  
// // // // **Test Data 2:** Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 
// // // // ### Your Solution Space
 
// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   // Your code here
// // // return (score1 + score2 + score3) / 3;
// // // }
 
// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   // Your code here
// // //   // Remember: team needs DOUBLE the score to win
// // //   // Use template literals for nice output
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return `Dolphins win (${avgDolphins}) vs. ${avgKoalas00}`;
// // //   } else if (avgKoalas >= 2 * avgDolphins);
// // //   return `Koalas win (${avgKoalas}) vs. ${avgDolphins}`;
// // //   } else if {
// // //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // // }
 
// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
 
// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;
 
// // const grade = [85, 92, 78, 96, 88];
// // console.log(grade);
 
// // const friends = ['Nash', 'Lhee', 'Gab', 'Kyle'];
// // console.log(friends);
 
// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);
 
// // const years = new Array (1991, 1984, 2008, 2020);
// // console.log(years);
 
// // // array starts counting at 0
// // console.log(friends [0]);
// // console.log(friends[2]);
 
// // console.log(friends.length);
 
// // //change the value per index
// // friends[1] = "Jang";
// // console.log(friends);
 
// // const firstName = 'Yhuna';
// // const yhuna = [firstName, "Villas", 2025-2004];
// // console.log(yhuna);
 
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };
 
// // const ages = [calcAge(2004), calcAge(2003), calcAge(1991)];
// // console.log(ages);
 
// // // Array Methods - Adding elements
// // const newLength = friends.push("Lhee")
// // console.log(friends);
// // console.log(newLength);
// // const newLength2 = friends.push("Yuan");
// // console.log(friends);
 
// // friends.unshift("Jehu");
// // console.log(friends);
 
// // //removing elements
// // const popped = friends.pop();
// // const popped2 = friends.pop();
// // console.log(popped);
// // console.log(popped2);
// // console.log(friends);
 
// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);
 
// // //find an element
// // // IndexOf
// // console.log(friends.indexOf("Nash"));
// // console.log(friends.indexOf("Lhee"));
 
// // //includes()
// // console.log(friends.includes("Nash"));
// // console.log(friends.includes("Lhee"));
 
// // //Array Iteration - Loops
 
// // for (let i = 0; i < friends.length; i++) {
// //     console.log (friends [i]);
// // }
 
// // friends.forEach(function (friend, index) {
// //     console.log(`Friend ${index + 1}: ${friend}`);
// // });
 
// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;
 
// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2[i];
// // }
 
// // const average = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);
 
// // let passedCount = 0;
// // grades2.forEach((grade) => {
// //     if (grade >= 70) passedCount ++;
// // });
// // console.log( `${passedCount} out of ${grades2.length} students passed`);
 
 
// /////////////////////////////////////////////////////////////////////
// // Coding Challenge #2: Student Grade Manager
// // Time to combine functions and arrays in a real-world application! You'll build a grade management system.
// // ### The Challenge
// // **You're building a grade management system for a teacher.**
// // **Your Tasks:*
// // 1. Create an array of student grades: `[78, 85, 92, 67, 88, 95, 73, 82]`
// // 2. Create a function `calculateAverage(grades)` that returns the average
// // 3. Create a function `findHighestGrade(grades)` that returns the highest grade
// // 4. Create a function `findLowestGrade(grades)` that returns the lowest grade
// // 5. Create a function `countPassing(grades, passingGrade)` that counts students who passed
// // 6. Use all your functions to create a complete grade report
// // **Passing grade is 70.**
// // **Expected output:**
// // - Average: 82.5
// // - Highest: 95
// // - Lowest: 67
// // - Passing students: 6 out of 8
// // ### Your Solution Space
 
// ////////////////////////////////////
// // // Coding Challenge #2 - Student Grade Manager
 
// // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// // // Function to calculate average
// // function calculateAverage(grades) {
// //   // Your code here
// //   // Hint: Sum all grades, divide by length
// // return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
// // }
 
// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //   // Your code here
// //   // Hint: Start with first grade, compare with each subsequent grade
// //   let highest = grades[0];
// //   for (let i = 0; i < grades.length; i++) {
// //    if (grades[i] > highest) [highest = grades[i]]
// //   }
// //   return highest;
// // }
 
// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //   // Your code here
// //   // Hint: Similar to highest, but use < comparison
// //   let lowest = grades[0];
// //   for (let i = 0; i < grades.length; i++) {
// //    if (grades[i] < lowest) [lowest = grades[i]]
// // }
// // return lowest;
// // }
 
// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //   // Your code here
// //   // Hint: Counter pattern - increment when condition is met
// //   let count = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //    if (grades[i] >= passingGrade) {count ++;}
// //   }
// //   return count;
// // }
 
// // // Generate complete report
// // const average = calculateAverage(grades);
// // const highest = findHighestGrade(grades);
// // const lowest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);
 
// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // /////////
// // const jonasArray = [
// //     "Jonas",
// //     "Schmedtmann",
// //     2037 - 1991,
// //     "teacher",
// //     ["Michael", "Peter", "Steven"],
// // ];

// // console.log(jonasArray[0]);
// // console.log(jonasArray[1]);
// // console.log(jonasArray[2]);

// // ///////////////
// // //Objects - creation with object literals syntax
// // console.log("=== OBJECTS ===");

// // // Object literal syntax - curly braces create objects
// // const jonas = {
// //     firstName: "Jonas",
// //     lastName: "Schmedtmann",
// //     age: 2037 - 1991,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"],
// // };
// // console.log(jonas);

// // const jonasArray2 = [
// //     "Jonas",
// //     "Schmedtmann",
// //     2037 - 1991,
// //     "teacher",
// //     ["Michael", "Peter", "Steven"],
// // ];

// // // Object approach (self-documenting)
// // const jonasObject = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   age: 46,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// // };

// // //Dot Notation
// // console.log(jonas.firstName);
// // console.log(jonas.lastName); 
// // console.log(jonas.age); 
// // console.log(jonas.job); 
// // console.log(jonas.friends); 

// // //Bracket Notation
// // console.log(jonas["firstName"]); 
// // console.log(jonas["lastName"]);
// // console.log(jonas["age"]);

// // // Bracket Notation Superpower
// // // Bracket notation with expressions - compute property names!
// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]); // 'Jonas'
// // console.log(jonas["last" + nameKey]); // 'Schmedtmann'

// // //Modifying Existing Properties
// // jonas.job = "programmer";
// // jonas["age"] = 35;
// // console.log(jonas);

// // // Adding New Properties
// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// // jonas.hasDriversLicense = true;
// // console.log(jonas);

// // //Exercise 1: Personal Object
// // // Create your own objects:
// // // 1. Create a 'book' object with title, author, pages, and isRead properties
// // // 2. Create a 'playlist' object with name, creator, songs array, and genre
// // // 3. Access and log different properties using both dot and bracket notation
// // // 4. Add a new property to each object
// // // 5. Modify an existing property in each object

// // // Your code here...

// // const book = {
// //   title: "Twilight",
// //   author: "Stephenie Meyer",
// //   pages: 416,
// //   isRead: true
// // };
// // const playlist = {
// //   name: "Chill Vibes",
// //   creator: "Yhuna Villas",
// //   songs: ["Soft Spot", "Back to being Friends", "Gone Girl"],
// //   genre: "Pop"
// // };

// // // Practice accessing properties
// // console.log(book.title);
// // console.log(playlist["creator"]);       
// // console.log(book["author"]);      
// // console.log(playlist.name);      

// // // Add new properties
// // book.yearPublished = 2005;
// // playlist.duration = "1 hour 30 minutes";

// // // Modify existing properties
// // book.isRead = false;            
// // playlist.genre = "Metal";

// // // Ordered, indexed data - think lists
// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // // Named, descriptive data - think entities
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // //Combining Objects and Arrays
// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], 
// //   address: {
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); 
// // console.log(student.address.city); 

// // //Object Methods
// // const jonas2 = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   // Method - function inside object
// //   calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// //   },
// // };
// // // Call methods using dot notation
// // console.log(jonas2.calcAge(1991)); 
// // console.log(jonas2.calcAge(jonas.birthYear)); 

// // const jonasImproved = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     console.log(this); 
// //     return 2037 - this.birthYear; 
// //   },
// // };
// // console.log(jonasImproved.calcAge()); 

// // // Advanced Storing Calculated Values
// // const jonasAdvanced = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear; 
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// //       this.job
// //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// //   },
// // };

// // console.log(jonasAdvanced.calcAge()); 
// // console.log(jonasAdvanced.age); 
// // console.log(jonasAdvanced.getSummary()); 

// // //Exercise 2: Calculator Object
// // // Create a 'calculator' object:
// // // 1. Properties: num1, num2, operator
// // // 2. Methods: add(), subtract(), multiply(), divide()
// // // 3. Method: calculate() that uses the operator to perform the right operation
// // // 4. Method: getResult() that returns a formatted string
// // // 5. Use 'this' to access the object's own properties

// // const calculator = {
// //   num1: 10,
// //   num2: 5,
// //   operator: "+",

// //   add: function () {
// //     return this.num1 + this.num2;
// //   },

// //   subtract: function () {
// //      return this.num1 - this.num2;
// //   },

// //   multiply: function () {
// //      return this.num1 * this.num2;
// //   },

// //   divide: function () {
// //      return this.num1 / this.num2;
// //   },

// //   calculate: function () {
// //      if (this.operator === "+") return this.add();
// //     if (this.operator === "-") return this.subtract();
// //     if (this.operator === "*") return this.multiply();
// //     if (this.operator === "/") return this.divide();
// //     return "Invalid operator";
// //   },

// //   getResult: function () {
// //    return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;

// //   },
// // };

// // // Test your calculator
// // console.log(calculator.calculate());
// // console.log(calculator.getResult());


// //Coding Challenge
// //Build a user profile system with the following features:**

// //1. **Create a 'user' object with properties:**
//   // - firstName, lastName, birthYear, location, interests (array)
//   // - friends (array of objects with name and status)
//   //- isActive boolean

// //2. **Add methods:**

//   //- `calcAge()`: calculate and store age
//   //- `addFriend(name, status)`: add a friend to friends array
//   // - `getActiveFriends()`: return count of friends with status 'active'
//   // - `getSummary()`: return a complete profile summary
//   // - `toggleStatus()`: switch isActive between true/false

// //3. **The friends array should contain objects like:**
//    //`{name: 'Michael', status: 'active'}`

// //**Expected behavior:**
// // - Calculate age automatically
// // - Track friend relationships
// // - Generate social media style profile summary
// // - Manage user's active status
// // Your Solution Space

// const user = {
//   firstName: "Sundeep",
//   lastName: "Brar",
//   birthYear: 2004,
//   location: "Rizal",
//   interests: ["Gaming", "travel", "law"],
//   friends: [
//     { name: "Yhuna", status: "active" },
//     { name: "Lhee", status: "inactive" },
//     { name: "Zelle", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;

//   },

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//   },

//   getActiveFriends: function () {
//      return this.friends.filter(friend => friend.status === "active").length;
//   },

//   toggleStatus: function () {
//      this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function () {
//     this.calcAge(); // Ensure age is updated
//     return `
//      ${this.firstName} ${this.lastName} (${this.age} years old)  
//      Location: ${this.location}  
//      Interests: ${this.interests.join(", ")}  
//      Friends: ${this.friends.length} (Active: ${this.getActiveFriends()})  
//      Status: ${this.isActive ? "Online" : "Offline"}
//     `;
//   },
// };
// //Test user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());


////////////////////////////////////////////////////////////////////
// Selecting DOM Elements

// // querySelector - works with any CSS selector
// const message = document.querySelector(".message"); 
// const button = document.querySelector("#btn"); 
// const heading = document.querySelector("h1"); 
// const input = document.querySelector(".guess"); 

// console.log(message);
// console.log(button);
// console.log(heading);
// console.log(input);

// // Different selector types
// document.querySelector(".className"); 
// document.querySelector("#idName"); 
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]'); 
// document.querySelector("div p"); 

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); 

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // NodeList (like an array)
// console.log(allParagraphs[0]); // First paragraph
// console.log(allParagraphs.length);

// // Practice selecting elements:
// // 1. Select the element with class 'guess' and log it
// // 2. Select the element with ID 'btn' using both querySelector and getElementById
// // 3. Select all span elements and log the collection
// // 4. Select the first span element and log its textContent
// // 5. Experiment with different CSS selectors
// // Your code here...
// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn");

// const buttonById2 = document.getElementById("btn");
// console.log(buttonQuery === buttonById2); 

// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// const firstSpan = document.querySelector("span");
// console.log(firstSpan.textContent);

// // Modifying Element Content
// // Text Content Methods
// const message2 = document.querySelector(".message");

// // textContent - gets/sets just the text, no HTML
// console.log(message2.textContent); // "Start interacting!"
// message2.textContent = "Hello from JavaScript!";

// // innerHTML - includes HTML tags (more powerful but be careful)
// message2.innerHTML = "<strong>Bold text from JS!</strong>";

// // innerText - respects styling (what user actually sees)
// console.log(message2.innerText);

// // Input elements use .value property, not textContent
// const input2 = document.querySelector(".guess");
// console.log(input2.value); 
// input2.value = "Hello World"; 
// input2.placeholder = "Hi there!";

// Dynamic Style Changes
// Changing element styles with the style property
// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; // Note: camelCase!
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

//Exercise 2: Content and Style Practice
// Practice content and style manipulation:
// 1. Change the h1 text to your name
// 2. Make the button's background color blue and text white
// 3. Set a placeholder text in the input field
// 4. Change the message text to include HTML bold formatting
// 5. Make the score display larger and a different color

// Your code here...
// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// heading.textContent = "Yhuna Villas";

// button.style.backgroundColor = "pink";
// button.style.color = "white";
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "5px";

// input.placeholder = "What is your spirit animal?";

// message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "black";
// scoreValue.style.fontWeight = "bold";

//Click Events
// Event Listeners - User Interaction
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");
// // addEventListener - the modern way to handle events
// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "pink";
// });

// //Event Listener Syntax
// const element = document.querySelector("#btn");
// element.addEventListener("click", function () {
//   console.log("Button was clicked!");
// });

// //CLick Counter Example
// // Event listener with state management
// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// //Input Events - Real-time Typing Response

// // Input events fire every time user types
// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
//   console.log(userText);
// });

// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// // Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     // Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });


// //Exercise 3: Event Listener Practice
// // Practice event listeners:
// // 1. Add a click event to the h1 that changes its color
// // 2. Create an input event that displays character count as user types
// // 3. Add a keydown event that responds to the spacebar
// // 4. Make the button change its text when hovered (mouseover event)
// // 5. Create a double-click event that does something special

// // Your code here...
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// heading.addEventListener("click", function () {
//   heading.style.color = "pink";
// });

// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// button.addEventListener("mouseover", function () {
//   button.textContent = "Mouse Over!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });