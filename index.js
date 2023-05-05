// /*------------------

// 1)
// The loop is currently printing
// the keys of the person object.
// Switch it so it is printing
// the values instead.
// ------------------*/
// const person = {
//   name: "Sofia",
//   age: 30,
//   location: "Barcelona",
//   hairColor: "brown",
//   coder: true
// }

// for (let key in person) {
//   console.log(person[key]);
// }

// /*------------------
// 2)
// Write a loop that prints all the values
// in pet: ("Spot", 2, "dog", "brown").
// ------------------*/

// const pet = {
//   name: "Spot",
//   age: 2,
//   animal: "dog",
//   color: "brown",
// }

// for (let key in pet) {
//   console.log(`${pet[key]}`)
// } 

// /*------------------
// 3)
// Add at least FOUR properties
// to the car object.

// Then, create a loop that prints
// the values of the car object
// to the console.
// ------------------*/

// const car = {
//   brand: "Audi",
//   type: "automatic",
//   wheels: 4,
//   color: "white",
// };


// car.brand = "Audi",
// car.type = "automatic",
// car.wheels = 4,
// car.color = "white"
// console.log(car)

// for (let key in car) {
// console.log(car[key]);
// }

// /*------------------
// 4)
// Now, let's print all the features
// in ONE statement instead of one at
// a time. Using a loop, add each value
// to the "carFeatures" string.

// Bonus #1: add a comma between each feature
// so it more closely resembles a real
// sentence when it prints.

// Bonus #2: ensure that each feature is comma-separated but the entire sentence ends with a '.'.
// For example: 'white, citroen, c1, 2016.'
// Hint - For this step you'll need to check if we are on the last key and if so, treat it differently than we did in Bonus #1.  
// ------------------*/

const car = {
  brand: "Audi",
  type: "automatic",
  wheels: 4,
  color: "white"
};

let carFeatures = " "

for (let key in car) {
//  carFeatures = (carFeatures + car[features] + "," + " ")
let features = Object.values(car)
   carFeatures = features.join(", ")
console.log(carFeatures);
}

// /*------------------
// 5)
// Create a loop that adds each
// component of the adddress object
// to the fullAddress string.
// ------------------*/

// // let address = {
// //   line1: "Carrer de CodeOp",
// //   line2: 42,
// //   city: "Barcelona",
// //   country: "Spain"
// // }

// // let fullAddress = " "

// // for (let details in address){
// //   fullAddress =(fullAddress + address[details] + "," + " ")
// //  console.log(`${fullAddress}.`);
// // }

// // for (const key in address) {
// //   if (address.line1.call(address, key)) {
// //     const element = address[key];    
// //   }
// // }

// for (const key in address) {
//   if (address.line1.call(address, key)) {
//     const element = address[key];    
//   }
// }


// /*------------------
// 6)
// Write a loop that updates
// all values that are strings to
// uppercase.

// Hint: use "typeof" to determine
// if the value is a string, and use
// ".toUpperCase()" to convert the string
// to uppercase.
// ------------------*/

// const car = {
//   brand: "ford",
//   length: "3941",
//   built: "strong",
//   color: "red",
// }
// for (let features in car) {
// // console.log(car[features]);

//   typeof((car[features]) === "") ?
//     console.log(car[features].toUpperCase()) : null
//   // console.log(typeof(car[features]))
// } 

// /*------------------
// 7)
// Write a loop that updates
// everyone's age by one year.
// ------------------*/

// const friendsAges = {
//   pedro: 30,
//   sofia: 38,
//   mia: 40,
//   lucy: 27
// }

// for (let update in friendsAges){
//  friendsAges[update] = friendsAges[update]+1 
//   console.log(friendsAges[update]);
// }

// /*------------------
// 8)
// Now, do the same thing– but
// this time, you'll have to access
// age from within each object.

// It's already been started for you.
// Hint: Use "typeof" to determine
// if the feature is a number. If it
// is, increase the value by 1.
// ------------------*/

// for (let friend in friends) {
// //   for (let features in friends[friend]) {
// //     let ageFeature = friends[friend][features]
// //     if (typeof ageFeature == 'number') {ageFeature = ageFeature +1};
// //     console.log(ageFeature);
// //   }
// // }

// /*------------------
// 9)
// Who are the work friends, and who
// are the school friends? Create a
// loop that populates the two strings.
// ------------------*/

// let workFriends = "";
// let schoolFriends = "";
// for (let friend in friends) {
//   for (let features in friends[friend]) {
//     let relationship = friends[friend][features]
//     console.log(relationship)
//     if(relationship === "work"){
//       console.log(workFriends)
//     } else console.log(schoolFriends)
// //       ((relationship) === "work") ?
// // //     //  else if (typeof workFriends == "school") {}
// // //     // console.log(typeof(workFriends))
// //      console.log({workFriends}) : console.log({schoolFriends})
    
//     // console.log(workFriends);
//   }
// }

// // console.log(`The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`)

// /*------------------
// 10)
// Loop through the chores object and
// add the name of the chore to the
// day that it is associated with.
// When you are finished, print "mondayChores"
// and "wednesdayChores" to the console.

// Try to make what you print as natural as possible–
// for example: "Monday's chores are: tidying,
// vacuuming, bills."

// ------------------*/

// let chores = {
//   tidying: "Monday",
//   vaccuuming: "Monday",
//   dishes: "Wednesday",
//   laundry: "Wednesday",
//   bills: "Monday",
// }


// for (let mondayChores in chores) {
//  if(chores[mondayChores] === "Monday") {
//   console.log("Monday's chores are: ", mondayChores);
//  }
// }

// // let wednesdayChores = "";
// // console.log(wednesdayChores)
// for (let wednesdayChores in chores) {
//   if(chores[wednesdayChores] === "Wednesday"){
//   console.log("Wednesday's chores are: ", wednesdayChores);
// }
// }