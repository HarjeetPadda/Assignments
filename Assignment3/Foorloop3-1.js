/*Problem: Using for loops, write a 
Javascript program to output the 
following pattern -
1
2 3
4 5 6
7 8 9 10*/
//Lets Go
/*Set to how many rows you need with 
1+ increment*/
let rows = 4
/*Set values to 1 this is the 
counter | value that get stored in 
pattern*/
let value = 1
let pattern = ""
for (let i = 1; i <= rows; i++) {
     for(let j = 1; j <= i; j++) {
        pattern += value
        value ++
     }
     //new row after each loop
     pattern += "\n"
}

console.log(pattern);