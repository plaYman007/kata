"use strict";
const btn = document.querySelector("button");
//btn.onclick = function () {
//alert("click");
//}; //Соответственно, после клика на кнопку будет выполнена определенная функция.
//Однако, такой метод, УДИВИТЕЛЬНО БЛЯТЬ, не применяется, т.к. если нам потребуется сделать второе действие с этой кнопкой, первое - сотрётся

btn.addEventListener("click", () => {
  alert("click");
}); //Добавляем обработчик события, т.е. "слушатель". Первым аргументом передаём НАЗВАНИЕ события. Вторым - callback функцию.
//Таким образом, теперь мы можем задавать несколько действий на одно событие.
btn.addEventListener("click", () => {
  alert("Second click");
});

btn.addEventListener("mouseenter", (e) => {
  e.target.remove(); //Соответственно, тут мы ремуваем нашу кнопку по наведению курсора мыши на неё.
});

///

const deleteElement = (e) => {
  e.target.remove();
};

btn.addEventListener("click", deleetElement); //Соответственно, ещё один вариант написания. После того, как мы КЛИКНЕМ на эту кнопку - выполнится функция.
//А эта функция - удаляет кнопку.
///
const overlay = document.querySelector(".overlay");
const deletElement = (e) => {
  console.log(e.target);
  console.log(e.type);
};
btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);

///
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault(); //отменяем стандартные действия, отменяем переход по ссылке.
  console.log(event.target);
});
