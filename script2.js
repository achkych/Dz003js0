let number1 = 1;//Number(prompt('Введите первое число:'));
let number2 = 2;//Number(prompt('Введите второе число:'));
let number3 = 3;//Number(prompt('Введите третье число:'));

const maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(`Максимальное число среди введенных: ${maxNumber(number1, number2, number3)}`);
