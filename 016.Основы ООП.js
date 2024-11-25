"use strict";
let str = "some";
let strObj = new String(str);
console.log(typeof str); //typeof - тип данных. в Первом случае будет string, во втором - Object(объект)
console.log(typeof strObj);
//////////////
const soldier = {
  health: 400,
  armor: 100,
};
const john = {
  health: 100,
};

john.__proto__ = soldier; //Устаревший метод. Мы установили прототипов Джона - солдата
//console.log(john); //будет результат - { health: 100 }, т.е. тип так и останется объектом
console.log(john.health); //А вот тут будет результат - 100. Мы получаем результат прототипа - soldier.
///
//Object.setPrototypeOf(john, soldier);//Первым указываем то, к кому хотим применить прототип. Вторым- от кого перенять.
/////////// НИЖЕ - КАК ПИСАТЬ ПРАВИЛЬНО, ПИЗДА ОН ЗАЕБАЛ////////////////////
const john = Object.create(soldier); //Создаем новый объект john, который будет прототипно наследоваться от soldier;
