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

// function stringReverse(string) {

//     if (string.length === 0) {
//         return ''
//     }
//     return stringReverse(string.substr(1)) + string[0]
// }


// console.log(stringReverse('abcde'))

// // the big o for nth Triangle Number is: 

// function triangle(num) {
//     if (num === 0) {
//         return 0;
//     }
//     return num + triangle(num - 1);
// }
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
// console.log(fac(4));