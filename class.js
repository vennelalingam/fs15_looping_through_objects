// const person = {
//     name:   "Mia",
//     age:    30,
//     isCoder: {
//         javascript: true,
//         python: false
//     }
// };

// ////////////// Accessing Keys with for-in loop //////////////////////

// for (let key in person) {
//     console.log(key);
// }

// // name
// // age
// // isCoder

// /////  output KEYS in an array:  ["name", "age", "isCoder"]

// const arrayDetails = [];
// for (let key in person) {
//     arrayDetails.push(key);
// }
//     console.log(arrayDetails);

// /////////// Built-in Object Method ////////////

// // this method outputs an array with all the keys

// const result = Object.keys(person);
// console.log(result);
// // ['name', 'age', 'isCoder']

// // same to access values in an array

// const result1 = Object.values(person);
// console.log(result1);

// /////////////////// Accessing Values with for-in loop ///////////////

// for (let key in person) {
//     console.log(key, person[key]);    
// }

// // Mia
// // 30
// // {javascript: true, python: false}

// ////////// with Arrays /////////

// const myArray = ["a", "b", "c"]
// for(const key in myArray) {
//     console.log(key, myArray[key]);
// }

// // 0 a
// // 1 b
// // 2 c
//-------------------------------------------------------------------------------------------------------

