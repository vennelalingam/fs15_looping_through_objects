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
//  practice
// /////////// for...of ///////////

// const array1 = ['a', 'b', 'c']
// for (const element of array1) {
// console.log(element);
// }

// // a
// // b
// // c
// ///////////////////// Iterating over an Array /////////////////////////
// const numArray = [10, 20, 30];
// for(let num of numArray) {
//   num = num + 1;
//   console.log(num);
//   console.log(numArray); // [10, 20, 30];
// }
// console.log(numArray); // [10, 20, 30];
// // 11
// // 21
// // 31
// // Each iteration creates a new variable. Reassigning the variable inside 
// // the loop body does not affect the original value in the iterable (an array in this case)

// const array2 = [10, 20, 30]
// for ( const values of array2) {
//   console.log(values)
// }

// // 10
// // 20
// // 30

// ////////////////////// Iterating over a String ////////////////////
// const word = "boo"
// for (const letters of word) {
//   console.log(letters.toUpperCase());
// }
// // b
// // o 
// // o

// //////////////// Iterating over a Map /////////////////////
// const aray = new Map(
//   [
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ]
// );

// for(const entry of aray) {
//   console.log(entry);
// }

// for (const [key, value] of aray){
//   console.log(value);
// }

// ///////////////////// Iterating over a Set //////////////////////
// const arr = new Set(
//   [1, 1, 2, 2, 3, 3]
// )

// for( const value of arr) {
//   console.log(value);
// }


// const friends = {
//   a: {
//     name: "Pedro",
//     relationship: "school",
//     age: 30
//   },
//   b: {
//     name: "Sofia",
//     relationship: "work",
//     age: 38
//   },
//   c: {
//     name: "Mia",
//     relationship: "school",
//     age: 40
//   },
//   d: {
//     name: "Lucy",
//     relationship: "work",
//     age: 27
//   }
// }

// /******************************************************************
// Standard Code for lopping through any no of Objects using for..in
// ******************************************************************/

// const isObject = function(values) {
//   if(values === null) {
//     return false;
//   }
//   return(typeof values === 'object');
// };

// const objProps = function(obj) {
//   for(let values in obj) {
//     if(isObject(obj[values])) {
//       objProps(obj[values]);
//       } else {
//       console.log(values, obj[values]);
//     }
//   }
// }
// objProps(friends);

// /******************************************************************

// // looping through nested objects = 2 obj.. 

// // const isObject = function(values) {
// //   if(values === null) {
// //     return false;
// //   }
// //   return(typeof values === 'object');
// // };


// // for( let values in friends) {
// //   //checking whether the nested child is an object..?
// //   // if yes do this.. else console.log
// //   if(isObject(friends[values])) {
// //     for( let details in friends[values]) {
// //       console.log(details, friends[values][details]);
// //     }
// //   } else {
// //     console.log(values, friends[values])
// //   }  
// // }



// ***********************************************************************/
// // let abcd = Object.values(friends);
// // console.log(abcd);
// // for(const key in Object.keys(friends)){
// //   console.log(`${key} => ${friends[key]}`);
// // }
// /*
// --------------------------------------------------
// 0:{name: 'Pedro', relationship: 'school', age: 30}
// 1:{name: 'Sofia', relationship: 'work', age: 38}
// 2:{name: 'Mia', relationship: 'school', age: 40}
// 3:{name: 'Lucy', relationship: 'work', age: 27}
// --------------------------------------------------

// for (let update in friendsAges){
//  friendsAges[update] = friendsAges[update]+1 
//   console.log(friendsAges[update]);
// }
// */
// // let abcd = Object.values(friends);
// // console.log(abcd);
// // for(const key in Object.keys(friends)){
// //   console.log(`${key} => ${friends[key]}`);

// //   for (let update in friends) {
// //     friends[update] = friends[update]+1
// //     console.log(friends[update]);
// //   }
// // }
// // console.log(abcd.find(value => value.age))
// // console.log(abcd)
// // let details = Object.values(abcd)
// // console.log(details);
// // let details = Object.entries(friends);
// // console.log(details);
// // for (const key in friends) {
// //   if(friends.hasOwnProperty(key)) {
// //     console.log(`${key}: ${friends[key]}`);
// //   }
// // }

// 

 