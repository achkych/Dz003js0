const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => (num1 === num2) ? 0 : (num1 > num2) ? num1 - num2 : num2 - num1;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
//const divide = (num1, num2) => (num2 !== 0) ? num1 / num2 : "Vse taki , на ноль делить нельзя!";-->

console.log(sum(2, 5)); 
console.log(difference(5, 2)); 
console.log(multiply(2, 5)); 
console.log(divide(5, 2));
