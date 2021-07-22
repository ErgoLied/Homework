// код, який:
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').style.color='#062021'; //june-2021 - 06-2021

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (const ulEl of ul) {
    ulEl.style.width='400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let listClass = document.getElementsByClassName('linkList');
for (const listCl of listClass) {
    listCl.style.width='50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listEl2 = document.getElementsByClassName('listElement2');
for (const element of listEl2) {
    console.log(element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let grayLi = document.getElementsByTagName('li');
for (const grLi of grayLi) {
    grLi.style.backgroundColor='#cccccc';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let links = document.getElementsByTagName('a');
for (const link of links) {
    link.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів
for (const link of links) {
    if(link.innerText==='link3'){
        link.style.fontSize='40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const link of links) {
    link.classList.add(`element_${link.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader =document.getElementsByClassName('sub-header');
let bgCol = prompt('set bg color');
for (const subH of subHeader) {
    subH.style.backgroundColor=bgCol;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
let textCol = prompt('set text color');
for (const subH of subHeader) {
    if (subH.innerText==='content 2 segment'){
        subH.style.color=textCol;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let cont1 = document.getElementsByClassName('content_1');
let text = prompt('what message?')
for (const c1 of cont1) {
    c1.innerText=text;
}

// l) отримати елементи p та змінити їм padding на 20px
let paragraph = document.getElementsByTagName('p');
for (const p of paragraph) {
    p.style.padding='20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2 = document.getElementsByClassName('text2');
for (const text of text2) {
    text.innerText='june-2021';
}