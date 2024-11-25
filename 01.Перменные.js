/*JS - язык прототипно-ориентированный программирования, обеспечивающий интерактивность на веб сайтах. 
JS - состоит из трех основных понятий, а именно - выражение, функции, объекты.
Все сущности в JS - это объекты. Объект - это набор свойств Имя(ключ):значение. 
Прим. {visible:true, width:1440}. Из этого первая часть(visibe,width) - это свойство объекта, (true,1440) - это значение.
В свою очередь МЕТОДЫ - являются ФУНКЦИЯМИ. К примеру в console.log console - объект. Метод - log(так же бывают dir, и т.д.).
И в свою очередь console.log(a) - это ВЫРАЖЕНИЕ, потому что оно всегда ВОЗВРАЩАЕТ ЗНАЧЕНИЕ.
-----
ПРИ ЭТОМ console.log() - результат вызова будет undefined, т.к. console.log ничего не возвращает.
+ - == === != и т.д.это -  операторы.

console.log(a); //- в этом выражении console - объект ; . - точечная запись ; log - метод ; ( ) - вызов метода ; a - значение
function abc(ad) - abc - название функции. ad - аргумент, который мы передаем в функцию.
*/

"use strict"; //use strict - установка, которая заставляет код обрабатываться в строгом режиме, без случайных переменных и т.д.
a = 15;
console.log(a);
console.dir(a); // - отображает все свойства объекта
console.table(a); // - отображает все свойства объекта в табличном виде

let number = 5; //
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
  a: 50,
};

obj.a = 10;
console.log(obj);

const VehicleBodyWidth = 3000;
const VehicleBodylength = 4000;
console.log(
  "Ширина кузова автомобиля: " +
    VehicleBodyWidth +
    ", длина:" +
    VehicleBodylength
);

const userName = "John";
let userNumber = 25;
userNumber = 24;
console.log(userName, userNumber); //2)Объекты. Структура хранения данных в парном порядке Ключ:значение
const obj = {
  name: "John",
  age: "25",
  isMarried: false,
};
