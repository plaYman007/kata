"use strict";
const options = {
  name: "Test",
  length: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(options.name);
delete options.name; // тупо удаляем ненужное в объекте
console.log(options);
console.log(options["colors"]["border"]); // такая охуительная запись нужна, если мы хотим достучаться до объекта внутри объекта
console.log(object.keys(options)); // отображает все ключи в объекте, т.е. name,length, и т.д. В ВИДЕ МАССИВА!
//А, посколькоу это у нас становится массивом, мы можем измерить его длину. И делается это так - console.log(object.keys(options).length);
const { bg, border } = options.colors;
console.log(border); // - этот метод заменяет options['colors']['border'] - позволяя сразу обратиться в объекту в объекте.

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
