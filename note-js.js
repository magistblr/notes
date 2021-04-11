"use strict";

//  типы данных 

// "use strict";  строгий режим, следит за правильным написанием кода, например написано ли слово let перед переменной
console.log(name);

var name = 'Max'; //устаревший режим, переменная объявлена до того, как была  создана  (выведет undefined); var функциональная переменная, а let и const только в своих блоках

let casino = 'Katal'; // изменяемамя переменная

const pen = 'Red'; // неизменяемая переменная, можно изменить только если это объект


console.log('string' * 9); //NaN не числовое выражение

const persone = `lorem`; // бэктики, косые ковычки,

null // несуществующая переменная

undefined // когда переменная объявлена, а значение этой переменной отсутствует

Infinity // бесконечность, если 2 / 0

BigInt   //числа, которые больше 2в53 или 9007199254740991 или меньше чем -2в53


//  типы данных 



// операторы 

"use strict";

x = 5 * 4;          //числа 5 и 4 это операнды


let x = 1;

x = -x;                 // "-" это унарный оператор, применяется к одному операнду
alert( x );



let x = 1, y = 3;           // бинарный оператор применяется к двум операндам
console.log( y - x ); // 2, бинарный минус вычитает значения


console.log('arr' + " - object");
console.log(4 + +'5');                   //  + перед строкой превращает строку в число

let incr = 10,
    decr = 10; //decr - это просто название переменной

// ++incr; //оператор инкремента, увеличение на 1 (префикс)
// --decr; //оператор декремента, уменьшение на 1 (префикс)

// incr++; //оператор инкремента, увеличение на 1 (постфикс)
// decr--; //оператор декремента, уменьшение на 1 (постфикс)


console.log(incr++); //если стоит постфикс, сначало возвращает 10, затем прибавляет 1
console.log(--decr); //если стоит префикс, сначало прибавляет, затем возвращает

console.log(153 % 50); //выводит остаток от деления 150 / 50 = 3, остаток = 3

console.log(2*4 == '8'); // сравнение, можно сравнивать числа со строками, в данном случае true
console.log(2*4 === '8'); // строгое сравнение, можно сравнивать только одинаковые типы данных, будет false

let isChecked = false,
    isClose = false;

console.log(isChecked && isClose); // оператор "и", будет true только когда оба значения являются true

console.log(isChecked || isClose); // оператор "или", будет true если хотя бы один из аргументов является true

console.log(isChecked || !isClose); // оператор ! "отрицания", меняет значения на противоположное

console.log(2+2*2 != '6'); // неравенство
console.log(2+2*2 !== '6'); // строгое неравенство


// операторы 



// условия 

const num = 50;
if (num < 49) {
    console.log('Error');
}   else if (num > 100) {
    console.log('Много');
}   else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');           //тернарный оператор, позволяет экономить

const num = 50;                             //конструкция switch аналогична if else
switch (num) {
    case 49:
        console.log('Неверно');
        break;                              //прерывает выполнение цикла
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Ок');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

// условия 

//циклы 

const num = 50;

let num = 50;

while (num <= 55) {                 //пока num <= 55 то цикл будет выполняться
    console.log(num);               //выводим num
    num++;                          //прибавляем 1 к num
}

do {                                //сначала производим действие, затем проверяется условие
    console.log(num);
    num++;
}
while (num <= 55);


for (let i = 1; i < 8; i++) {          //стандартный цикл for
    console.log(i);
}

for (let i = 1; i < 8; i++) {           //с использованием условия, либо break либо continue
    if (i === 6) {
        break;
        // continue;
    }
    console.log(i);
}

//циклы 


//функции 

let num = 20;

function showFirstMessage() {            //function declaration, можно вызвать в любой момент, функция объявлена еще до вызова
    console.log("Hello World!");
    let num = 30;                        //объявляем переменную внутри функции, работать она будет только внутри
    num = 10;                           //если переменная не объявлена в функции, будет использована глобальная переменная, значение поменяется так же и глобально
    console.log(num);
}

showFirstMessage();
console.log(num);

function calc(a, b) {
    return (a + b);                     //return замыкает функцию и возвращает значение a + b во внешний мир, после этой команды дальнейший код работать не будет
    console.log('2313');                //мертвый код
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;

    return num;                         //возвращает результат во внешний мир
}

const anotherNum = ret();               //записываем результат функции в новую переменную
console.log(anotherNum);

const logger = function () {            //function expression - главное отличие от declaration, фукция создается только тогда, когда js дойдет до нее, нельзя вызвать до объявления
    console.log("Hello");
};

logger(); 


const calc = (a, b) => {                        //стрелочная функция
    console.log('1');
    return a + b;
};


const calc = (a, b) => a + b;                   //сокращенный вариант
console.log(calc());

//функции 


//callback функции 

function first() {
    setTimeout(function(){                      //искуственная задержка, чтобы симулировать порядок вывода данных
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {          //задали 2 аргумента (callback может называться как угодно)
    console.log(`Я учу: ${lang}`);         //сначала вызывается эта строка
    callback();                             //затем вызывается второй агрумент в виде функции
}




learnJS('JavaScript', function() {              //это все второй аргумент в виде анонимной функции
    console.log('Я прошёл этот урок');
});


//callback функции 


//методы и свойства строк и чисел 

const str = "test";
const arr = [1, 2, 4];


console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));                //покажет с какого индекса начнется fruit
console.log(fruit.indexOf("q"));                    //покажет -1, если не найдет значение


const logg = "Hello world";

console.log(logg.slice(6, 11));                //вырезат определенный промежуток
console.log(logg.slice(6));                    //вырезат с определенного индекса и до конца
console.log(logg.substring(6, 11));            //тоже самое, не поддерживает отрицательные значения
console.log(logg.substr(6, 5));                //второй аргумент показывает число символов после 6


const num = 12.2;
console.log(Math.fixed(num));                   // округление числа до целых

const test = "12.2px";
console.log(parseInt(test));                    //округляет и преобразует строку в число
console.log(parseFloat(test));                  //преобразовует строку в число


//методы и свойства строк и чисел 


//объекты, деструктуризация объектов 

const options = {
    name: 'test',     //ключ(свойство): 'значение'
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");      // методы - это функции, их можно создавать, а не только использовать встроенные в js
    }
};

options.makeTest();

console.log(Object.keys(options).length);    //метод length показывается кол-во ключей в объекте (удобно, чтобы не писать циклы и счетчиков)

console.log(options.name);
console.log(options["colors"]["border"]);     //обращение к объекту внутри объекта

delete options.name;   // удалили ключ name

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);    //перебор ключей объекта в объекте
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);      //перебор ключей объекта
    }
}


// ------------------------деструктуризация

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;  //  const {создаем переменную из ключей} = обращение к объекту;
console.log(bg);

// ------------------------деструктуризация

//объекты, деструктуризация объектов 




//массивы 

const arr = [2, 3, 6, 8, 10];

for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);                         // перебор чисел через метод for
}

for (let i of arr) {                                //перебор чисел через метод for of
    console.log(i);
}

//--------------------

const arr = [2, 3, 6, 8, 10];


arr.forEach(function(item, i, arr) {
    console.log(`${i}; ${item} внутри массива ${arr}`);   //перебор массива с помощью callback функции, где function(значение элемента, индекс, переменная)
});

//---------------

const arr = [2, 3, 6, 8, 10];
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


const str = prompt("", "");
const products = str.split(", ");               // берем данные от пользователя в виде строки через , и выводим в виде массива
products.sort();                                // метод сортирует массив в алфавитном порядке
console.log(products.join('; '));               // склеивает массив через ;

products.sort();                            // пустой sort сортирует все как строки
products.sort(compareNum);                  // передали функцию


//массивы 






//передача по ссылке и по значению 
//https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
let a = 5;
    b = a;                          //при работе с примитивами, идет передача по зачению

b = b + 5;

const obj = {                       //при работе с объектами (сложными данными), идет передача по ссылке
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);                  //когда идет передача по ссылке, то изменяется и новый объект и старый
console.log(obj);

//передача по ссылке и по значению 






//основы ОПП 

let str ="some";
let strObj = new String(str);         //старый метод, лучше не использовать

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100                         //т.к. soldier это прототип john'а, то тогда можно john унаследует все св-ва своего прототипа 
};

jonh.__proto__ = soldier;               //старый метод, лучше не использовать

Object.setPrototypeO(john, soldier);    //актуальный метод

const jonh = Object.create(soldier);    //сокращенный вариант создания объекта и назначение ему прототипа

console.log(john.armor);


//основы ОПП 









//динамическая типизация 
// To String

//1)
console.log(typeof(String(4)));
console.log(typeof(String(null)));              //превращает любой тип данных в строку
//2)
console.log(typeof(null + ''));                 //конкотенация, так же превращает в строку

const num = 5;

console.log(`https://vk.com/catalog/${num}`);   //пример

const fontSize = 26 + 'px';

//To Number
//1)
console.log(typeof(Number('4')));               //старый способ

//2)
console.log(typeof(+'4'));                      //унарный +

//3)
console.log(typeof(parseInt("15px", 10)));      //с помощью метода

//To boolean

0, '', null, undefined, NaN;         //false значения

//1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"44444"));

//динамическая типизация 

let num5 = 5;

let num6 = 6;

function sum(ar1, ar2) {
    ar1 - ar2;
    console.log(sum(5, 4));
};




//задачи на понимание с собеседования 

Какое будет выведено значение:
let x = 5; alert( x++ );

Чему равно такое выражение:
[ ] + false - null + true       //пустой массив это всегда строка, получается конкотенация строк, даллее отнимем null - это не математическое действие, значит будет NaN

Что выведет этот код:
let y = 1;
let x = y = 2;
console.log(x);

Чему равна сумма
console.log([ ] + 1 + 2);

Что выведет этот код:
alert( "1"[0] );                //вывод строки по индексу, т.е индекс 0 в строке 1 - это 1

Чему равно
2 && 1 && null && 0 && undefined    //и запинается на false, false в данном случае это null и выводит значение на котором запнулся, дальше код уже не имеет смысла читать
console.log(2 && 1 && null && 0 && undefined);

Есть ли разница между выражениями?
!!( a && b ) и (a && b);            //да, слева boolean, справа число


Что выведет этот код: 
console.log( null || 2 && 3 || 4);          //или запинается на true, 2 и 3 в итоге будет true, затем null или 3 будет 3, 3 или 4 выведет 3
console.log(3 || 4);

Правда ли что a == b
a = [1, 2, 3]; b = [1, 2, 3];          // сравниваем конкретно a и b, а не значения, значит не будет равно
console.log(a == b);

Что выведет этот код:
console.log(+"Infinity");                  //это числовой тип данных

Верно ли сравнение:
console.log("Ёжик" > "яблоко"  );                     //посимвольное сравнение unicode

Чему равно
0 || "" || 2 || undefined || true || falsе;         //2 это true, на ней код и остановится

//задачи на понимание с собеседования 


//получение элементов со страницы 

const box = document.getElementById('box');         //обращение по id (должен быть только 1 на странице), старый метод
console.log(box);

const btns = document.getElementsByTagName('button');       //обращение к тэгам, создается псевдомассив, изменять такой массив нельзя, необходимо обратиться к определенному элементу через индекс
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');      //ищем по классу,  . ставить не надо и так понятно, что класс ищем
console.log(circles);

const hearts = document.querySelectorAll('.heart');             //вытаскивает любой селектор (класс, ид, псевдокласс), если классов много снова получит пседомассив

hearts.forEach(item => {                                        //метод forEach выводит поочереди каждый класс
    console.log(item);
});

const oneHeart = document.querySelector('.heart');              //выводит только один элемент, причем тот, который будет первым в дом дереве
console.log(oneHeart);


//получение элементов со страницы 




//действия с элементами на странице 
                                                                    //создаем переменные и присваиваем им методы
const   box = document.getElementById('box'),                         //когда пишем document, то обращаемся ко всему документу
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),               // All берет и помещает в псевдомассив
        wrapper = document.querySelector('.wrapper'),               //берет первый элемент
        oneHeart = wrapper.querySelector('.heart');                 //когда пишем wrapper вначале, то обращаемся конкретно к элементу wrapper и класс header будет изменяться только в этом элементе

console.dir(box);                                           //смотри в браузере, можно увидеть стили, другие объекты, все шо надо

box.style.backgroundColor = 'blue';                         //изменяем св-во цвета, можно писать в любом формате rgb, hex, главное чтобы был тип строка
box.style.width = '500px';                                  //изменяем св-во ширины

box.style.cssText = `background-color: blue; width: 500px`; //изменяем сразу несколько св-в, ключевое слово cssText

btns[1].style.borderRadius = '100%';                        //обращение ко 2 кнопке на странице через индекс
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';               // т.к. массив изменить нельзя, значит используем цикл с перебором массива и изменяем каждый элемент отдельно (старый вариант, лучше не использовать)
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';                    //метод перебора forEach, callback функция далее
});

const div = document.createElement('div');                  //создаем элемент div, сохраняется в js, на странице ничего не появится
const text = document.createTextNode('Тут был я');          //создаем текст, появится на странице (метод используется крайне редко)

div.classList.add('black');                                 //присваиваем элементу div класс black и cохраняем в js

wrapper.append(div);                                        //метод вставляет элемент вконец, т.к. wrapper уже был присвоен метод querySelector, то пишем такой синтаксис (см. вначале)
wrapper.appendChild(div);                                   //тоже самое
document.querySelector('.wrapper').append(div);             //такой синтаксис берем, если метод не был вынесен ранее или когда используем один раз
wrapper.prepend(div);                                       //метод вставляет вначало
hearts[0].before(div);                                      //используем heart по индексу берем первый элемент и вставляем перед ним div
wrapper.insertBefore(div, hearts[0]);                       //старый способ, делает тоже самое
hearts[0].after(div);                                       //тоже, только после
circles[0].remove();                                        //удаляет элемент
wrapper.removeChild(hearts[1]);                             //старый способ, делает тоже самое
hearts[0].replaceWith(circles[0]);                          //заменяет один элемент, другим, элемент heart0 на circles0
wrapper.replaceChild(circles[0], hearts[0]);                //старый способ, делает тоже самое

div.innerHTML = "<h1>Hello World</h1>";                     //вставляем html структуру, в данном случае берем заголовок первого порядка, а значит добавятся и стили к нему
div.textContent = "<h1>Hello World</h1>";                   //работает только с текстом, html структура для наглядности, она работать не будет
//желательно использовать метод textContent т.к. при вводе данных от пользователя, может сломаться верстка если он введет html структуру или чтото еще
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');       //метод позволяет вставлять html непосредственно куда нам нужно



//действия с элементами на странице 



//события и их обработчики 

const   btn = document.querySelector('button'),
        btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');


btn.onclick = function () {                     //обработчик событий при клике на кнопку
    alert('Click');
};

btn.onclick = function () {                     //если будет 2 аналогичных обработчика, то выполнится последний
    alert('Second click');
};

btn.addEventListener('click', () => {           //добавили обработчик событий, применили действие click аналогично onclick, далле callback функция 
    alert('Click');
});

btn.addEventListener('mouseenter', () => {      //другое действие mouseenter при наведении на кнопку
    console.log('Hover');
});

btn.addEventListener('mouseenter', (e) => {     //добавляет первым аргументом объект event для того, чтобы понять какое событие произошло
    console.log(e);
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);                      //target одно из св-в event, показывает на каком элементе произошло событие (см. в консоли)
    e.target.remove();                          //указываем, что произойдет с элементом при наведении на него, в данном случае удаляем его
});

const deleteElement = (e) => {                  //создали функции с именем, можем использовать ее сколько угодно
    console.log(e.target);
};

btn.addEventListener('click', deleteElement);   //добавлили обработчик событий, при действии click заработает функция
btn.removeEventListener('click', deleteElement);    //удалили обработчик

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;                                            //после выполнения функции, к счетчику добавится 1
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);        //условие для обработчика при котором он удалится
    }
};                                                              //такая конструкция ниобходима для одинарного использования обработчика

btn.addEventListener('click', deleteElement);




const deleteElement = (e) => {
    console.log(e.target);                          //в данной функции будет выполнено 2 одинаковых события, чтобы этого не произошло применяем заменяем (e.target) на (e.currentTarget)
    console.log(e.type);
};

btn.addEventListener('click', deleteElement);
overlay.removeEventListener('click', deleteElement);





btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);               //используем для применения клика для каждой кнопки в массиве методом перебора
});



btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});      //опция once применяется для одинарного использования клика на кнопку
});



const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();                                     //обнуляем стандартные действия браузера (переход по ссылке)
    console.log(event.target);
});


//события и их обработчики 





//навигация по DOM, data-атрибуты, преимущество for/of          

console.log(document.head);                         //обращение к тегу head
console.log(document.documentElement);              //обращение к html элементу
console.log(document.body.childNodes);              //обращаемся к детям body и получаем их в виде псевдоколлекции нодов, в которых есть узлы и элементы (те ноды, которые в псевдомассиве - являются статическими, остальные уже динамические. text является переносом и узлом)
console.log(document.body.firstChild);              //выдаст первую ноду
console.log(document.body.lastChild);               //последнюю

console.log(document.querySelector('#current').parentNode.parentNode);      //вытащили current, затем получаем родителя и затем родителя родителя, именно любую ноду (текст, элемент, комментарий)
console.log(document.querySelector('#current').parentElement);              //обращаемся конкретно к элементу

console.log(document.querySelector('[data-current="3').                     //обращение по data атрибуту
nextElementSibling);

for (let node of document.body.childNodes) {                        //обратились к ноде
    if (node.nodeName == '#text') {                                 //дали условие на #text
        continue;
    }
    console.log(node);
}


//навигация по DOM, data-атрибуты, преимущество for/of 


//события на мобильных устройтсвах 

//touchstart  когда мы соприкасаемся
//touchmove   когда передвигаем
//touchend    когда отрываем палец от экрана
//touchenter  когда палец зашел на элемент, на который повешено это событие
//touchleave  когда палец зашел на предел этого элемента не отрывая палец
//touchcancel когда палец выходит за пределы браузера


windows.addEventListener('DOMContentLoaded', () => {                //http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
    const box = document.querySelector('.box');                     //https://habr.com/ru/company/sibirix/blog/227175/

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');                                       //нажали
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');                                        //держим и передвигаем
        console.log(e.targetTouches[0].pageX);                      //работа с координатами
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');                                         //отпустили
    });

});


//touches           выдает список всех пальцов которые есть на экране
//targetTouches     выдает список пальцев, которые непосредственно находятся на элементе
//changedTouches    пальцы которые совершили действие


//события на мобильных устройтсвах 





//Async, defer, динамические скрипты 


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script defer src="js/script.js"></script>         //параметр defer загружает скрипт в фоновый режим, а после загрузки дом дерева начинает его выполнение
//     <script defer src="js/test.js"></script>           //даже если скрипт весит меньше, чем другой, он будет ждать загрузки всех скриптов и запускаться они будут по очереди
   
//     <script async src="js/script.js"></script>         //параметр async придает независимость от других скриптов
//     <script async src="js/test.js"></script>           //скрипты с таким параметром не должны быть привязаны к дом дереву, дабы избежать ошибок

//     <p>Hello world!</p>
//     <p>Second message</p>
// </body>
// </html>




const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;                                   //отключает async, скрипты будут выполняться по очереди
    document.body.append(script);
};

loadScript("js.test.js");
loadScript("js.some.js");

//Async, defer, динамические скрипты 



//classlist и делегирование событий 

const   btns= document.querySelecrotAll('button'),              //псевдомассив
        wrapper = document.querySelector('.btn-block');         //получаем класс

console.log(btns[0].classList.length);                      //обращение к первому элементу, затем метод classlist, затем узнаем кол-во классов
console.log(btns[0].classList.item(1));                     //метод, позволяющий получить класс под определенным индексом
console.log(btns[1].classList.add('red'));                  //метод, добавляющий класс
console.log(btns[0].classList.remove('blue'));              //удаляет класс
console.log(btns[0].classList.toggle('blue'));              //если класс существует, то метод удаляет его, если не существует, то тогда добавляет

if  (btns[1].classList.contains('red')) {                   //проверяем на содержание класса red
    console.log('red');
}

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {               //если класса red нет, то добавляем его
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');                    //если класс red есть, то удаляем его
    }

    btns[1].classList.toogle('red');                        //делает тоже самое, но при больших скриптах могут быть косяки
});

console.log(btns[0].className);                             //старый метод показывает классы, лучше не использовать

wrapper.addEventListener('click', (event) => {                      //назначили обработчик событий, добавили callback функцию с event - объект событие
    if (event.target && event.target.tagName == "BUTTON") {         //необходимо проверять на event.target, чтобы понять, реагирует ли элемент на клик И тэг name, который должен быть элементом button
        console.log('Hello');
    }
});

//дилегирование - если элемент подходит под условие, то на нем будет срабатывать та функция, которую мы прописали

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) {      //проверка по классу
        console.log('Hello');
    }
});


wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {           //проверка с помощью селекторов и метода matches
        console.log('Hello');
    }
});

const btn = document.createElement('button');                           //создали кнопку
btn.classList.add('red');                                               //добавлили ее с классом red
wrapper.append(btn);                                                    //помещаем кнопку в обертку

btns.forEach(btn => {                                               //навешиваем на каждую кнопку обработчик событий, необходимо создавать такую конструкцию после того, как создали кнопку
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
});


//classlist и делегирование событий 



//setTimeout и setInterval, скрипты и время их выполнения 
https://learn.javascript.ru/js-animation







//setTimeout и setInterval, скрипты и время их выполнения 

//работа с датами 
                            //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
const nowT = new Date(0);    //отсчет даты происходит от 1970, чтобы получить предыдущие года, нужно передавать отрицательное значение
const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getsetHours(18, 40));               //часы минуты

console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {                  //цикл, загружает систему
    let some = i **3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);     //узнаем время, затраченное на отработку цикла


//работа с датами 


//параметры документа, окна 

const box = document.querySelecrot('.box'),
        btn = document.querySelector('button');

const width = box.clientWidth;              //это все некие числа, можно глянуть в консоли браузера
const height = box.clientHeight;
const width = box.offsetWidth;
const height = box.offsetHeight;
const width = box.scrolltWidth;
const height = box.scrolltHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';             //соответственно и здесь это число + px
    console.log(box.scrollTop);                             //сколько текста отлистано
});

console.log(box.getBoundingClientRect());                   //позволяет получить все координаты элемента
console.log(box.getBoundingClientRect().top);               //только топ

const style = windows.getComputedStyle(box);

console.log(style);                                         //покажет все стили объекта
console.log(style.display);                                 //покажет выбранный стиль

console.log(document.documentElement.clientWidth);

//методы для работы в консоли браузера
document.documentElement.scrollTop = 0;

window.scrollBy(0, 400)                     //x и y,    by работает от текущей позиции
window.scrollTo(0, 400)                     //to работает от начала страницы


//параметры документа, окна 


//функции конструкторы 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

//функции конструкторы 


//контекст вызова this. 
//https://tproger.ru/translations/javascript-this-keyword/



//контекст вызова this. 


//классы es6 

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
http://jsraccoon.ru/es6-classes

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle {                  //унаследует класс rectangle
    constructor(height, width, text, bgColor) {
        super(height, width);                                       //метод позволяет вызвать строки родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());




//классы es6 


//rest оператор и параметры по умолчанию 

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters

const log = function(a, b, ...rest) {         //rest(Синтаксис оставшихся параметров) помещает аргументы в массив, т.к. эти аргументы могут прийти, а могут не прийти
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {      // basis = 2 это параметр по умолчанию, если для него не будут переданы значения
    console.log(number * basis);
}

calcOrDouble(3);



//rest оператор и параметры по умолчанию 





//JSON, глубокое клонирование объектов 

const persone = {
    name: 'Alex',
    tel: '+733423424234',
    parents: {
        mom: 'olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone));                       //переводит объект в JSON формат, все ключи выводятся как отдельные сущности
console.log(JSON.parse(JSON.stringify(persone)));           //сначала переводит в JSON формат, а затем снова в объект


const clone = JSON.parse(JSON.stringify(persone));          //таким образом можем скопировать объект

clone.parents.mom = 'Ann';


console.log(persone);
console.log(clone);


//JSON, глубокое клонирование объектов 






//AJAX и общение с сервером 

https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState#%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8
https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects
https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP
https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP



const   inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {

    const request = new XMLHttpRequest();               //с помощью конструктора создали новый объект

    request.open('GET', 'js/current.json');             //(method, url, async(true, false), login, pass)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //response
    //readyState


    //полный способ
    request.addEventListener('readystatechange', () => {                    //отслеживает статус готовности в опредленном значении
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);   //fixed приводит к формату с 2 знаками после запятой
        } else {
            inputUsd.value = "Ошибка сервера"
        }
    })

    //обычный способ
    request.addEventListener('load', () => {                                //отслеживает статус готовности в значении полной готовности
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Ошибка сервера"
        }
    })

});




//AJAX и общение с сервером 




//PROMISE (обещания)

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {          //создали новый промис, resolve - обещание выполнилось, reject - обещание не выполнилось
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});

req.then((product) => {                                //then обрабатывает положительный результат
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {                                        //обрабатывает отрицательный результат
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Finally');                             //действие, которое должно произойти в любом случае
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));



Promise.all([test(1000), test(2000)]).then(() => {          //all ждет выполнение всех промисов
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {         //race выполняется сразу, как только первый промис выполнится
    console.log('All');
});


//PROMISE 




//Fetch 

https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

//старый метод запросов
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json));

//Fetch 





//методы перебора массивов 

//filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {            //метод filter
    return name.length < 5;
});

console.log(shortNames);

//map

let answers = ['Ivan', 'Anna', 'Hello'];

answers = answers.map(item => item.toLocaleLowerCase());                //map Трансформирует массив

console.log(answers);

// every/some

const some = [4, 'qweq', 'dawdwa'];

console.log(some.some(item => typeof(item) === 'number'));         //some хотя бы один элемент соответствует числу

console.log(some.every(item => typeof(item) === 'number'));         //every если все элементы равны числу

//reduce

const arr = [4, 5, 1, 3, 2, 6];
                        // 0       4
                        // 4       5
                        // 9       1
                        // 10      3
const res = arr.reduce((sum, current) => sum + current, 3);                 //  3 начальное значение, если не использовать, то будет 0
console.log(res);

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);

//методы перебора массивов 





//localstorage 

https://tproger.ru/articles/localstorage/
http://dev-test.nemikor.com/web-storage/support-test/

localStorage.setItem('number, 5');              //отправляем в хранилище

localStorage.removeItem('nubmer');              //удаляем из хранилища
localStorage.clear();                           //очищаем хранилище

console.log(locaStorage.getItem('number'));


const checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');

//проверяем хранилище на соответствующее условие
if (localStorage.getItem('isCheked')) {
    checkbox.cheked = true;
}

//проверяем хранилище на соответствующее условие
if (localStorage.getItem('bg') === 'change') {
    form.style.backgroundColor = 'red';
}

//будет изменяться локальное хранилище при клике
checkbox.addEventListener('change', () => {
    localStorage.setItem('isCheked', true);
});


change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'change') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

//помещаем в хранилище объект через формат json
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));

//если поместить объект без формата json, то объект станет строкой
localStorage.setItem('alex', persone);
console.log(localStorage.getItem('alex'));



//localstorage 


//регулярные выражения 
https://regex101.com/
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
https://learn.javascript.ru/regular-expressions


new RegExp('pattern', 'flags');
/patter/f

const ans = prompt('Введите ваше имя');

const reg = /n/i;

// i    поиск не зависит от ригистра
// g    все подходящие вхождения
// m    многострочный режим

console.log(ans.search(reg));                   //обычный поиск
console.log(ans.match(reg));                    //возвращает массив со свойствами

const pass = prompt('Password');

console.log(pass.replace(/./g, "*"));       //зашифровывает все символы под *
console.log(pass.replace(/\./g, "*"));       //   /\./g необходимо экранировать символы, так как некоторые могут быть зарезервированы

console.log('12-34-56'.replace(/-/g, ':'));         //замена всех - на :


const ans = prompt('Введите ваше имя');

const reg = /n/ig;

console.log(reg.test(ans));             //возвращает булиновое значение

// \d   ищем все цифры
// \w   ищем все слова
// \s   ищем все пробелы


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));     //ищем все совпадения по данному шаблону \слово\цифра\слово\цифра

// \D   не буквы
// \W   не числа

//регулярные выражения 


//get set 

https://learn.javascript.ru/property-accessors

const persone = {
    name: 'Alex',
    age: 25,


    get userAge() {                 //get получаем значение
        return this.age;
    },

    set userAge(num) {              //set устанавливаем значение
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.userAge);               //св-во аксцессора позволяет не ставить ()



//get set 


//инкапсуляция 

http://www.codenet.ru/progr/cpp/ipn.php
https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b

class User {
    constructor(name, age) { 
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';          //создали еще одно свойство в конструкторе, # включает приватность и мы не сможем получить его из вне

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
ivan.say();

//инкапсуляция 


//паттерн «Модуль» 



https://habr.com/ru/company/ruvds/blog/419997/

const app = '123';

const number = 1;

//анонимная самовызывающаяся функция (код сразу вызывается локально)
(function(){
    let number =2;
    console.log(number);
    console.log(number +3);;
}());

console.log(number);

const user = (function() {
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat              //возвращаем во внешний мир новый объект со свойством privat
    };
}());

user.sayHello();




//паттерн «Модуль» 




//webpack 
http://largescalejs.ru/commonjs-modules/
https://webpack.js.org/guides/getting-started/
https://webpack.js.org/configuration/mode/
https://webpack.js.org/configuration/devtool/
https://webpack.js.org/concepts/modules/






//webpack 




//ES6 Modules 

//main.js
export let one =1;

let two = 2;

export {two};                           //именнованый синтаксис

export default function sayHi() {       //экспорт по умолчанию может быть только один
    console.log('Hello');
}

//script.js
import {oneHeart,two} from './main';
import sayHi from './main';

console.log(`${one} and ${two}`);
sayHi();


//index.html            подключение модулей через html, в файлах js необходимо писать путь ./main.js, а не ./main
<script type='module' src="./js/main.js"></script>
<script type='module' src="./js/script.js"></script>


//ES6 Modules 


//Как превратить код ES6+ в старый формат ES5 Babel, Core.js и полифиллы 

https://babeljs.io/
https://browserl.ist/
https://github.com/zloirock/core-js
https://www.npmjs.com/package/es6-promise
https://www.npmjs.com/package/nodelist-foreach-polyfill





//Как превратить код ES6+ в старый формат ES5 Babel, Core.js и полифиллы 


//функции генераторы 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function*

function* generator() {             //последовательно вызываются значения
    yield 'S';                      //(вилд)
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next().value);

function* count(n) {                    //можно использовать перебор
    for (let i =0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) {               //можем использовать для полного перебора функции
    console.log(k);
}

const counter = count(7);

console.log(counter.next().value);       //первый раз выдает первое значение
console.log(counter.next().value);
console.log(counter.next().value);

//функции генераторы 




//Js анимации 

https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni
https://developer.mozilla.org/ru/docs/Web/API/window/requestAnimationFrame
https://html5.by/blog/what-is-requestanimationframe/
https://html5book.ru/css3-animation/


const   btn = document.querySelector('.btn'),
        elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);


//Js анимации 

//event-loop 
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D




//event-loop 