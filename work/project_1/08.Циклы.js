"use strict";

let num = 50;
while (num < 55) {
  console.log(num);
  num++;
}
//------------------------
do {
  console.log(num);
  num++;
} while (num < 55);
//--------------------------
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break; //полностью останвливает цикл, будет 1 2 3 4 5
    continue; //наоборот, пропускаем шаг, будет 1 2 3 4 5 7 8 9 и т.д.
  }
  console.log(i);
}

for (let q = 0; q < 3; q++) {
  console.log(q);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}
//Сначала работает первый цикл, выдает q=0, потом переключается на второй
//И работает ДО ОКОНЧАНИЯ УСЛОВИЯ, т.е выдает j=0,1,2. Затем цикл проверяет q++
//т.е. q=1, и заново проверяет j. Итого мы видим: 0 0 1 2  - первый цикл 1 0 1 2 - второй
//2 0 1 2 - третий

let result = "";
const length = 7;

for (let a = 1; a < length; a++) {
  for (let s = 0; s < a; s++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

first: for (let q = 0; q < 3; q++) {
  console.log(`First level: ${q}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}
