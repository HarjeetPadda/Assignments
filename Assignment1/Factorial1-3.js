let numBer = 11

//Find factorial of any whole number

const findFactorial = (numBer) => {
    //Check for 0 or negative number 
    if (numBer == 0 || numBer == 1) 
        return 1;
    //set i for numBer -1 for loop so it maintains numBer original value
    for (var i = numBer - 1; i >= 1; i--) {
        //set numBer = numBer * i
            numBer *= i;
    }
    //Can return numBer value and log or just log as last step
    console.log(numBer);
}
//After 21 it will output value in hex as its past the billion trillion number
findFactorial(numBer)
