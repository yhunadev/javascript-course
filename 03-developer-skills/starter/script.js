// // // // // Remember, we're gonna use strict mode in all scripts now!
// // // // "use strict";

// // // // //Messy code
// // // // const messyExample = function (name, age) {
// // // //   if (age >= 18) {
// // // //     return "Hello " + name + ", you are an adult.";
// // // //   } else {
// // // //     return "Hello " + name + ", you are a minor.";
// // // //   }
// // // // };

// // // // console.log("Current messy code example:", messyExample("John", 25));
// // // // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // // // // Extension Installation Test
// // // // function testExtensions() {
// // // //   const extensionTests = [
// // // //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// // // //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// // // //     {
// // // //       name: "Auto Rename Tag",
// // // //       status: "installed",
// // // //       purpose: "HTML efficiency",
// // // //     },
// // // //   ];

// // // //   return extensionTests;
// // // // }

// // // // const extensionStatus = testExtensions();
// // // // console.log("Extension installation status:", extensionStatus);

// // // // // Prettier Configuration Test
// // // // const prettierTest = {
// // // //   firstName: "Sarah",
// // // //   lastName: "Johnson",
// // // //   skills: ["JavaScript", "React", "Node.js"],
// // // //   isActive: true,
// // // // };

// // // // const messyFunction = function (x, y, z) {
// // // //   if (x > 0 && y > 0) {
// // // //     return x + y + z;
// // // //   } else {
// // // //     return 0;
// // // //   }
// // // // };

// // // // const messyArrow = (items) => {
// // // //   return items.map((item) => {
// // // //     return item.toUpperCase();
// // // //   });
// // // // };

// // // // console.log(
// // // //   "Before Prettier formatting - this code works but looks unprofessional"
// // // // );

// // // // //Practice Prettier Formatting
// // // // //Exercise Code
// // // // const studentTest = {
// // // //   firstName: "Yhuna",
// // // //   skills: ["HTML", "CSS", "JavaScript"],
// // // //   experience: "beginner",
// // // //   goals: ["become-developer", "build-projects"],
// // // // };

// // // // const testFunc = function (data) {
// // // //   for (let i = 0; i < data.length; i++) console.log(data[i]);
// // // // };

// // // // // Live Server Testing

// // // // // Test 1: Basic live reload
// // // // let liveServerTest = "Initial message - change #2";
// // // // console.log("Live Server test:", liveServerTest);

// // // // // Test 2: Time-based updates
// // // // const timeStamp = new Date().toLocaleTimeString();
// // // // const updateCount = 1;

// // // // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // // // Test 3: Function testing
// // // // function demonstrateLiveReload() {
// // // //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// // // //     Math.floor(Math.random() * 5)
// // // //   ];
// // // //   const message = `Live Server rocks! Random color: ${randomColor}`;

// // // //   console.log(message);
// // // //   return message;
// // // // }

// // // // demonstrateLiveReload();

// // // // // Student Exercise: Add this function and test live reload
// // // // function showCurrentTime() {
// // // //   const now = new Date().toLocaleTimeString();
// // // //   console.log("Current time:", now);
// // // //   return now;
// // // // }

// // // // showCurrentTime();

// // // // // Code Snippets Testing
// // // // function testSnippets() {
// // // //   console.log("Testing snippet functionality - cl + Tab!");
// // // //   return "Snippets working perfectly!";
// // // // }

// // // // testSnippets();

// // // // const snippetTest = (message) => {
// // // //   console.log(`Arrow function from snippet: ${message}`);
// // // //   return message;
// // // // };

// // // // snippetTest("Snippets save so much typing time!");

// // // // console.log("Professional Development Environment Complete!");
// // // // console.log("Prettier: Automatic code formatting");
// // // // console.log("Live Server: Automatic browser refresh");
// // // // console.log("Snippets: Fast code generation");
// // // // console.log("Extensions: Enhanced productivity");
// // // // console.log("Ready for professional JavaScript development!");

// // // // //Calculate time savings
// // // // function calculateTimeSavings() {
// // // //   const dailyConsoleLogs = 50;
// // // //   const keystrokesSavedPerLog = 11;
// // // //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// // // //   const monthlySavings = dailySavings * 22;

// // // //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// // // //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// // // //   return { daily: dailySavings, monthly: monthlySavings };
// // // // }

// // // // calculateTimeSavings();

// // // 'use strict';

// // // console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');
// // // console.log(
// // //   'Key insight: Professional developers think systematically, not just code'
// // // );
// // // console.log('Goal: Transform from beginner to professional problem-solver');

// // // console.log('4-Step Framework: Understand → Divide → Research → Implement');

// // // // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

// // // /*
// // // PROBLEM STATEMENT:
// // // Given an array of temperatures from one day, calculate the temperature amplitude.
// // // Keep in mind that sometimes there might be a sensor error.

// // // Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// // // STEP 1: UNDERSTANDING THE PROBLEM
// // // - Temperature amplitude = difference between highest and lowest temperature
// // // - Sensor errors = 'error' strings that should be ignored
// // // - Return a number representing amplitude (max - min)

// // // STEP 2: SUB-PROBLEMS
// // // 1. How to ignore errors? (Skip non-number values)
// // // 2. Find max value in temperature array
// // // 3. Find min value in temperature array
// // // 4. Subtract min from max and return result
// // // */

// // // const calcTempAmplitude = function (temps) {
// // //   let max = temps[0];
// // //   let min = temps[0];

// // //   for (let i = 0; i < temps.length; i++) {
// // //     const curTemp = temps[i];
// // //     if (typeof curTemp !== 'number') continue;

// // //     if (curTemp > max) max = curTemp;
// // //     if (curTemp < min) min = curTemp;
// // //   }

// // //   console.log(max, min);
// // //   return max - min;
// // // };

// // // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// // // const amplitude = calcTempAmplitude(temperatures);
// // // console.log(amplitude);

// // // // EXTENDED PROBLEM: Two Arrays

// // // /*
// // // PROBLEM 2: Function should handle TWO arrays of temperatures

// // // STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
// // // STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm
// // // STEP 3: RESEARCH - array1.concat(array2) method
// // // STEP 4: IMPLEMENT - Combine and reuse existing code
// // // */

// // // const calcTempAmplitudeNew = function (t1, t2) {
// // //   const temps = t1.concat(t2);
// // //   console.log(temps);

// // //   let max = temps[0];
// // //   let min = temps[0];

// // //   for (let i = 0; i < temps.length; i++) {
// // //     const curTemp = temps[i];
// // //     if (typeof curTemp !== 'number') continue;

// // //     if (curTemp > max) max = curTemp;
// // //     if (curTemp < min) min = curTemp;
// // //   }

// // //   console.log(max, min);
// // //   return max - min;
// // // };

// // // const array1 = [3, 5, 1];
// // // const array2 = [9, 0, 5];
// // // const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// // // console.log(amplitudeNew);

// // // console.log(
// // //   'Problem-solving framework applied successfully to extended challenge!'
// // // );

// // // console.log('Framework mastered - ready for independent problem solving!');

// // //Array Limitation Problem

// // //The Array Problem
// // const jonasArray = [
// //   'Jonas',
// //   'Schmedtmann',
// //   2037 - 1991,
// //   'teacher',
// //   ['Michael', 'Peter', 'Steven'],
// // ];

// // console.log(jonasArray[0]);
// // console.log(jonasArray[1]);
// // console.log(jonasArray[2]);

// console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');
// console.log(
//   'Goal: Master research and debugging like a professional developer'
// );
// console.log(
//   'Strategic research builds lasting knowledge, not just quick fixes'
// );

// //Your Turn: Practice Professional Research
// //Exercise: Finding Maximum Value in Array**
// // Your Tasks:

// // 1. Use Google to research different methods
// // 2. Implement 3 different approaches
// // 3. Test each method with sample data
// // 4. Compare the approaches

// // **Research Strategy:**

// // - Start broad: "javascript maximum value array"
// // - Get specific: "javascript Math.max array spread operator"
// // - Check official docs: "Math.max MDN javascript"

// // **Expected Result:** Three working methods that find the maximum value
// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// RESEARCH CHALLENGE: Find Maximum Value in Array
// Search progression:
// 1. "javascript maximum value array"
// 2. "javascript Math.max array"
// 3. "javascript Math.max spread operator array"
// 4. "Math.max MDN javascript"
// */

// function demonstrateArrayMax(numbers) {
//   // Method 1 - Using Math.max with spread operator (from research)
//   const method1 = Math.max(...numbers);

//   // Method 2 - Using for loop (traditional approach)
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   // Method 3 - Using reduce method (functional approach)
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   // Method 1 - Most common Stack Overflow solution
//   const method1 = str.split('').reverse().join('');

//   // Method 2 - Manual loop approach (educational)
//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // Test our Stack Overflow research results
// const reverseResults = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults);

// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   // Method 1 - Most common Stack Overflow solution
//   const method1 = str.split('').reverse().join('');

//   // Method 2 - Manual loop approach (educational)
//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // Test our Stack Overflow research results
// const reverseResults2 = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults2);

// // MDN DOCUMENTATION MASTERY

// /*
// MDN RESEARCH: Array.concat()
// - Purpose: Merge two or more arrays
// - Syntax: array1.concat(array2, array3, ..., arrayN)
// - Returns: New array (doesn't modify originals)
// - Key insight: Can concatenate multiple arrays at once!
// */

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   // Verify concat doesn't modify original arrays
//   console.log('Original array1 unchanged:', array1);

//   return { simple, multiple };
// }

// const concatResults = demonstrateConcat();
// console.log('MDN documentation applied:', concatResults);

// // SYSTEMATIC DEBUGGING METHODOLOGY

// /*
// 5-STEP DEBUGGING PROCESS:
// 1. IDENTIFY - Recognize bug exists
// 2. ISOLATE - Locate where bug happens
// 3. INVESTIGATE - Understand why bug occurs
// 4. FIX - Implement correction
// 5. PREVENT - Add safeguards against similar bugs
// */

// // Buggy function for debugging practice
// function calculateAverageScore(scores) {
//   let total; // BUG: Should be initialized to 0

//   for (let i = 0; i <= scores.length; i++) {
//     // BUG: Should be < not <=
//     total += scores[i];
//   }

//   return total / (scores.length + 1);
// }

// // Test the buggy function
// const testScores = [85, 92, 78, 96, 88];
// const buggyResult = calculateAverageScore(testScores);
// console.log('Buggy result:', buggyResult);

// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object') {
//     console.warn('Warning: Expected object, got', typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger; // This will pause execution in browser dev tools

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === 'number') {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log('Final results:', { sum, count, average });

//   return average;
// }

// // Test debugging function - open dev tools to see debugger in action
// const mixedNumbers = [10, 20, 'error', 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log('Debug session result:', debugResult);

// // SYSTEMATIC BUG FIXING APPLICATION

// /*
// DEBUGGING PROCESS APPLICATION:

// STEP 1: IDENTIFY
// - Bug: calculateAverageScore returns NaN or wrong value
// - Expected: Average of [85, 92, 78, 96, 88] should be 87.8
// - Actual: Getting NaN or incorrect value

// STEP 2: ISOLATE
// - Bug location: Inside calculateAverageScore function
// - Specific issues: initialization, loop condition, division

// STEP 3: INVESTIGATE
// - total starts as undefined (undefined + number = NaN)
// - Loop goes one iteration too far (accesses undefined)
// - Division uses wrong denominator

// STEP 4: FIX
// - Initialize total to 0
// - Change <= to < in loop condition
// - Remove + 1 from division

// STEP 5: PREVENT
// - Add input validation
// - Add type checking for array elements
// */

// function calculateAverageScoreFixed(scores) {
//   // STEP 5 - PREVENT: Add input validation
//   if (!Array.isArray(scores) || scores.length === 0) {
//     console.error('Invalid input: scores must be a non-empty array');
//     return 0;
//   }

//   // STEP 4 - FIX: Proper initialization
//   let total = 0; // FIXED: Initialize to 0, not undefined

//   // STEP 4 - FIX: Correct loop condition
//   for (let i = 0; i < scores.length; i++) {
//     // FIXED: < instead of <=
//     // STEP 5 - PREVENT: Add type checking
//     if (typeof scores[i] === 'number') {
//       total += scores[i];
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
//   }

//   // STEP 4 - FIX: Correct division
//   return total / scores.length; // FIXED: Remove + 1
// }

// // Test the fixed function
// const fixedResult = calculateAverageScoreFixed(testScores);
// console.log('Fixed result:', fixedResult);

// // Comprehensive Testing
// // Test your debugging skills with various scenarios:

// // Comprehensive debugging verification
// console.group('Debugging Verification Tests');

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log('Normal case result:', normalResult);

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, 'invalid', 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log('Mixed data result:', mixedResult);

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed('not an array');
// console.log('Error case result:', errorResult);

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log('Empty array result:', emptyResult);

// console.groupEnd();

// console.log('Systematic debugging process successfully applied!');
// console.log(
//   'All bugs identified, isolated, investigated, fixed, and prevented'
// );
