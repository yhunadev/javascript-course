// JavaScript Fundamentals - Part 1
// We'll write our code here!

let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log('GUMANA KA');

let firstName = 'JONAS';
console.log(firstName);

let Age = 30;
console.log(Age);
Age = 50;
console.log(Age);

const birthYear = 1991;
console.log(birthYear);

const PI = 3.1415;9;
console.log(PI);

var Job = 'programmer';
Job = 'teacher';
console.log(Job);

Age = 51;

let lastName = 'Doe';

console.log('=== DATA TYPES ===');

Age = 24;
console.log(Age);
console.log(typeof Age);

//string
let username = "mark";
console.log(typeof username);

//boolean
let javaSriptIsFun = true;
console.log(javaSriptIsFun);
console.log(typeof javaSriptIsFun);

let year;
console.log(year);
console.log(typeof year);

//dynamic variable
let dynamicVariable = 23;
console.log(dynamicVariable, typeof dynamicVariable);

dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable);

//basic operators - Math operators

console.log('=== Math Operators ===');
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log('Math Operations');
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

//Match with strings
const firstname = 'Jonas';
const lastname = 'Doe';
console.log(firstname + ' ' + lastname);
console.log('Hello ' + 'World' + '!');
console.log('I am ' + 25 + ' years old');

console.log('=== Assignment Operators ===');
let x = 10 + 5;
console.log('x starts as:', x);

x += 10;
console.log('After x +=10:', x);

x*= 4;
console.log('After x *=4:', x);

x/= 2;
console.log('After x /=2:', x);

console.log("=== Comparison Operators ===");
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number Comparison:");
console.log(25 > 20); 
console.log(15 < 10);
console.log(18>= 18);
console.log(16 <= 15);

//storing comparison result
const isFullAge = ageSarah >= 18;
console.log('Sarah is adult:', isFullAge);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//Your code here:
console.log('Test Data 1');
//1. Calculate BMIs
console.log("Mark's BMI:", massMark / heightMark ** 2);
console.log("John's BMI:", massJohn / (heightJohn * heightJohn));
//2. Create markHigherBMI variable
const markBMI = (massMark / heightMark ** 2);
const johnBMI = (massJohn / (heightJohn * heightJohn));
console.log('Mark has higher BMI:', markBMI > johnBMI);
//3. Log results to console

//////////////////////////////////////////////////////////////////////////////////
//Test Data 2
const massMark2 = 78;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

console.log('Test Data 2');

console.log("Mark's BMI:", massMark2 / heightMark2 * heightMark2);
console.log("John's BMI:", massJohn2 / (heightJohn2 ** 2));

const markBMI2 = (massMark2 / heightMark2 * heightMark2);
const johnBMI2 = (massJohn2 / (heightJohn2 ** 2));
console.log('Mark has higher BMI:', markBMI2 > johnBMI2);

const firstName2 = 'Jonas';
const job = 'teacher';
const birthYear2 = 1991;
const year2 = 2037;

const jonas = "I'm " + firstName2 + ', a ' + (year2 - birthYear2) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName2}, a ${year2 - birthYear2} years old ${job}!`;
console.log(jonasNew);

console.log("I'm ${2037 - 1981} years old`);");
console.log('Math works; ${2+3} equales five');
console.log('Comparisons too: $(5>3}');

console.log(`Just a regular string`);
console.log(`String');
console.log(`String with a ${'variable'}`);
console.log(`String with a ${2 + 3}`);
