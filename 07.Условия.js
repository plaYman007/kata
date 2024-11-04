"use strict";
if (4 == 9) {
  console.log("ok!");
} else {
  console.log("error!");
}
//Условия всегда стремятся к boolean типу, т.е. if должно быть true или false

const num = 50;
if (num < 49) {
  console.log("error");
} else if (num > 100) {
  console.log("Mnogo");
} else {
  console.log("ok!");
}
// Условие с подусловием. А то, что ниже - спрашивают на собесах.

num === 50 ? console.log("ok!") : console.log("error");

// тут грубо говоря вместо if ? вместое else:. Это - тернарный оператор, в его работе
// участвуют 3 аргумента. Прим. бинарного аргуента это 4+4. Унарного - +4
const numb = 50;

switch (numb) {
  case 49:
    console.log("wrong!");
    break;
  case 100:
    console.log("wrong!");
    break;
  case 50:
    console.log("Right");
    break;
  default:
    console.log("Not this time sry");
    break;
}

//Конструкция switch всегда идёт на строгое сравнение, в отличии if else.
//Т.е. без больше меньше.
//Deffult выдается, когда все ответы оказались не верными
//Точно так же можно работать и со строчным типом.

/*const hamburger = true;
const fries = true;
if (hamburger && fries) {
  console.log("KAK VKUSNA");
}
console.log(hamburger && fries);
//Результат логических операций - булиановое значение(true или false)
*/
const hamburger = 3;
const fries = 1;
if (hamburger === 3 && fries === 1) {
  console.log("Все сыты");
} else {
  console.log("Мы уходим");
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0);
console.log(0 && "asdaf");
//как и ранее писалось, результат логических операций - булиновое значение.
//а false значение у нас - 0,null, undefined,NaN.
//т.е. в первом примере у нас true и false - получаем false
//во втором - true и true - получаем true. Оператор возвращает последнее значение в выражении
//в третьем - false. Оператор возвращает первое неправдивое выражение
//в четвертом - false. Оператор возвращает первое неправдивое выражение.
//ОЧЕНЬ ВАЖНО - КАК ТОЛЬКО ОПЕРАТОР && ВИДИТ FALSE - ОН ЕГО ВЫВОДИТ
//А ЕСЛИ ВСЁ ВЫРАЖЕНИЕ TRUE - ВЫВОДИТ ПОСЛЕДНЕЕ
//Что бы было проще запомнить - И(&&) ЗАПИНАЕТСЯ НА ЛЖИ А ИЛИ(||) НА ПРАВДЕ

let johnReport,
  alexReport,
  samReport,
  mainreport = "done";
console.log(johnReport || alexReport || samReport || mainreport);
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log((!1 && 2) || !3);
console.log(25 || (null && !3));
console.log((5 === 5 && 3 > 1) || 5);
