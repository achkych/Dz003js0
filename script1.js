const calculateSalary = (input) => {
    const num = parseFloat(input);

    if (isNaN(num)) {
        console.log("Znachenie задано неверно. Введите положительное число!");
    } else {
        const tax = num * 0.13;
        const salary = num - tax;
        console.log(`Razmer заработной платы за вычетом налогов равен ${salary}`);
    }
};

// Пример ввода пользователя с клавиатуры (меняем комментарии для тестирования)
const userInputnum = 50000;// = prompt("Vvedite положительное число:"); // ="zп";
calculateSalary(userInputnum);