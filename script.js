use: "strict";

// interview questions
// 10 22 23

function reverseString(word) {
  const newWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    newWord.push(word[i]);
  }
  return newWord.join("");
}

// console.log(reverseString("asdfaergarw"));

function fizzFuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzFuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Fuzz");
    } else {
      console.log(i);
    }
  }
}

// fizzFuzz(250);
