"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circles");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
//Во-первых - ВСЕ оборачиваем в виде строки, т.е. прим. box.style.width=500 - неверно
//Должно быть box.style.width="500";
btns[1].style.borderRadius = "100%"; //Соответственно, вторая кнопка меняется.
//
circles.style.backgroundColor = "red"; // - так не сработает, опять же, потому
//что мы обращаемся НЕ К КОНКРЕТНОМУ ЭЛЕМЕНТУ, А К ПСЕВДОМАССИВУ!

box.style.cssText = "background-color:blue;width:500px"; //тупо задаем стили для данного элемента
//

/*for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}*/

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

///

const div = document.createElement("div"); //создаем новый div, помещаем его в div
div.classList.add("black"); //создаем класс для элемента div
document.body.append(div); //Мы берем тег body - и в КОНЕЦ него добавляем тег div
//он вставляется в самый конец body.
//document.querySelector(".wrapper").append(div); //тут мы добавляем наш div КОНКРЕТНО в div Wrapper.

wrapper.append(div); //добавляем в КОНЕЦ нашего WRAPPER
//wrapper.appendChild(div);Устаревшее - тоже самое, что и выше

wrapper.prepend(div); //Соответственно, добавляем в НАЧАЛО WRAPPER
hearts[0].before(div); //мы ставим div ПЕРЕД первым элементом hearts
hearts[0].after(div); //ПОСЛЕ первого элемента hearts
//wraper.insertBefore(div, hearts[0]);Устаревшее - Первое это то, что вставляем. Второе - то, ПЕРЕД ЧЕМ вставляем.
//
circles[0].remove(); //удаляет первый элемент circles
//wraper.removeChild(Hearts[1]); - то же, что и выше
hearts[0].replaceWith(circles[0]); //вместо первого элемента hearts мы вставляем первый элемент cicrles.
//wraper.replaceChild(circles[0],hearts[0]); -то же, чо и выше.

//

div.innerHTML = "Hello world"; //добавляем в наш div текст.
div.innerHTML = "<h1>Hello world</h1>"; //так же можно добавлять и заголовки, и прочее в структуру html.
//div.textContent='hello'// тоже самое, НО! - он работает только с текстом, без структур.
div.insertAdjacentHTML("afterbegin", <h2>'ello'</h2>); //добавляем в наш div h2. Указываем, где вставить - afterbegin,afterend и т.д.
