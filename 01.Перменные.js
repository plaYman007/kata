"use strict"; //use strict - установка, которая заставляет код обрабатываться в строгом режиме, без случайных переменных и т.д.
a = 15;
console.log(a);

let number = 5;
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
