let number = prompt("Enter a number");
number = Number(number);
if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
} else {
    console.log(number + " is not a multiple of 5.");
}