"use strict";

console.log("arr" + "-object");
console.log(4 + "- object"); //+ это обычное сложение

let incr = 10,
  decr = 10;
incr++;
decr--; // или ++incr ++decr. в самое console нужно прописывать ПЕРЕД, что бы был результат(это если не прописываем значение ДО консоли)
console.log(incr);
console.log(decr);

console.log(5 % 2); //% - остаток от деления первого числа на второе.

console.log(2 * 4 == 8); //== - сравнение, выдает truse или false. == так же будет работать, если значение после имеет строчный тип
console.log(2 * 4 === "8"); //=== - строгое сравнение, если тип данных другой - выдаст false

/*&& Оператор И  || Оператор ИЛИ.Соответственно && выдает true когда все элменты true, если хотя бы один false - значит false. 
|| наоборот - выдаст true когда хотя бы один true
! - оператор отрицания, что было true станет false. Аналогично его можно ставить перед равенством. В таком случае != это не равно*/

const isChecked = true,
  isClose = true;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked && !isClose);
