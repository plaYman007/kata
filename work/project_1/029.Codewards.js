//8kyu Перевернуть строку

function reverseWords(str) {
  return str.split("").reverse().join("");
}
console.log(reverseWords("plaYman"));

//8kyu Чет или нечёт?

function evenOrOdd(number) {
  if (number % 2 !== 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
evenOrOdd(13);

//8kyu Возвращаем отрицательное

function makeNegative(num) {
  return num > 0 ? -num : num;
}
console.log(makeNegative(-3));

//8kyu Сумма положительных чисел

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
const result = positiveSum([3, -4, 7, 12]);
console.log(result);

//8kyu Делаем из чилса - строку

function numberToString(num) {
  return num.toString();
}
console.log(544);

//8kyu Boold to string
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//8kyu Удаление 1 и последнего элемента

function removeChar(str) {
  let i = str.length;
  return str.slice(1, i - 1);
}
console.log(removeChar("Яебалсобак"));

//7kyu Выделяем все гласные из строки
function getCount(str) {
  let count = 0;
  let vowels = "aeiou";
  for (let l of str) {
    if (vowels.includes(l)) {
      count++;
    }
  }
  return count;
}
console.log(getCount("FDa"));

//7kyu Убираем гласные из строки
function disemvowel(str) {
  let vowels = /[aeiou]/g;
  str = str.replace(vowels, "");
  return str;
}
console.log(disemvowel("Akkafs"));

//7kyu Складываем строки
function combine(objA, objB) {
  const result = { ...objA }; // Копируем objA
  for (const key in objB) {
    if (result.hasOwnProperty(key)) {
      // Если ключ уже существует в objA, складываем значения
      result[key] += objB[key];
    } else {
      // Если ключа нет в objA, добавляем его
      result[key] = objB[key];
    }
  }
  return result;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB));

//

//1)Напиши функцию, которая принимает число N и возвращает сумму всех чисел от 1 до N

function sum(N) {
  let summary = 0;
  for (i = 0; i < N; i++) {
    summary += i; // Добавляем значение i к сумме
  }
  return summary;
}
console.log(sum(10));

//2)Найти минимальное число в массиве

function minimal(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minimal([5, 2, 3, 4, 5]));

//3)одсчет гласных в строке
function countVowels(str) {
  const vowels = "aeiouAEIOU"; // Строка с гласными буквами
  let count = 0; // Переменная для подсчета гласных

  // Проходим по каждому символу строки
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      // Если символ — гласная
      count++; // Увеличиваем счетчик
    }
  }

  return count; // Возвращаем количество гласных
}

// Пример использования
console.log(countVowels("hello world"));

//4)Перевернуть строку с циклом

function reverseString(str) {
  let reversed = ""; // Переменная для перевернутой строки

  // Проходим по строке с конца к началу
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Добавляем символ в результат
  }

  return reversed; // Возвращаем перевернутую строку
}

// Пример использования
console.log(reverseString("hello"));

//5)Найти минимальное число с циклом
function findMin(arr) {
  let min = arr[0]; // Предположим, что первый элемент — минимальный

  // Проходим по массиву с 1-го элемента
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // Если текущий элемент меньше минимального
      min = arr[i]; // Обновляем минимальное значение
    }
  }

  return min; // Возвращаем минимальное число
}

function countPositivesSumNegatives(input) {
  input = [];
  let a = 0;
  let b = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      return a;
      count++;
    } else {
      b += input[i];
    }
  }
  return b;
}

function findAverage(array) {
  let a = 1;
  for (let i = 0; i < array.length; i++) {
    array[i] += array[i];
    a = array[i] / array.length;
  }
  return a;
}
console.log(findAverage([5, 9, 14]));

function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, 2, 3, -4, 5]));

function findNeedle(haystack) {
  let a = 0;
  for (let i = 0; i < haystack.length; i++) {
    if ((haystack[i] = "needle")) {
      a = "found the needle at position" + " " + [i - 1];
    } else {
      a = "Your function didnt return anything";
    }
  }
  return a;
}
console.log(findNeedle([1, 2, NaN, "suka", 555, 3423, "needle", "need"]));

function findAverage(nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count = sum / nums.length;
  }
  return count;
}
console.log(findAverage([1, 2, 3, 4]));

function mango(quantity, price) {
  if (quantity % 3) {
    return (quantity - 1) * price;
  } else {
    return quantity * price;
  }
}
console.log(mango(2, 3));
