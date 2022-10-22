/*Problem : Write a javascript function find_largest to return the nth largest numbern an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array - which is 8.*/

//Set arr 
let arr = [3, 45, 6, 7, 23, 5, 7, 8];
//Catch arr length
let arrLen = arr.length;

//define function with sort and pass arr
const find_largest = (index)=>{
    //Pass compare function to sort method so numbers are properly sorted
    let sort = arr.sort((a, b) =>{return b - a})
    //check basic condition and log result or raise error
    index <= arrLen ? console.log(sort[index - 1]) : console.log(`Enter a Valid index between 1 and ${arrLen}`);
}

//call function
find_largest(8)