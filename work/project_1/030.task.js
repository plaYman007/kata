"use strict";

// Подключаем стили
import "./style.css";

// Получаем ссылки на элементы на странице
const textarea = document.getElementById("text"); // Поле ввода текста
const btn = document.querySelector(".btn"); // Кнопка для обработки текста
const result = document.querySelector(".result"); // Место для отображения результата
const butn = document.querySelector(".butn"); // Кнопка для копирования результата

// Слушатель события для кнопки, которая обрабатывает текст
btn.addEventListener("click", function () {
  const text = textarea.value; // Получаем текст из поля ввода

  // Функция для преобразования текста (сжимаем одинаковые символы)
  function converse() {
    let res = ""; // Переменная для хранения результата
    let count = 1; // Счетчик повторений символа

    // Проходим по строке с 1-го индекса, начиная со второго символа
    for (let i = 1; i < text.length; i++) {
      if (text[i] === text[i - 1]) {
        // Если текущий символ равен предыдущему, увеличиваем счетчик
        count++;
      } else {
        // Если символы разные, добавляем в результат символ и его количество (если больше 1)
        res += (count > 1 ? count : "") + text[i - 1];
        count = 1; // Сбрасываем счетчик
      }
    }

    // Добавляем последний символ и его количество (если оно больше 1)
    res += (count > 1 ? count : "") + text[text.length - 1];

    return res; // Возвращаем сжатую строку
  }

  // Отображаем результат в соответствующем элементе на странице
  result.textContent = converse();
});

// Слушатель события для кнопки копирования результата в буфер обмена
butn.addEventListener("click", function () {
  const textToCopy = result.textContent; // Получаем текст для копирования (из результата)

  // Копируем текст в буфер обмена
  navigator.clipboard.writeText(textToCopy);

  // Меняем текст и стиль кнопки, чтобы показать, что копирование успешно
  butn.textContent = "Скопировано!";
  butn.style.backgroundColor = "green";

  // Через 2 секунды возвращаем кнопку в исходное состояние
  setTimeout(function () {
    butn.textContent = "Скопировать";
    butn.style.backgroundColor = "dodgerblue"; // Восстанавливаем первоначальный цвет
  }, 2000);
});

////////////////////////////////////////////////////////////////////////////////

//Найди площадь круга
function plaYman(r) {
  let S = 3.14 * r ** 2;
  return S;
}
console.log(plaYman(3));

//Функция, которая создает хтмл документ и удаляет его
function html(tag, id, text) {
  const elem = document.createElement(tag);
  elem.id = id;
  elem.innerText = text;
  return elem;
}
const newelement = html("h1", "header1", "some shit");
console.log(newelement);

//Сломанные ссылки
const brokenLink = ["vk", "discord", "youtube"];
const fixLinksArray = (linkArray) => {
  const correctLinks = [];
  linkArray.forEach(function (brokenLink) {
    const fixedLink = "https://" + brokenLink + ".com";
    correctLinks.push(fixedLink);
  });
  return correctLinks;
};
console.log(fixLinksArray(brokenLink));
//Или проще
const broken = ["vk", "dis"];
const fixed = (linkArray) => {
  const correct = [];
  linkArray.forEach((broken) => correct.push("https://" + broken + ".com"));
  return correct;
};
console.log(fixed(broken));

//Таски с циклами с урока
//1) Напишите программу, которая выводит на экран цифры от 1 до 10
for (i = 1; i < 11; i++) {
  console.log(i);
}
//2)Программа, которая запрашивает у пользователя число, и выводит на экран таблицу умножения этого числа от 1 до 10
function sum(x) {
  for (i = 1; i < 11; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
  }
  return x;
}
console.log(sum(2));
//3)Программа, которая запрашивает число и находит сумму всех чисел от 1 до этого числа
let y = 5;
for (i = 1; i <= y; i++) {
  console.log(`${y}+${i}=${y + i}`);
}
//4)Программа, которая запрашивает у пользователя строку и выводит в обратном порядке
function reverse(word) {
  return word.split("").reverse().join("");
}
console.log(reverse("abpd"));

//5)Прогрмма, которая запрашивает число, и находит все просыте числа меньше или равные этому чилсу
function prostieChisla(c) {
  for (let i = 2; i <= c; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        // Если i делится на j, то оно не простое
        isPrime = false;
        break; // Прерываем цикл, так как нашли делитель
      }
    }

    if (isPrime) {
      console.log(i); // Если число простое, выводим его
    }
  }
}

console.log(prostieChisla(15));

function sum(arr, n) {
  let s = [];
  for (i = 0; i < arr.length; i++) {
    s.push(arr[i] * n);
  }
  return s;
}
console.log(sum([1, 2, 3], 2));

function sum(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  if (arr.length === 0) {
    return 0;
  } else {
    let b = a / arr.length;
    return b;
  }
}

console.log(sum([]));

function sum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(sum([-1, 1, 2, 3]));

function sum(arr, n) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * n);
  }
  return array;
}
console.log(sum([1, 2, 3], 4));

function findMax(arr) {
  let a = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (a < arr[i]) {
      a = arr[i];
    }
  }
  return a;
}
console.log(findMax([4, 2, 3]));
