/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
    // split sentence into words
  const words = sentence.split(" ");

  //filter out words not including e, using reg ex and not
  // join the array together into a new array with the joined string
  const noEwords = (words.filter(word => !(/[e]/i.test(word))).join(' '));
  return noEwords;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}