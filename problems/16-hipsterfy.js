/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
  	console.log(word)
    let vowels = /[aeiou]/i;
   for (let i=word.length-1; i>=0; i--){      
      if ((vowels.test(word[i])) && (i!=0) && (i!=word.length-1)) {
        part1 = word.substring(0, i);
        part2 = word.substring(i+1, word.length);
        console.log(part1+part2)
        return part1+part2;
      } else if ((vowels.test(word[i])) && (i==word.length-1)){
        console.log(word.substring(0, i))
        return word.substring(0, i);
      } else if ((vowels.test(word[i])) && (i==0)){
        return word.substring(1,word.length);
      }
   }
    };

let hipsterfy = function(sentence) {
    // Your code here
    let words = sentence.split(" ");
    console.log(words);
    words = words.map(element => removeLastVowel(element));
    console.log(words);
    return words.join(" ");
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}