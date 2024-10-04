
for (let i = 1; i <= 100; i++) { 
    // Loop from 1 to 100, inclusive
    
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz"); 
        // If divisible by both 3 and 5, print "FizzBuzz"
    } 
    
    // Check if the number is divisible by 3
    else if (i % 3 === 0) { 
        console.log("Fizz"); 
        // If divisible by 3 only, print "Fizz"
    } 
    
    // Check if the number is divisible by 5
    else if (i % 5 === 0) { 
        console.log("Buzz"); 
        // If divisible by 5 only, print "Buzz"
    } 
    
    // If none of the above conditions are true, print the number
    else { 
        console.log(i); 
        // Print the number if it's not divisible by 3 or 5
    } 
}
