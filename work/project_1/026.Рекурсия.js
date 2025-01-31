"use strict";

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x; //result = x * result - та же запись
  }
  return result;
}
console.log(pow(2, 5));
//Выше - это функция возведения в степень, x в n-ую. Теперь запишем это по другому.

function pow(y, j) {
  if (j === 1) {
    return y;
  } else {
    return y * pow(y, j - 1); //соотвтетственно,y умножается на y в степени j-1 - так эта надпись гласит.
  }
} //Короче, вот это и есть рекурсия, когда функция запускает сама себя для каких-то действий.
//Шаг рекурсии - запуск функции, но уже с вложенным значением, т.е. y,j-1
//Глубина рекурсии - общее количество вложенных вызовов вместе с самым первым. Тут, это - j

////////////////////////////////////////////////////////////пиздец..//////////////////////////////////////////////////////////////

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
  },
};
//Задача - посчитать общий процент прогресса студентов. Делаем двумя методами - циклом и рекурсией.
function getTotalProgressByItteration(data) {
  let total = 0; //Будет нашим общим прогрессом, когда мы складываем вместе 100,60,20,18.10
  let students = 0; //соответственно, кол-во студентов.
  for (let course of Object.values(data)) {
    //Object.values Дословно - мы превращаем объект в массив со значениями Т.е. js теперь будет [name:John] и т.д.
    if (Array.isArray(course)) {
      //Array.isArray - проверка, если объект является массивом - выдаёт true, если нет - false
      students += course.length; //т.к. это массив - у него есть свойство длины, поэтому так писать можно

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }
  return total / students;
}
console.log(getTotalProgressByItteration(students));

//а теперь напишем с рекурсией.
function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += course[i].progress;
    }
    return [total, data.length]; //Соответственно, в функции считаем число всех учеников, это когда натыкаемся на массив
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArray = getTotalProgressByRecursion(subData);
      total[0] += subDataArray[0];
      total[1] += subDataArray[1];
    }
    return total;
  }
}

const result = getTotalProgressByItteration(students);
console.log(result[0] / result[1]);
