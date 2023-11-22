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

// 10 23 23
function findSingleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
    //the reason why this works is the xor operator, which cancels out any pair, leaving only behind the single number
  }

  return result;
}

// console.log(findSingleNumber([1, 2, 3, 4, 1, 2]));

//sum of two integers without addition

function sumTwoIntegers(a, b) {
  while (b !== 0) {
    console.log(a, b);
    const carry = a & b;
    //calculate the carry without adding (xor)
    console.log(a, b);
    a = a ^ b;
    console.log(a, b);
    //add a and b without carry (xor)
    b = carry << 1;
    console.log(a, b);
    // shift the carry one position to the left (carry << 1)
  }
  return a;
}

console.log(sumTwoIntegers(14, 15));

//////////////////////////////////////////////////////////////////////
const strings = ["a", "b", "c", "d"];
console.log(strings[2]);

//push

strings.push("e");
console.log(strings);

// pop

strings.pop();
console.log(strings);

//unshift
strings.unshift("x");
console.log(strings);

//splice
strings.splice(2, 0, "alien");
console.log(strings);

////////////////////////////////////////////// implementing an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("fuck");
newArray.push("you");
// newArray.pop();
newArray.push("!");
newArray.delete(1);
console.log(newArray);

/////////////////////////////
// reverse a string

function reverse(str) {
  const newWord = [];
  for (let i = str.length; i >= 0; i--) {
    newWord.push(str[i]);
  }
  return newWord.join("");
}

console.log(reverse("Hello, my nme is Robert"));
