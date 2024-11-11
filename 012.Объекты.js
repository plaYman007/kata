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

//console.log(options.name);
//delete options.name; //тупо удаляем ненужное в объекте
//console.log(options);

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
