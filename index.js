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

// const car = {
//   brand: "Audi",
//   type: "automatic",
//   wheels: 4,
//   color: "white",
//   owner: "Vennela",
//   year: 2012
// };

// 1. Accessing car object values into array
// using built-in Object method.
// 2. using .join() to convert array to string.
// 3. concatenating using template literals.
// 4. Finally check adding more propetries to the 
// object and see if the code still runs.

//************* my Solution *******************/

// let carFeatures = "The features of car are:  ";
// let carArray = Object.values(car);
// console.log(carArray)
// //['Audi', 'automatic', 4, 'white']
// let car_Features = carArray.join(", ");
// console.log(`${carFeatures} ${car_Features}.`);

//*********** simplified solution ****************/

// accessing values using for..in loop and .push values 
// to an empty array to use .join() & concatenate

//   let carFeatures = "The features of car are: ";
//   let array = [];

//  for(let key in car) {
//     array.push(car[key]);
//  }
// console.log(`${carFeatures} ${array.join(", ")}.`);

//*********** alternative solution  **********/

// 1. for...in loop to access values from car object.
// 2. Accessed keys of the car object into array
// 3. to check last item of array to concatenate with "."

// let carFeatures = "The features of car are:  ";

// let carAray = Object.keys(car)
// console.log(carAray)
// // ['brand', 'type', 'wheels', 'color', 'owner', 'year']
// for (let key in car) {
//   // Ternary Expression
//   (carAray[carAray.length - 1] === key)
//   ? carFeatures += car[key] + "."
//   : carFeatures += car[key] + ", "
// }

// console.log(carFeatures)

// /*------------------------------------------------
// 5)
// Create a loop that adds each
// component of the adddress object
// to the fullAddress string.
// ------------------*/

// let address = {
//   line1: "Carrer de CodeOp",
//   line2: 42,
//   city: "Barcelona",
//   country: "Spain"
// }

// let fullAddress = "Full Address: ";

// let addressArray = [];
// console.log(addressArray)
// for(let key in address){
//   addressArray.push(address[key])
// }
// console.log(`${fullAddress} ${addressArray.join(", ")}.`)

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

// const cars = {
//   brand: "fiat",
//   number_plate: 3356,
//   built: "manual",
//   color: "blue"
// } 

// let carDetails = "";

// for(let key in cars){
//   (typeof cars[key] === "string")
//   ? carDetails += cars[key].toUpperCase() + ", "
//   : carDetails += cars[key] + ", "
// }
// console.log(carDetails);

// In case of Array
// const arr = ["Microsoft", "Apple"]
// const output = arr.map(str => str.toUpperCase());
// console.log(output)


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

// for (let key in friendsAges){
//  let newAge = (friendsAges[key] += 1) 
//   console.log(newAge);
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

for (let key in friends) {
  for (let keys in friends[key]) {
    let age = friends[key][keys]
    if (typeof age === 'number') {
      age += 1
    } 
      else null;
    console.log(age);
  }
}

// /*------------------
// 9)
// Who are the work friends, and who
// are the school friends? Create a
// loop that populates the two strings.
// ------------------*/

const friends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27
  }
}

let workFriends = "Work Friends: ";
let schoolFriends = "School Friends: ";

for(let key in friends){
  for (let keys in friends[key]){
    let value = friends[key][keys];
    // console.log(value);

    if (value === "work"){
     console.log(workFriends, friends[key]["name"])
    } else if (value === "school"){
      console.log(schoolFriends, friends[key]["name"])
    }
  }
}



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

let chores = {
  tidying: "Monday",
  vaccuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
}
let mondayChores = []
let wedChores = []
for (let key in chores) {
 if(chores[key] === "Monday") {
  mondayChores.push(key);
console.log("Monday's chores are:", mondayChores.join(", ") + ".");
 } 
 else if(chores[key] === "Wednesday"){
  wedChores.push(key);
  console.log("Wednesday's chores are: ", wedChores.join(", ") + ".");
}
}
