// - створити функцію яка приймає масив та виводить його
function arrWrite(x){
    console.log(x);
}
let arrNums =[59, 96, 89, 43, 28, 62, 20, 2, 17, 92, 34, 37, 42, 84, 8, 22, 30, 40, 48, 18];
let arrNums2=[5, 20, 18, 13, 6, 15, 8, 11, 2, 1, 14, 4, 12, 17, 9, 16, 3, 19, 7, 10];

arrWrite(arrNums);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function min_max(a,b,c){
    let min=a;
    let max=a;
    if(b<min){min=b;} else{min=c;}
    if(b>max){max=b;} else{max=c;}
    console.log(`min = ${min}\nmax = ${max}`);
    }

let a = 85;
let b = 44;
let c = 87;
min_max(a,b,c);

// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function someArithmetic(arr){
    let min=arr[0];
    let max=arr[0];
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<min){min=arr[i];}
        if(arr[i]>max){max=arr[i];}
        sum+=arr[i];
    }
    let aver = sum/arr.length;
    return (`min = ${min}\nmax = ${max}\nsum = ${sum}\naverage = ${aver}`);
}
console.log(someArithmetic(arrNums));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
function createArr(len){
    let someArr=[];
    for (let i = 0; i < len; i++) {
        someArr[i] = Math.round(Math.random()*100);
    }
    return someArr;
}
arrWrite(createArr(10));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
let cities = [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ];
function infoArrObj(arr){
    let keys=[];
    let param=[];
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            keys.push(key);
            param.push(arr[i][key]);
        }
    }
    rez1=keys + '\n'+param;
    return rez1;
}
console.log(infoArrObj(cities));


//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
//     результат
//     [3,5,7,9]
function addArrToArr(arr1, arr2){
    let addArr=[];
    for (let i = 0; i < arr1.length; i++) {
        addArr[i] = arr1[i]+arr2[i];
    }
    return addArr;
}
console.log(addArrToArr(arrNums, arrNums2));


//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let charArr=['a', 'b', 'c'];
console.log(charArr);
for (let i = 1; i <= 3; i++) {
    charArr.push(i);
}
console.log(charArr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let numArr = [1, 2, 3];
console.log(numArr);
console.log(numArr.reverse());      //Зробіть з нього новий масив [3, 2, 1].
numArr.reverse();
numArr.push(4, 5, 6);               //Додайте йому в кінець елементи 4, 5, 6.
console.log(numArr);
numArr.splice(3,3);
console.log(numArr);
numArr.unshift(4, 5, 6);      //Додайте йому в початок елементи 4, 5, 6.
console.log(numArr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let numArr2=[1, 2, 3, 4, 5];
console.log(numArr2);
numArr2.splice(0,3);        //Перетворіть масив в [4, 5].
console.log(numArr2);
numArr2=[1, 2, 3, 4, 5];
numArr2.splice(2,3);        //Перетворіть масив в [1,2].
console.log(numArr2);
numArr2=[1, 2, 3, 4, 5];
numArr2.splice(3,2, 'a', 'b', 'c');        //Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
console.log(numArr2);



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// возьму из 20, не хочу создавать еще один ._.
for (let j = 0; j < arrNums.length; j++) {
    if(arrNums[j]%2===0){
        console.log(`${j}: ${arrNums[j]}`);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
let copyArrNums=[];
for (let k = 0; k < arrNums.length; k++) {
    copyArrNums[k]=arrNums[k];
}
console.log(arrNums);
console.log(copyArrNums);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let futureWord=['a', 'b', 'c'];
console.log(futureWord);
let word1='';
let word2='';
let word3='';

for (let n = 0; n < futureWord.length; n++) {
    word1+=futureWord[n];
}

let m=0;
while (m<futureWord.length){
    word2+=futureWord[m];
    m++;
}

for (let word of futureWord) {
    word3+=word;
}
console.log(word1);
console.log(word2);
console.log(word3);