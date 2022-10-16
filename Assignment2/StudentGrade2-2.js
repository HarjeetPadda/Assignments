/* Problem : Write a function using switch 
case to find the grade of a student 
basedon marks obtaineda. “S grade” if the 
marks are between 90 and 100.b. “A grade” 
if the marks are between 80 and 90.c. “B 
grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 
and 70.e. “D grade” if the marks are 
between 50 and 60.f. “E grade” if the 
marks are between 40 and 50.g. “Student 
has failed” if the marks are between 0 and 
40.h. Else output “Invalid marks”.*/

var grade
var studentMarks = 45
switch (true) {
    case  (studentMarks >= 90 && studentMarks <= 100):
        grade = "S";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 80 && studentMarks < 90):
        grade = "A";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 70 && studentMarks < 80):
        grade = "B";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 60 && studentMarks < 70):
        grade = "C";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 50 && studentMarks < 60):
        grade = "D";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 40 && studentMarks < 50):
        grade = "E";
        console.log("Grade: "+grade);
        break;
    case  (studentMarks >= 0 && studentMarks < 40):
        grade = "Student Has Failed";
        console.log("Grade: "+grade);
        break;
    default:
        console.log("Invalid Marks or Student Did not submit Assignment for grading");
}