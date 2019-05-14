// ======================= Counting Sheep

function SheepJumpOutOfFence(n) {
    if (n === 0) {
        return
    }
    console.log('Another sheep jumps over the fence')
    return (SheepJumpOutOfFence(n - 1))
}
SheepJumpOutOfFence(10)

// iterative version






// ====================== Power Calculator

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






// ===================== Reverse String
function stringReverse(string) {

    if (string.length === 0) {
        return ''
    }
    return stringReverse(string.substr(1)) + string[0]
}


console.log(stringReverse('abcde'))

// iterative version
function reverseString(str) {
    let splitString = str.split("")
    let reverseStr = splitString.reverse();
    let joinStr = reverseStr.join();
    return joinStr;
}
console.log(reverseString('laurel'));

// ================ OR ================
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('laurel'));






// ======================== nth Triangular Number

function triangle(num) {
    if (num === 0) {
        return 0;
    }
    return num + triangle(num - 1);
}
console.log(triangle(5));

// iterative version


// ========================= String Splitter

function stringSeparator(string) {
    if (string.length === 0) {
        return ''
    }

    if (string[0] === '/') {
        return stringSeparator(string.substr(1))
    }

    return string[0] + stringSeparator(string.substr(1))

}
console.log(stringSeparator('02/20/2020'))

// iterative version
function stringSplitter(str) {
    let splitStr = str.split('/');
    let joinString = splitStr.join()
    return joinString;
}
console.log(stringSplitter('02/20/2020'));




// ====================== Fibonacci

function fb(n) {
    if (n < 2 && n >= 0) {
        return n
    }
    return fb(n - 1) + fb(n - 2)
}

console.log(fb(7))

// iterative version
function fib(num) {
    let a = 2;
    let b = 0;

    for (let i = 0; i < 20; i++) {

    }
}




// ====================== Factorial

function fac(num) {
    if (num === 1) {
        return 1;
    }
    return num * (fac(num - 1))
}
console.log(fac(4));

// iterative version
function factorial(num) {
    if (num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num = num * i;
    }
    return num;
}
console.log(factorial(4));