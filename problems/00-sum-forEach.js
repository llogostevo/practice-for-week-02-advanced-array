/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/

// anonymous function version
// let sumForEach = function(arr) {
//   // Your code here
//   let total = 0;
//   arr.forEach(function (e){
//     total += e;
//   })
//   return total;
// };

let sumForEach = function(arr) {
  // Your code here

  /*
- all you have to remember is that for each calls a function as a parameter
- within forEach it takes 3 parameters, element, index, array
- therefore these are the things we can use in the brackets. 
- then the => denotes where the function starts using the necessary variables. Note we may need to declare variables outside the function itself. 
  */
  let total = 0;
  arr.forEach( (e) => total += e)
  return total;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}