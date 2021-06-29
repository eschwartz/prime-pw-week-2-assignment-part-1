// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name

// 2 - Create a second variable called `lastName` and assign it the value of your last name

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

// 4 - Console log the value of `fullName`
let firstName = 'Edan';
let lastName = 'Schwartz';

//let fullName = firstName + ' ' + lastName;
let fullName = `${firstName} ${lastName}`;
console.log('fullName', fullName);

let cohort = 'Mersenne'
let greeting = `Hello ${fullName}, welcome to week 3 of ${cohort}!`
console.log(greeting);

console.log(`
  I am writing a really long
  console log to say a lot of really
  interesting things and stuff
  for you to hear!
`);


let pets = 5;
let friendsPets = 7;

let mostPets;
if (friendsPets > pets === true) {
  mostPets = friendsPets;
}
else if (friendsPets > pets === false) {
  mostPets = pets;
}
console.log('mostPets is', mostPets);

switch (friendsPets > pets) {
  case true:
    mostPets = friendsPets;
    break;
  case false:
    mostPets = pets;
    break;
}


let adventurous = false;

/*
let vacationPlans;
if (adventurous) {
  vacationPlans = 'Skydiving in Mexico';
}
else {
  vacationPlans = 'Brewery in Duluth';
}
*/

// Check if adventurous is true
// and decide where to vacation
let vacationPlans = adventurous
  ? 'Skydiving in Mexico'
  : 'Brewery tour in Duluth';

console.log('vacation plans: ', vacationPlans);

let gender = 'male';

console.log(
  `Hello ${gender === 'male' ? 'Mr.' : 'Ms.'} ${lastName}`
);

/*
if (
  this &&
  that &&
  whatever &&
  otherTHing ||
  17 && 42
  || true
) {

}
*/


adventurous; // true
adventurous === true; // true


if (adventurous) {
  console.log('Lets do something nuts');
}
else {
  console.log('Lets stay home and watch Netflix');
}


let luckyNumber = 7;

if (luckyNumber === Number('7')) {
  console.log('You\'re a winner!');
}


/// ----------


let dayOfTheWeek = 'Thursday';
/*
if (dayOfTheWeek === 'Tuesday') {
  console.log('Ari drum lessons');
}
else if (dayOfTheWeek === 'Thursday') {
  console.log('Mersenne class')
}
else if (dayOfTheWeek === 'Saturday') {
  console.log('Big Wu');
}
else {
  console.log('not doing much');
}
*/
switch (dayOfTheWeek) {
  case 'Tuesday':
    console.log('Ari drum lesson');
    break;
  case 'Thursday':
    console.log('Mersenne class');
    break;
  case 'Saturday':
    console.log('Big Wu');
    break;
  default:
    console.log('not doing much');
    break;
}

/*
switch (luckyNumber) {
  case 7:
    //
}
*/


// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

// 11 - Add two pets to your `pets` variable

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"


// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
