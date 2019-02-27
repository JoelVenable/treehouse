/*  

This program generates a random number function to generate a random number, then attempt to guess it.

Finally it will output the number of attempts to guess the correct number.

*/

var highNum = 100000;
var randNum = randomNum(highNum);
var counter = 0;


function randomNum(upper) {
  return Math.floor(Math.random() * upper) + 1;
}


while (randomNum(highNum) !== randNum) {
  counter++;
}

console.log(`The random number was ${randNum}\nTook ${counter} attempts to guess the correct number.`);