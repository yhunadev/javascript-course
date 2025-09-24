'use strict';

// // // // const obj = {
// // // //     name: "Object",
// // // //     regularMethod: function () {
// // // //         console.log('Regular:', this.name);
// // // //     },
// // // //     arrowMethod: () => {
// // // //         console.log('Arrow:', this.name);
// // // //     },
// // // // };

// // // // obj.regularMethod();
// // // // obj.arrowMethod();

// // // // const quiz = {
// // // //   name: 'Quiz Object',
// // // //   regularMethod() {
// // // //     console.log('Regular:', this.name);
// // // //   },
// // // //   arrowMethod: () => {
// // // //     console.log('Arrow:', this.name);
// // // //   },
// // // // };

// // // // quiz.regularMethod(); // Predict: ?
// // // // quiz.arrowMethod(); // Predict: ?

// // // //using old ways
// // // const timer = {
// // //   name: 'Timer',
// // //   start: function () {
// // //     console.log(`${this.name} starting...`);

// // //     const self = this;

// // //     setTimeout(function () {
// // //    console.log(`${self.name} finished`);
// // //     }, 1000);
// // //     },
// // // // Using arrow function
// // //     startModern: function () {
// // //         console.log(`${this.name} starting modern...`);

// // //     setTimeout(() => {
// // //       console.log(`${this.name} finished modern`);
// // //     },);
// // //     }
// // //   };

// // //   timer.start();
// // //   timer.startModern();

// // const user = {
// //   name: 'Alice',
// //   hobbies: ['reading', 'coding', 'gaming'],

// //   // BROKEN: arrow function loses `this`
// //   printHobbiesBad: () => {
// //     this.hobbies.forEach(hobby => {
// //       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
// //     });
// //   },

// //   // FIXED: regular function preserves `this`
// //   printHobbiesGood() {
// //     this.hobbies.forEach(hobby => {
// //       console.log(`${this.name} likes ${hobby}`); // this.name works!
// //     });
// //   },
// // };

// // user.printHobbiesBad(); // Fails - this.name is undefined
// // user.printHobbiesGood(); // Works - shows all hobbies

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('Hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// // Primitive
// let age = 30;

// //we copy the primitive, making independent copy
// let oldAge = age;

// age = 31;

// console.log('age', 30);

// console.log('oldAge', oldAge);

// //OBJECT HEAP
// //objects are stored in heap, variables hold references
// const me = { name: 'Jonas', age: 30};

// const friend = me;

// friend.age = 27;

// console.log('me', me);
// console.log('Friend', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };

const updatedPerson = changeAge(originalPerson, 30);

console.log('Same object?:', originalPerson === updatedPerson);

//Shallow Copying
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };
shallowCopy.name = 'Bob';

shallowCopy.hobbies.push('gaming');

console.log('Original hobbies:', original.hobbies);
console.log('Shallow hobbies:', shallowCopy.hobbies);

//Deep Copy

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('original address:', deepOriginal.address);

console.log('copy address:', deepCopy.address);

console.log('original hobbies:', deepOriginal.hobbies);

console.log('copy hobbies:', deepCopy.name);
console.log('copy hobbies:', deepCopy.name);
