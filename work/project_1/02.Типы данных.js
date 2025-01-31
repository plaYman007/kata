"use strict";
//1)Простые типы
//Числовой тип данных(number)
let number = 4;
console.log(number + number);

//Строчный тип данных(string)
const person = "Alex";

//Логический тип данных(boolean)
const bool = true;

// null - когда чего-то просто не существует
console.log(something);
null;

//undefiend - когда что-то существует, но у него нет значения
let und;
console.log(und);

//2)Объекты. Структура хранения данных в парном порядке Ключ:значение
const obj = {
  name: "John",
  age: 25,
  isMarried: false,
};
console.log(obj.age);
console.log(obj.name);

//Массивы - более комплексный тип данных, не являющийся отдельным типом
//Массив - перечень информации ПО ПОРЯДКУ
let array = ["plum.png", "orange.jpg", 6, Alex, "apple.bmp"];
console.log(
  array[1] /*Ставим то число, под которым идёт необходимый элемент в массиве. ОТСЧЁТ ИДЁТ С НУЛЯ! прим. если хотим orange.jpg, то пишем цифру 1*/
);
const storeName = "Bakka";
const storeDescription = {
  budget: 10000,
  employees: ["Ba", "kk", "a"],
  products: {
    tovar1: 2500,
    tovar2: 3000,
  },
  open: true,
};
console.log(storeDescription);
