// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log('GUMANA KA');

// let firstName = 'JONAS';
// console.log(firstName);

// let Age = 30;
// console.log(Age);
// Age = 50;
// console.log(Age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;9;
// console.log(PI);

// var Job = 'programmer';
// Job = 'teacher';
// console.log(Job);

// Age = 51;

// let lastName = 'Doe';

// console.log('=== DATA TYPES ===');

// Age = 24;
// console.log(Age);
// console.log(typeof Age);

// //string
// let username = "mark";
// console.log(typeof username);

// //boolean
// let javaSriptIsFun = true;
// console.log(javaSriptIsFun);
// console.log(typeof javaSriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// //dynamic variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// //basic operators - Math operators

// console.log('=== Math Operators ===');
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log('Math Operations');
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// //Match with strings
// const firstname = 'Jonas';
// const lastname = 'Doe';
// console.log(firstname + ' ' + lastname);
// console.log('Hello ' + 'World' + '!');
// console.log('I am ' + 25 + ' years old');

// console.log('=== Assignment Operators ===');
// let x = 10 + 5;
// console.log('x starts as:', x);

// x += 10;
// console.log('After x +=10:', x);

// x*= 4;
// console.log('After x *=4:', x);

// x/= 2;
// console.log('After x /=2:', x);

// console.log("=== Comparison Operators ===");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number Comparison:");
// console.log(25 > 20); 
// console.log(15 < 10);
// console.log(18>= 18);
// console.log(16 <= 15);

// //storing comparison result
// const isFullAge = ageSarah >= 18;
// console.log('Sarah is adult:', isFullAge);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// /////////////////////////////////////////////////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// //Your code here:
// console.log('Test Data 1');
// //1. Calculate BMIs
// console.log("Mark's BMI:", massMark / heightMark ** 2);
// console.log("John's BMI:", massJohn / (heightJohn * heightJohn));
// //2. Create markHigherBMI variable
// const markBMI = (massMark / heightMark ** 2);
// const johnBMI = (massJohn / (heightJohn * heightJohn));
// console.log('Mark has higher BMI:', markBMI > johnBMI);
// //3. Log results to console

// //////////////////////////////////////////////////////////////////////////////////
// //Test Data 2
// const massMark2 = 78;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// console.log('Test Data 2');

// console.log("Mark's BMI:", massMark2 / heightMark2 * heightMark2);
// console.log("John's BMI:", massJohn2 / (heightJohn2 ** 2));

// const markBMI2 = (massMark2 / heightMark2 * heightMark2);
// const johnBMI2 = (massJohn2 / (heightJohn2 ** 2));
// console.log('Mark has higher BMI:', markBMI2 > johnBMI2);

// const firstName2 = 'Jonas';
// const job = 'teacher';
// const birthYear2 = 1991;
// const year2 = 2037;

// const jonas = "I'm " + firstName2 + ', a ' + (year2 - birthYear2) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName2}, a ${year2 - birthYear2} years old ${job}!`;
// console.log(jonasNew);

// console.log("I'm ${2037 - 1981} years old`);");
// console.log('Math works; ${2+3} equales five');
// console.log('Comparisons too: $(5>3}');

// console.log(`Just a regular string`);
// console.log(`String');
// console.log(`String with a ${'variable'}`);
// console.log(`String with a ${2 + 3}`);
// const age3 = 15;

// // Create virables for: 
// const myName = 'Yhuna';
// const myAge = 20;
// const myJob = 'student';
// const currentYear = 2024;

// console.log("Hi I'm", [myName] ,"a", [myAge] ,"year old", [myJob],"!");

// // Create a template literal that:
// // 1. Calculates your birth year: currentYear - myAge
// // 2. Shows a calcutation: 10 * 5
// // 3. Includes a comparisone: myAge >= 18
// console.log(`Born in ${currentYear - myAge}, 10 * 5 is ${10 * 5}, Adult: ${myAge >= 18}`);

// //Taking Decusuions: if / else Statements

// const age = 15;
// if (age >=18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }   


// // Variable Assignment with Decisions
// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// // Real-World Decisiom Making
// const score = 85;

// if (score >= 60) {
//     console.log(`You passed with ${score} points! 🎉`);
//     console.log('Congratulations!');
// } else {
//     console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// // Create a grade calculator:

// // Use if/else to determine:
// // 90+: "Excellent! Grade A"
// // 80-89: "Good job! Grade B"
// // 70-79: "Not bad! Grade C"
// // 60-69: "You passed! Grade D"
// // Below 60: "You failed! Study harder"

// // Your code here...
// const testScore = 75;

// if (testScore >= 90) {
//     console.log("Excellent! Grade A");
// }
// else if (testScore >= 80) {
//     console.log("Good job! Grade B");
// }
// else if (testScore >= 70) {
//     console.log("Not bad! Grade C");
// }
// else if (testScore >= 60) {
//     console.log("You passed! Grade D");
// }
// else {
//     console.log("You failed! Study harder");
// }

// //Exercise 2: Age Verification
// // Create an age verification system:

// // Rules:
// // - 18+: "Welcome! You can access all content"
// // - 13-17: "Welcome! Restricted content only"
// // - Under 13: "Sorry, you're too young"

// // Your code here...
// const userAge = 30; 
// if (userAge >= 18) {
//     console.log("Welcome! You can access all content");
// }
// else if (userAge >= 13) {
//     console.log("Welcome! Restricted content only");
// }
// else {
//     console.log("Sorry, you're too young");
// }

// //Truthy and Falsy Values
// // 5 Falsy Values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// //Practical Applications
// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// }
// else {
//     console.log("You should get a job!");
// }

// //Common Gotcha - Be Careful!
// let height = 0;
// if (height) {
//     console.log("YAY! Height is defined");
// }
// else {
//     console.log("Height is UNDEFINED");
// }   

// //Better approach for checking if defines:
// if (height !== undefined) {
//     console.log("Height is defined");
// }

// // Test these values with Boolean() and if statements:
// const values = [0, 1, " ", "hello", undefined, null, NaN, {}, []];

// //For each value, log:
// // 1. The value itself
// // 2. Boolean(value)
// // 3. Whether it passes an if statement

// // Example for first value:
// console.log("Value:", 0);
// console.log("Boolean:", Boolean(0));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", 1);
// console.log("Boolean:", Boolean(1));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", "");
// console.log("Boolean:", Boolean(""));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", "hello");
// console.log("Boolean:", Boolean("hello"));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }

// console.log("Value:", undefined);
// console.log("Boolean:", Boolean(undefined));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", null);
// console.log("Boolean:", Boolean(null));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", NaN);
// console.log("Boolean:", Boolean(NaN));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", {});
// console.log("Boolean:", Boolean({}));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }
// console.log("Value:", []);
// console.log("Boolean:", Boolean([]));
// if (0) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!");
// }

// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// } else {
//   console.log(`Wow! Mark and John have the same BMI (${BMIMark.toFixed(1)})`);
// }

// //ADVANCED CONCPETS AND PRACTICE

// //type conversion (manual)
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// //Automatic Type Coercion

// console.log("I am " + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log("23" / "2");
// console.log('23' * '2');

// //Tricky examples
// let n = '1' + 1; 
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + '5');
// console.log('10' - '4' - '3' - 2 + '5');

// // Exercise 1: Conversion Detective
// // Predict the output, then test:
// console.log('5' + 2); // '52'
// console.log('5' - 2); // 3
// console.log('5' * '2'); // 10

// // Convert these explicitly:
// const userAge = '25';
// const userScore = 95;
// // Your code here...
// const ageAsNumber = Number(userAge);
// const userScoreAsString = String(userScore);

// console.log(ageAsNumber, typeof ageAsNumber); 
// console.log(userScoreAsString, typeof userScoreAsString); 

// // Exercise 2: Fix the Bug

// //Fixed code: (to avoid error on console)
// // const num1 = parseFloat(prompt("First number:"));
// // const num2 = parseFloat(prompt("Second number:"));
// // console.log(`Sum: ${num1 + num2}`);

// ////////////////////////////////////////////////////
// // Equality Operators: == vs. ===

// const age = 18;
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log('18' === 18);
// console.log('18' == 18);
// console.log(18 === 18);

// //Loose Equality (==) The Dangerous One
// // Why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);  
// console.log(null == undefined);

// // Weird cases that cause bugs
// console.log('' == 0);
// console.log("   " == 0);

// //Convert explicitly, then compare strictly
// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //     console.log("Cool! 23 is an amazing number!");
// // }
// // else if (favourite === 7) {
// //     console.log("7 is also a cool number");
// // }
// // else if (favourite === 9) {
// //     console.log("9 is also a cool number");
// // }
// // else {
// //     console.log("Number is not 23 or 7 or 9");
// // }

// // // Not-equal operator
// // if (favourite !== 23) console.log("Why not 23?");

// //Exercise 1: Equality Detective
// // Test these comparisons - predict first, then run:
// console.log(5 === "5"); // Your guess: false
// console.log(5 == "5"); // Your guess: true
// console.log(true === 1); // Your guess: false
// console.log(true == 1); // Your guess: true
// console.log(false === 0); // Your guess: false
// console.log(false == 0); // Your guess: true

// //Exercise 2: Fix the Login System
// // Fixed code: (to avoid error on console)
// // const username = prompt("Username:");
// // const password = prompt("Password:");

// // if (username === "admin" && password === "1234") {
// //   console.log("Welcome admin!");
// // } else {
// //   console.log("Access denied");
// // }

// // Logical Operators (Complex Decision Making)

// // Logicial Operators
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// //Real-World Example
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// //Complex Logic with Parenthesis
// // More complex scenerios
// const age1 = 20;
// const hasPermission = true; 
// const hasExperience = false;
// if ((age1 >= 18 || hasPermission) && hasExperience) {
//     console.log("Approved to drive");
// } else {
//     console.log("Not approved to drive");
// }

// //Exercise 1: Club Entry System
// // Create a club entry system with these rules:
// // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age3 = 45; 
// const hasID = true; 
// const isVIP = true; 

// // Your logic here:
// if ((age3 >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// //Exercise 2: Weather Advisor
// // Create a weather advisor:
// const temperature = 25; // Celsius
// const isRaining = false;
// const isWindy = true;

// // Advice rules:
// // Perfect day: temp 20-30 AND not raining AND not windy
// // Good day: temp 15-35 AND not raining
// // Stay inside: anything else

// // Your code here...
// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day! Enjoy outside 🌞");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day! But maybe not perfect 🌤️");
// } else {
//   console.log("Stay inside 🏠");
// }

// //Ternary Operator (Elegant One-Liners)
// //Basic Ternary Syntax
const age4 = 23;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age4 >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// // Equivalent if/else (more verbose)
// let drink2;
// if (age4 >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

//Ternary in Template Literals (Super Powershell)

// Perfect for template literals!
// console.log(`I like to drink ${age4 >= 18 ? 'wine 🍷' : 'water 💧'}`);

// //When to Use Ternary vs if/else
// // Good for Ternary: simple, two options, decisions
// const score = 75; // or let score = 75;
// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;

// // Better for if/else: complex logic, multiple statements
// if (score >= 90) {
//     console.log("Excellent!");
//     grade = 'A';
//     bonus = true;
// } else if (score >= 80) {
//     console.log("Good job!");
//     grade = 'B';
// }

// Exercise 1: Status Messages
// Convert these if/else to ternary operators:

// 1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }
// Ternary version: ?
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

// 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price = 100;
// }
// Ternary version: ?
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;

//Exercise 2: Smart Responses
// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// Create messages like:
// "Your score: 85 (Passed/Failed)"
// "Weather is sunny (Great for outdoor activities/Stay inside)"
// "Battery: 15% (Low battery warning/Battery OK)"

// Your code here...
const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

console.log(scoreMessage);
console.log(weatherMessage);
console.log(batteryMessage);

//🏆 Final Challenge: Tip Calculator
//Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.**
//Your Tasks:**
//1. **Calculate the tip** depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
//2. **Print a string to the console** containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// **TEST DATA:** Test for bill values 275, 40 and 430
// **HINT:** To calculate 20% of a value, simply multiply it by 20/100 = 0.2  
// **HINT:** Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// **GOOD LUCK! 😀**
// ### Your Solution Space
// ////////////////////////////////////
// // Coding Challenge #4
// const bill = 275; // Test with 275, 40, and 430
// // Step 1: Create the tip calculation using ternary operator
// // Rule: 15% if between 50-300, otherwise 20%
// // Hint: bill >= 50 && bill <= 300
// const tip = // Your ternary operator here

// // Step 2: Create beautiful output with template literal
// console.log(// Your template literal here);

// // Expected outputs:
// // Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// // Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// // Bill 430: "The bill was 430, the tip was 86, and the total value 516"
const bill = 275; // Try with 275, 40, and 430
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
const bill2 = 40; // Try with 275, 40, and 430
const tip2 = (bill2 >= 50 && bill2 <= 300) ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);
const bill3 = 430; // Try with 275, 40, and 430
const tip3 = (bill3 >= 50 && bill3 <= 300) ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);