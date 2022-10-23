/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

a few potential ways to do this
- for each letter in word
    - if letter equal vowel
    - count ++
- filter vowels
    - if vowels >=3 return ture

    the filter method returns all the vowels, 
    https://appdividend.com/2022/06/04/how-to-get-distinct-values-from-array-in-javascript/#:~:text=To%20find%20a%20unique%20array,the%20array%20with%20unique%20values.

    using this site you get a method that allows you to create a new array with unique values, this producing a new array called uniqueVowels that allow you to return the correct then the number using the length method and check if there are 3 vowels in each word

*/

let hasThreeVowels = function(string) {
  let vowel = /[aeiou]/
  const vowels = string.split("").filter(letter => vowel.test(letter));

  const uniqueVowels = Array.from(new Set(vowels));
  if (uniqueVowels.length >=3) {
    return true;
  } else {
    return false;
  }
  };

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}