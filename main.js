//console.log('Мы рады вас видеть ' + login + 'Сколько вам лет? ' + age);

//prompt () - встроенная функция которая создает поле ввода в браузере

// + перед функцией или переменной преобразует значение в числовой тип (number)

//alert () -встроенная функция которая выводит данные в модальном окне

// Первое задание


var myWord = prompt ('Введите ваше имя')
var myAge = +prompt ('Введите свой возраст')
var endMessage = ('Откройте консоль для просмотра')
var number1 = prompt ('Решите пример: 10 + 7 = ?')
var number2 = prompt ('Решите пример: 12 - 5 = ?')
var number3 = prompt ('Решите пример: 3 * 3 = ?')
var number4 = prompt ('Решите пример: 20 / 10 = ?')
var number5 = prompt ('Решите пример: 16 % 5 = ?')


console.log('Меня зовут ' + myWord);
console.log("Мне " + myAge);
console.log ( 'Пример 1: ' + '10 + 7 = '+ (10 + 7) + ' Ваш ответ ' + number1 );
console.log ( 'Пример 2: ' + '12 - 5 = '+ (12 - 5) + ' Ваш ответ ' + number2 );
console.log ( 'Пример 3: ' + '3 * 3 = '+ (3 * 3) + ' Ваш ответ ' + number3 );
console.log ( 'Пример 4: ' + '20 / 10 = '+ (20 / 10) + ' Ваш ответ ' + number4 );
console.log ( 'Пример 5: ' + '16 % 5  = '+ (16 % 5) + ' Ваш ответ ' + number5 );



// Второе задание 


var X, Y, Z, res;


X = +prompt ('Введите первое число');
Y = +prompt ('Введите второе число');
Z = +prompt ('Введите третье число');


var res = (X + Y + Z) /3;
console.log('Среднее арифметическое : ' + res );


alert(endMessage)









