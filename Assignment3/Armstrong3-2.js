/*Problem : Write a program to find 
whether a given number is armstrong 
number or not-
The Armstrong number is a number 
that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 
370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 
153 is an Armstrong number.*/
//Number to check
let number = 370
//Split number in an array to extract individual numbers
let middlewareStuff = number.toString().split('').map(Number);
/*Do i have to tell you what this does to*/
let numberCubeSum = 0
/*Well put all ingredients to the recepie*/
const checkArmstron = (number, middlewareStuff, numberCubeSum) => {
    for(let j = 0; j < middlewareStuff.length; j++){
            numberCubeSum += middlewareStuff[j]*middlewareStuff[j]*middlewareStuff[j]
    }
    //Log result and we are done
    if (number === numberCubeSum)
    console.log(number + " is a Armstrong Number");
    else
    console.log(number + " is not a Armstrong Number");
}
/*Ofcaourse we have to call nothing is fully automated*/
checkArmstron(number, middlewareStuff, numberCubeSum)

