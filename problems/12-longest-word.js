/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

splits the sentence into string words
then sets the first word of the array as the longest
cycles through each element checking if it is longer than the current longest, if it is it will rewrite with the new longest word at the end it returns the longest word. 

for each is not a function and therefore can sit on its own as longest is the data that is being re-written each time. 
*/

let longestWord = function(sentence) {
    // Your code here
    arraySentence = sentence.split(" ");
    longest = arraySentence[0]
  arraySentence.forEach((element) => {
      if (element.length>longest.length){
        longest = element;
      }
    });
  
  return longest;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}