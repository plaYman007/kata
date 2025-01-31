"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", "");
  const b = prompt("На сколько оцените его", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done!");
  } else {
    console.log("wrong");
    i--; //оператор декримента, возвращаемся на цикл назад к const a и т.д.
  }
}

if (personalMovieDB.count <= 10) {
  console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("ошибка");
}

console.log(personalMovieDB);
