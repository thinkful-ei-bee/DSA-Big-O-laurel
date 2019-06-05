// the big o for Counting Sheep is:  O(n)
let count = 0;
function SheepJumpOutOfFence(n) {
    count ++;
    if (n === 0) {
        return
    }
    console.log('Another sheep jumps over the fence')
    return (SheepJumpOutOfFence(n - 1))
}
SheepJumpOutOfFence(10)
console.log(count);

// the big o for Power Calculator is: O(n)

function powerCalculator(b, expo) {
    if (expo < 0) {
        return "exponent should be >= 0";
    }
    if (expo === 0) {
        return 1;
    }
    return b * powerCalculator(b, expo - 1);
}
console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));

// // the big o for String Reverse is: 

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}


 console.log(stringReverse('abcde'))

// // the big o for nth Triangle Number is: 

// function triangle(num) {
//     if (num === 0) {
//         return 0;
//     }
//     return num + triangle(num - 1);
// }

function triangle(n) {
    if (n < 2)
        return n;
    return n + triangle(n - 1);
}
// console.log(triangle(5));

// // the big o for String Splitter is: 

// function stringSeparator(string) {
//     if (string.length === 0) {
//         return ''
//     }

//     if (string[0] === '/') {
//         return stringSeparator(string.substr(1))
//     }

//     return string[0] + stringSeparator(string.substr(1))

// }
// console.log(stringSeparator('02/20/2020'))

// // the big O for Fibonacci is: O(n^2)

function fb(n) {
    if (n < 2 && n >= 0) {
        return n
    }
    return fb(n - 1) + fb(n - 2)
}

console.log(fb(7))

// function fac(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * (fac(num - 1))
// }
function factorial(n) {
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
        return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
}
// console.log(fac(4));

function fibonacci(n) {
    // Base case
    if (n <= 0) {
        return 0;
    }
    // Base case
    if (n <= 2) {
        return 1;
    }
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function binaryRep(input) {
    if (input <= 0) {
        return '';
    }
    let binary = Math.floor(input % 2);
    return binaryRep(Math.floor(input / 2)) + binary
}