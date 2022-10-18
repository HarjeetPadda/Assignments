/*Problem : Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.

examples-
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436*/

/*Number to find how many matchsticks are used to build n match houses*/
let matchHouses = 87
/* very straight forward first house use 6 sticks and any after 5 sticks so set sticks required 6 and if any more than 1 add 5 more stick and if invalid number raise error*/ 
const findMatchsticks = (matchHouses) => {
    let numOfMatchsticks = 6
    if (matchHouses === 1) {
        console.log(`For ${matchHouses} match houses you need ${numOfMatchsticks} match sticks`);
    }else if (matchHouses > 1) {
        numOfMatchsticks = (matchHouses - 1) * 5 + numOfMatchsticks
        console.log(`For ${matchHouses} match houses you need ${numOfMatchsticks} match sticks`);
    }else{
        console.log("enter a valid number 'Try a positive number'");
    }
}

findMatchsticks(matchHouses)

