/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  // Your code here
  let words = sentence.split(" "); 
  // use reduce, checks the previous value against current
  // if the previous value is greater than or equal to current value then the current value is smaller and so that will be returned, this repeats across the whole string until the final value is reached. 
  let word = words.reduce((previousValue, currentValue) => {
    if (previousValue.length >= currentValue.length){
      return currentValue;
    } else {
      return previousValue;
    }
  });

  return word;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}