/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

*/

let unique = function(array) { 
  // Your code here
  let newArray = [];
  let flag = 0;
  array.forEach(element =>{
    // check the curretn element against each element in the new array
      newArray.forEach(newElement => {
        if (newElement == element){
          // flag if there is a match cycling through whole array
          flag = 1;
        }});
      // if match not found after cycling whole array then push the element on the new array
      if (flag != 1){
        newArray.push(element);
      }
    // reset the flag so that next passing identifies elements yet to be flagged. 
      flag = 0;
  });
console.log(newArray);
return newArray;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}