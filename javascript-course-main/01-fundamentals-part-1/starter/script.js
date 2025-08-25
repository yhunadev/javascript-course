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

// Create virables for: 
const myName = 'Yhuna';
const myAge = 20;
const myJob = 'student';
const currentYear = 2024;

console.log("Hi I'm", [myName] ,"a", [myAge] ,"year old", [myJob],"!");

// Create a template literal that:
// 1. Calculates your birth year: currentYear - myAge
// 2. Shows a calcutation: 10 * 5
// 3. Includes a comparisone: myAge >= 18
console.log(`Born in ${currentYear - myAge}, 10 * 5 is ${10 * 5}, Adult: ${myAge >= 18}`);

//Taking Decusuions: if / else Statements

const age = 15;
if (age >=18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}   


// Variable Assignment with Decisions
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Real-World Decisiom Making
const score = 85;

if (score >= 60) {
    console.log(`You passed with ${score} points! 🎉`);
    console.log('Congratulations!');
} else {
    console.log(`You failed. Need ${pointsNeeded} more points.`);
}

// Create a grade calculator:

// Use if/else to determine:
// 90+: "Excellent! Grade A"
// 80-89: "Good job! Grade B"
// 70-79: "Not bad! Grade C"
// 60-69: "You passed! Grade D"
// Below 60: "You failed! Study harder"

// Your code here...
const testScore = 75;

if (testScore >= 90) {
    console.log("Excellent! Grade A");
}
else if (testScore >= 80) {
    console.log("Good job! Grade B");
}
else if (testScore >= 70) {
    console.log("Not bad! Grade C");
}
else if (testScore >= 60) {
    console.log("You passed! Grade D");
}
else {
    console.log("You failed! Study harder");
}

//Exercise 2: Age Verification
// Create an age verification system:

// Rules:
// - 18+: "Welcome! You can access all content"
// - 13-17: "Welcome! Restricted content only"
// - Under 13: "Sorry, you're too young"

// Your code here...
const userAge = 30; 
if (userAge >= 18) {
    console.log("Welcome! You can access all content");
}
else if (userAge >= 13) {
    console.log("Welcome! Restricted content only");
}
else {
    console.log("Sorry, you're too young");
}

//Truthy and Falsy Values
// 5 Falsy Values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//Practical Applications
const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
}
else {
    console.log("You should get a job!");
}

//Common Gotcha - Be Careful!
let height = 0;
if (height) {
    console.log("YAY! Height is defined");
}
else {
    console.log("Height is UNDEFINED");
}   

//Better approach for checking if defines:
if (height !== undefined) {
    console.log("Height is defined");
}

// Test these values with Boolean() and if statements:
const values = [0, 1, " ", "hello", undefined, null, NaN, {}, []];

//For each value, log:
// 1. The value itself
// 2. Boolean(value)
// 3. Whether it passes an if statement

// Example for first value:
console.log("Value:", 0);
console.log("Boolean:", Boolean(0));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", 1);
console.log("Boolean:", Boolean(1));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", "");
console.log("Boolean:", Boolean(""));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", "hello");
console.log("Boolean:", Boolean("hello"));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}

console.log("Value:", undefined);
console.log("Boolean:", Boolean(undefined));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", null);
console.log("Boolean:", Boolean(null));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", NaN);
console.log("Boolean:", Boolean(NaN));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", {});
console.log("Boolean:", Boolean({}));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}
console.log("Value:", []);
console.log("Boolean:", Boolean([]));
if (0) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}

// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output