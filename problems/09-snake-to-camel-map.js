/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

/*
- split the string first removing all the _
- then I used a map to cycle through each element
- firstly capitalizing each element of the string at 0 which returns that letter
- then concatentating the rest of the element using slice, but also lowercasing that side of the element
- finally joining back the elements together on the returning using the join method on the array with "" so that it joins them with no dividers as single strings. 
    - nb default join would have been with commas ,
    
*/

function snakeToCamel(str) {
  const elements = str.split("_")
  
  const pascalised = elements.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
  return pascalised.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}