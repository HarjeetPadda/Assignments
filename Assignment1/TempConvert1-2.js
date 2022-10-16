
//First param true will output if you require a specific output set other null or 0
const celsiusToFahrenheit = (tempCelsius, tempFahrenheit) =>{
    if (tempCelsius) {
        tempFahrenheit = (tempCelsius / 5) * (9) + 32
        console.log(tempCelsius + "C" + " is " + tempFahrenheit + "F");
    }
    if (tempFahrenheit) {
            tempCelsius = (tempFahrenheit - 32) / (9) * (5)
            console.log(tempFahrenheit + "F" + " is " + tempCelsius + "C");
        }
    }
//first param is temp in celsius second param is temp in fahrenheit for fahrenheit to celcius set first param to null or 0 for celcius to fahrenheit use one param only and second param is optional it wont do anything as function will take value from first if block
celsiusToFahrenheit(45)