/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv"); //1 ЗАДАЧА
adv.forEach((item) => {
  item.remove;
}); //Опять же, т.к. это массив - мы не можем удалить просто коммандой adv remove(), поэтому нужно прибегнуть к этому.

const poster = document.querySelector(".promo__bg"); //2 ЗАДАЧА
const genre = poster.querySelector(".promo__genre"); //3 ЗАДАЧА
genre.textContent = "драма"; //2 ЗАДАЧА
poster.style.backgroundImage = "url('img/bg.jpg)"; //3 ЗАДАЧА

//4 ЗАДАЧА
const movieList = document.querySelector(".promo__interactive-list"); //Обращаемся ТОЛЬКО к первому элементу, т.к. у всего массива не будет свойства InnerHTML
movieList.innerHTML = ""; //Такой вариант тоже возможен. Мы записываем в наш элемент ничего - значит, элемент очистится.
movieDB.movies.sort(); //Сортируем всё по алфавиту
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>`; //a=a+1 ИДЕНТИЧНО a+=1
});
