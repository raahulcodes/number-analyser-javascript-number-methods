

// 1. A number as a input
let number = 45;
let string = "25";
let string_decimal = "25.987";

// 2. Displaying Number as a String using toString()
console.log(number.toString(), typeof number.toString()); //using typeof to find the datatype of the string too

// 3. Displaying the number with two decimal places using toFixed()
console.log(number.toFixed(2));

// 4. Displaying the number with two decimal places using toPrecision()
console.log(number.toPrecision(4));

// 5. Displaying the number in exponential notation using toExponential()
console.log(number.toExponential());

// 6. Checking if number is integer or not
console.log(Number.isInteger(number));

// 7. Checking if number is safe Integer or not
console.log(Number.isSafeInteger(number));

// 8. Checking if the number is finite or not
console.log(Number.isFinite(number));

// 9. Check whether the number is not a number 
console.log(Number.isNaN(number));

// 10. Converting a string into a whole number
console.log(Number.parseInt(string));

// 11. Converting a string into a decimal number
console.log(Number.parseFloat(string_decimal));

// 12. Displaying the primitive value of a number
console.log(number.valueOf());
