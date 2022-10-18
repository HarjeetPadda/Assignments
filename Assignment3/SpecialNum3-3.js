/*Problem: Write a program to find 
whether a given number is special 
number or not-
If the sum of the factorial of 
digits of a number (N) is equal to 
the number itself, the number (N) is 
called a special number. eg- 145 is 
a special number Logic- 1! + 4! + 
5!= 1+24+120 i.e 14*/


//Number to check
let num = 145
//Split number in an array to extract individual numbers
let middlewareStuff = num.toString().split('').map(Number);
/*Do i have to tell you what this does to*/
let numFactSum = 0
/*To keep track of Loop sum*/
let loopSum = 0
/*As usual just throw all the variables in and stir the pot hoping to get the right taste*/
const checkSpecial = (num, middlewareStuff, numFactSum) =>{
    for (let i = 0; i < middlewareStuff.length; i++) {
        /*init set loopSum to 1 this will reset it to one for ecery loop we need it trust me*/
        loopSum = 1
        for (let j = 1; j <= middlewareStuff[i]; j++) {
            /*check if number i == 1 and increment numFactSum by 1 need this step so we dont have to set j to 0*/
            if (middlewareStuff[i] === 1){
                numFactSum++
            }else{
                if(j === middlewareStuff[i]){
                    break
                }else{
                    loopSum *= (j + 1)
                }
            }
        }
        /*My head hurts writing these comments will explin in class*/
        if (loopSum > 1)
            numFactSum += loopSum
        if (middlewareStuff[i] < 1)
            numFactSum++
    }
    if (numFactSum == num) {
        console.log(num + " Is a Special Number");
    }else{
        console.log(num + " Is not a Special Number");
    }
}

checkSpecial(num, middlewareStuff, numFactSum)
