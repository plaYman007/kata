"use strict";

console.log(document.body); //выводим в консоль в браузере всё, что внутри body, аналогично с head, и так далее
console.log(document.documentElement); //в целом к HTML обращаемся.
console.log(document.body.childNodes); //Узлы, которые являются детьми у body, т.е. содержимое страниц в типовом виде.
console.log(document.body.firstChild); //Соответственно, первый элемент, в нашем случае это text(т.к. он является переносом с одной строки на другую)
console.log(document.body.lastChild); //последний элемент, т.е. наш script, который подключается к странице
console.log(document.querySelector("#current").parentNode.parentNode); //соответственно, обращаемся к родителю данного элемента
console.log(document.querySelector('[data-current="3"]')); //обращение к дата элементу
console.log(document.querySelector('[data-current="3"]').nextSibling); //получаем следующий элемент. Тут будет просто текстовая строка, т.к. после data current 3 есть перенос строки
//аналогично и .previousSibling.
//А ВОТ БЛЯТЬ ЧТО БЫ ТАКОГО НАХУУУУУУЙ НЕ ПОЛУЧАЛОСЬ, И МЫ ПОЛУЧАЛИ ДОСТУП К ПРЕДЫДУЩЕМУ ЕБУЧЕМУ ЭЛЕМЕНТУ, ПИШЕМ ВОТ ТААААААААК.
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Вот так мы получим доступ к следующему элементу, т.е. к 4
//АХАЗЗАХАХАЗАЩЗвав сукаааа к parentNode тоже есть аналог
console.log(document.querySelector("#current").parentElement); //Опять же, получаем доступ к родительскому элементу

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild); //Аналогично сука..

for (let node of document.body.childNodes) {
    if (node.nodeName === '#text'{
        continue;
    }
  console.log(node);
}
