/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {
    // Your code here
    let words = sentence.split(" ") ;
  // goes through each word in the list and runs the translate function
  return words.map(word => translateWord(word)).join(" ");
};

let checkVowel = function(letter){
  // helper function to check if a letter is a vowel
  // set vowels REGEX
  const vowels = /[aeiou]/i;
  // check if vowel is last letter of the sentence, and return true if it is
  return vowels.test(letter);
}

let translateWord = function(word) {

  // - words that are shorter than 3 characters are unchanged
  if (word.length<3) {
    return word;
  // check if word ends in a vowel and return word twice
  } else if (checkVowel(word[word.length-1])){
    return word+word;
  } else {
      pointer = word.length-1;
      // while the last letter is not a vowel
      while (!(checkVowel(word[pointer]))){
        //move the pointer down and then repeat to check whether next letter is a vowel
        pointer = pointer -1;
      }
      //once vowel is found then concatentate original word with the substring from the last vowel to the end of the word
      return word+word.substring(pointer, word.length)
  }
  };

  
// - words that are 3 characters or longer are translated according to the following rules:
  // - if the word ends with a vowel, simply repeat the word twice (example: 'like'->'likelike')


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}