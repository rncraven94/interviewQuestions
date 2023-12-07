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

// merge sorted arrays

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;
  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      merged.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      merged.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }
  // console.log(merged);
  return merged;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// two sums

function twoSum(arr1, target) {
  let arrayOne = arr1[0];
  let arrayTwo = arr1[1];
  let i = 1;
  let j = 2;
  if (arrayOne + arrayTwo === target) {
    return [arrayOne, arrayTwo];
  }
  while (arrayOne || arrayTwo) {
    if (!target === arrayOne + arrayTwo) {
      arrayTwo = arr1[j];
      j++;
    }
  }
}
console.log(twoSum([1, 2, 3], 4));
