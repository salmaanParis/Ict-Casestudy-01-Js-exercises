// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for (let num = 0; num <= 15; num++) {
    if (num % 2 === 0) {
        console.log(num + " is a even number");
    } else {
        console.log(num + " is a odd number");
    }
}
