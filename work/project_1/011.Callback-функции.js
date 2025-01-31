"use strict";
function first() {
  setTimeout(function () {
    console.log(1);
  }, 500); //Обращаемся к функции, что бы она задержала выплоление на 500 мс
}

function second() {
  console.log(2);
}
first();
second();

//Callback - функция, которая должна быть выполнена после того, как другая завершит свое выполнение

function learnjs(lang, Callback) {
  console.log(`Я учу:${lang}`);
  Callback();
} //После того как выполнится действие функции lang - выполнится действие callback

learnjs("Javascript", function () {
  console.log("Я прошёл этот урок!");
});
