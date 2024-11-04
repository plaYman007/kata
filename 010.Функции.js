"use strict";
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  num = 10;
}
showFirstMessage("hello world!");
console.log(num);
//Когда мы вызваем функцию, она ищет значения сначала ВНУТРИ СЕБЯ, потом переходит
//на уровень выше! Прим. если переместить console.log(num) в ФУНКЦИЮ - она выдаст 10
//Замыкание функции - это самая функция, вместе со всеми внешними переменными, которые ей доступны

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

//Важно! Функции - первое, что выплоняет js. Т.е. мы можем записать console(log) ДО самой функции

function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

//
const logger = function () {
  console.log("hello");
};
logger();
//Тут так сделать нельзя, т.к. мы загоянем функцию под const

const calc = (a, b) => {
  return a + b;
}; //можно без фигурных скобок, если функция в 1 стрчоку

//
function test() {
  for (let i = 1; i < 6; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
  console.log("suka");
}
test();
//return - прекращает полностью работу функции. Наподобии break в циклах.
//т.е. console.log не выведится в консоль
