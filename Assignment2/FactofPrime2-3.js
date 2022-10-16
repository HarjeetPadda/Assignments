/* Problem : Write a program to find the 
factorial of all prime numbers between a
given range . Range will be passed as 2 
values in the function
parameters. eg- if it is needed to find 
the values for numbers 1-100, then
function declaration can look like - 
function prime(1,100).*/
//import findFactorial from assignment 1-1
//Some issue in importing so have to just copy paste

let start = 10
let end = 20
let primeNumbers = []

//Find prime numbers in range start, end

const findPrime = (start, end) => {
    let isPrime = true
    if (start < end) {
        for (let i = 2; i < start; i++) {
            if (start % i == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primeNumbers.push(start)
            start++
            findPrime(start, end)
        } else {
            start++
            findPrime(start, end)
        }
    }
    return primeNumbers
}
findPrime(start, end)
console.log("Prime Numbers are: " + primeNumbers);
const findFactorial = (primeNumbers) => {
    let arrlen = primeNumbers.length
    for (let i = 0; i < arrlen; i++) {
        let numBer = primeNumbers[i]
        if (numBer == 0 || numBer == 1) 
        return 1;
        for (var j = numBer - 1; j >= 1; j--) {
            numBer *= j;
    }
    console.log("Factorial of "+ primeNumbers[i] + " is " +numBer);
    }
}
findFactorial(primeNumbers)
