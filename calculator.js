function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
//example
console.log(calculator(5, 5, '+')) // returns 10

console.log(calculator(5, 2, '-')) // returns 3

console.log(calculator(5, 7, '*')) // returns 35

console.log(calculator(5, 2, '/')) // returns 2.5

console.log(calculator(5, 2, '&')) // returns an error message
