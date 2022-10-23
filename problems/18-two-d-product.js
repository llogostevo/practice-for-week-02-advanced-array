/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

let reduceList= function (arr) {
  // reduce an array into the total product of all its numbers
  let result = arr.reduce((previousValue, currentValue) => previousValue * currentValue)
  return result;
}

let twoDimensionalProduct = function(arr) {
    // Your code here
  // set a new array constant
  const array = [] 
  // go through each element in the original array, reducing each nested array into a single number where the total product of each nested array is pushed into the new array
   arr.forEach(element => array.push(reduceList(element)))
  // reduce the new array into the total product of each element to give the total product of all elements in the original array
	return reduceList(array)

};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}