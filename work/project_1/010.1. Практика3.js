"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done!");
    } else {
      console.log("error");
      i--; //оператор декримента, возвращаемся на цикл назад к const a и т.д.
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотренно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("ошибка");
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDb(personalMovieDB.private);

function writeYourGenres() {
  for (let k = 1; k <= 3; k++) {
    personalMovieDBl.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${k}`
    );
  }
}
writeYourGenres();

console.log(personalMovieDB);
