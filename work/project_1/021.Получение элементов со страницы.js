"use strict";

const box = document.getElementById("box"); //Тут мы обращаемся к страничке, и получаем доступ к одному конкретному элементу по его айди.
console.log(box); //Соответственно, что бы получить результат, надо находиться на страничке в браузере.

///

const bts = document.getElementsByTagName("button"); //Важно! Таким образом мы получили в переменную btns не один элемент - а псевдомассив.
console.log(bts);

const bts = document.getElementsByTagName("button")[1]; //Таким образом мы получаем доступ к конкретной кнопке в этом псевдомассиве
console.log(bts);
//ИЛИ ЖЕ
const bts = document.getElementsByTagName("button");
console.log(bts[1]);
//При этом. Если бы кнопок у нас всего была 1 шт - мы всё равно получаем массив. HTMLCollection[button];
//Поэтому, если мы всё равно хотим обратиться к конкретной кнопке в этом массиве, пишем так, как ниже:
const bts = document.getElementsByTagName("button");
console.log(bts[0]);

////

const circles = document.getElementsByClassName("cicrle");
console.log(circles); //Работает так же, как и ByTagName - так же выводит псевдомассив.

///// Иии.. внимание внимание, говорит Германия блять. Так как выше, естественно, уже не принято писать. Сейчас обращение идут через css селекторы.

const hearts = document.querySelectorAll(".heart"); //Соответственно, тут мы получаем доступ к css файлу.Т.к. тут мы используем селекторы - нужно ставить точку.

//console.log(hearts); //Это всё так же будет псевдомассив. Но уже с методом forEach, у html такого не было.

hearts.array.forEach((item) => {
  console.log(item); //item - это каждый элемент, который будет находиться в псевдомассиве.
});

const oneHeart = document.querySelector(".heart"); //Этим методом мы выводим первый элемент селектора!
console.log(oneHeart);
