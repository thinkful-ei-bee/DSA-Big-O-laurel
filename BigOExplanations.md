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