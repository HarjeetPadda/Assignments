// Leap Year
const year = 2004

//Check if not evenly divisible by 100 than check if evenly divisible by 4 return true plus year if not move to else if block and check if divisible by 100 and 400  return true plus year 
if (year % 100 != 0) {
    if (year % 4 === 0) {
        console.log("Leap Year: " + year);
    } else {
        console.log("Not leap year: " + year);
    }
}else if (year % 100 === 0) {
    if (year % 400 === 0) { 
        console.log("Leap Year: " + year);
    }else {
        console.log("Not Leap Year: " + year);
    }
}
