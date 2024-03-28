// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 


function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function detectPrime(arr) {
    const firstElement = arr[0];
    return checkPrime(firstElement);
}

console.log(detectPrime([7, 110, 15, 22, 25]));
