/* Problem : Write a JavaScript program 
which accept a number as input in the
function parameter and insert dashes (-) 
between each two even numbers.
For example if you accept 025468 as the 
output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8. */

//Declare input value 
const input = 2245688

//Write computeDash function to use input as param
const computeDash = (input) => {
    //Validate input
    if (isNaN(input) || input < 0) {
        console.log('Enter a valid Number')
    } else {
        //Logic
        let inputArray = input.toString()
        var output = [inputArray[0]]
        let inputLength = inputArray.length
        for (let i = 0; i < inputLength; i++) {
            (inputArray[i] % 2 === 0) && (inputArray[i + 1] % 2 === 0) ? output.push('-', inputArray[i + 1]) : output.push(inputArray[i + 1])
        }
    }
    //Join and log output
    console.log(output.join(''))
}

computeDash(input)