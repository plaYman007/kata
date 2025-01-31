"use strict";
//defer - атрибут сообщает браузеру, что он должен продолжать обрабатывать страницу, и загружать скрипт в фоном режиме, а затем его запустить, когда он загрузится
//Скрипты defer никогда не блокируются
//Скрипты defer всегда выполняются, когда наше DOM дерево уже готово.
//это нужно тогда, когда применяется несколько скриптов, что бы они работали последовательно

const p = document.querySelectorAll("p");
console.log(p);
///////////////////////
//async - выполняется сразу же. Он должен не зависить от DOM структуры, и не зависить от других скриптов.
//Как правило, async применяют в таких скриптах как метрики, сборы данных с юзера, короче всё то, что от действий на самом сайте не зависит

const script = document.createElement("script");
script.src = ".js/work/project_1/test.js";
script.async = false; //Изначально добавленный скрипт ведёт себя как async. Соответственно, мы это предотвращаем, и он будет вести себя как обычный скрипт
document.body.append("script");

function loadscript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append("script");
}

loadscript(".js/work/project_1/test.js");
loadscript("js/work/project_1/028.somejs.js");
