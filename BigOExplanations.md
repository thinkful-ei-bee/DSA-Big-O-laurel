# What is the Big O for This?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

* I believe that the Big O for this problem is O(1) 

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

* I believe that the Big O for this problem is O(n)

# Even or Odd

### What is the Big O of the following algorithm? Explain your answer

```function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
```

* I believe the Big O for this problem is O(1) because it is constant. It is going over only one if statement and there is nothing else after.

# Are You Here?

### What is the Big O of the following algorithm? Explain your answer

```function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

* I believe the Big O for this problem is O(n^2) because there is a nested loop

# Doubler

### What is the Big O of the following algorithm? Explain your answer

```function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

* I believe the Big O for this problem is O(n) because it loops through the entire array just once

# Naive Search

### What is the Big O of the following algorithm? Explain your answer

```function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

* I believe the Big O for this problem is O(n) because it loops through the entire array just once

# Creating Pairs

### What is the Big O of the following algorithm? Explain your answer

```function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

* I believe the Big O for this problem is O(n^2) because there is a nested loop that goes through all elements in arr

# Compute the Sequence

### What does the following algorithm do? What is its runtime complexity? Explain your answer

```function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

* (I am not sure. Come back to it later)

# An Efficient Search

### In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

* I believe the Big O for this problem is O(log(n)) because some fraction of the remaining input is processed in each iteration (remembered from this morning's workshop)

# Random Element

### What is the Big O of the following algorithm? Explain your answer

```function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

* I believe the Big O for this problem is O(1) because its just a return statement for one singular element in an array 

# What Am I?

### What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
```

* (I know its looking for something but it doesn't seem to be just even numbers. Come back to later)