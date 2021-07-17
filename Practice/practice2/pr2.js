// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr1=[1,2,3,4,5];
let arr2=['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
let arr3=['qwerty', 'asdfg', true, false, 123];
console.log(`1. ${arr1}, ${arr2}, ${arr3}`);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4=[];
arr4[0]='Lorem';
arr4[1]='ipsum dolor';
arr4[2]='sit';
arr4[3]='amet';
arr4[4]='ignis natura renovatur integra';
console.log(`2. array = ${arr4}`);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0;i<10;i++) {
    document.write(`<div>random info ${Math.floor(Math.random() * 10)}</div>`);
}
document.write(`<br>`);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0;i<10;i++) {
    document.write(`<div>another one test subject with id:${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<br>`);
let index=0;
while (index<20){
    document.write(`<h1>random header</h1>`);
    index++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<br>`);
let index1=0;
while (index1<20){
    document.write(`<h1>another one random header #${index1}</h1>`);
    index1++;
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr5=[];
console.log(`----> масив з 10 числових елементів: `);
for (let i = 0; i < 10; i++) {
    arr5[i]=Math.floor(Math.random()*10+1);
    console.log(arr5[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let srtArr=['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Perspiciatis', 'totam'];
console.log(`----> масив з 10 строкрових елементів: `);
for (let string of srtArr) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let srtSmth=['Lorem', 'ipsum', 1, 2, 11, true, false, ['q','w','e'], {a:1, b:2}, 'totam'];
console.log(`----> масив з 10 елементів будь-якого типу: `);
for (let string of srtSmth) {
    console.log(string);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let numStrBool=[11, 22, 33, 'qwe', 'asd', 'zxc', true, 44, '55', false];
console.log(`----> тільки булеві елементи: `);
for (let i=0; i<numStrBool.length;i++) {
    if (typeof (numStrBool[i]) === 'boolean'){
        console.log(numStrBool[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(`----> тільки числові елементи: `);
for (let i=0; i<numStrBool.length;i++) {
    if (typeof (numStrBool[i]) === 'number'){
        console.log(numStrBool[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log(`----> тільки рядкові елементи: `);
for (let i=0; i<numStrBool.length;i++) {
    if (typeof (numStrBool[i]) === 'string'){
        console.log(numStrBool[i]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr6=[];
let ind=0;
console.log(`----> масив, заповнений і виведений через цикл: `);
while(ind<10){
    arr6[0]=true;
    arr6[1]=false;
    arr6[2]=0;
    arr6[3]=999;
    arr6[4]=888;
    arr6[5]='oiu';
    arr6[6]='oiuy';
    arr6[7]='kj';
    arr6[8]={x:0, y:1};
    arr6[9]=[6,6,6];
    console.log(arr6[ind]);
    ind++;
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`----> цикл 10 итер, шаг 1: `);
document.write(`цикл 10 итер, шаг 1: `);
for (let i = 0; i < 10; i++) {
        console.log(i);
        document.write(`${i}`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`----> цикл 100 итер, шаг 1: `);
document.write(`<br>цикл 100 итер, шаг 1: `);
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(`----> цикл 100 итер, шаг 2: `);
document.write(`<br>цикл 100 итер, шаг 2: `);
let step=0;
while (step<200){               //200, потому что 100 итераций с шагом два - это границы от 0 до 200 (все парные эл = 100штук)
    console.log(step);
    document.write(`${step} `);
    step+=2;
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(`----> цикл 100 итер, шаг 1, только ПАРНЫЕ эл: `);
document.write(`<br>цикл 100 итер, шаг 1, только ПАРНЫЕ эл: `);
for (let i = 0; i < 100; i++) {
    if(i%2===0) {
        console.log(i);
        document.write(`${i} `);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(`----> цикл 100 итер, шаг 1, только неПАРНЫЕ эл: `);
document.write(`<br>цикл 100 итер, шаг 1, только неПАРНЫЕ эл: `);
for (let i = 0; i < 100; i++) {
    if(i%2===1) {
        console.log(i);
        document.write(`${i} `);
    }
}
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
let usersWithCities=[];
let usrCity=0;
document.write(`<br>USERS<br>`);

for (let user of usersWithId) {
    for (const city of citiesWithId) {
        if(user.id===city.user_id){
            user.address=city;
            usersWithCities.push(user);
        }
    }

}




