const readlineSync = require("readline-sync");

const base = readlineSync.question("Enter base: ");
const height = readlineSync.question("Enter height: ");
const hypotenuse = readlineSync.question("Enter hypotenuse: ");

if( base**2 + height**2 === hypotenuse**2) {
  console.log("Yes, that's a right triangle!");

} else {
  console.log("Nope...not a right traingle.");
}
