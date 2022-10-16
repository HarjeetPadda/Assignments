/* Problem: Write a JavaScript program to find the 
sum of the multiples of 3 and 5
under 1000 NO IDEA WHY BUT LETS DO IT*/
/*Set limit to prevent loop to exit and 
enter loop again and again to check i 
reached limit*/
let limit = 1000
//set result variables so i can be added if no int or null value declare it might bug due to different datatype
let sumof3multi = null
let sumof5multi = null

// loop to check multiple of 3 and 5 and add results in each loop iteration

//can also do this with function by passing limit as a parameter
for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
        sumof3multi += i
    } else if (i % 5 === 0) {
        sumof5multi += i
    }
}

console.log(sumof3multi + " " + sumof5multi);
