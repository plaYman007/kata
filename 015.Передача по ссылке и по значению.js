"use strict";
const obj = {
  a: 5,
  b: 1,
};
const copi = obj; //кладется ссылка на наш изначальный объект
copi.a = 10;
console.log(copi);
console.log(obj);
//Будут одинаковые значения, т.к. передача идёт по ссылке, т.е. передаётся не сама структура объекта - а ссылка на него. Поэтому так писать нельзя

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

//При помощи цикла создаем новый объект, перебирая старые свойства.

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};
const nemNumbers = copy(numbers); //Это поверхностная копия объектов. Т.е. меняются значение a, b, но не c, где есть ещё значения
nemNumbers.a = 10;
console.log(nemNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20,
};
console.log(Object.assign(numbers, add)); //Первое - объект, в который мы хотим переместить. Второй - который перемещаем.
//Выше - мы создали независиую копию объектов
//----------------------------------------
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); //Позволяет скопировать старый массив, относится именно к массивам. Внутрь можно положить аргументы по кол-ву эл-тов.
newArray[1] = "adafasf";
console.log(newArray);
console.log(oldArray);
//-------------
const videosos = ["youtab", "vimie", "vine"],
  blogs = ["wp", "titj", "twitar"],
  internet = [...videosos, ...blogs, "vl", "fb"]; //Оператор ... - короче прибавляем значения предыдущего.
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];
log(...num);
//------------------------
const array = ["a", "b"];
const newAarray = [...array];
const q = {
  one: 1,
  two: 2,
};
const newObj = { ...q };
