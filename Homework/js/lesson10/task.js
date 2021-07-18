// - створити функцію яка обчислює та повертає площу прямокутника висотою
function s_rectangle(a,b){
    return (a+b)*2;
}
s_rec=s_rectangle(10, 20);
console.log(`площадь прямоугольника = ${s_rec}`);

// - створити функцію яка обчислює та повертає площу кола
function s_round(r){
    return 2*3.14*r**2;
}
s_round=s_round(3);
console.log(`площадь круга = ${s_round}`);

// - створити функцію яка обчислює та повертає площу циліндру
function s_cil(h, r){
    return 2*3.14*r*(r+h);
}
s_cil=s_cil(5,3);
console.log(`площадь поверхности цилиндра = ${s_cil}`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let nums=[2,7,4,1,-1,456,94,2,5,3];
function retMin_writeMax(x){
    let min=x[0];
    let max=x[0];
    for (let i = 0; i < x.length; i++) {
        if(x[i]<min){min=x[i];}
        if(x[i]>max){max=x[i];}
    }
    document.write(`MAX = ${max}`);
    return (`MIN = ${min}`);
}

console.log(retMin_writeMax(nums));

// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
function text_block(a){
    document.write(`<div>${a}</div>`);
}
a='qweqweqweqwe';
text_block(a);

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function simpleList(a){
    document.write(`
        <ul>
        <li>${a}</li>
        <li>${a}</li>
        <li>${a}</li>
        </ul>
    `);
}

msg='qwerty';
simpleList(msg);

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function difficultList(a, k){
    document.write(`<ul>`);
    for (let i = 0; i < k; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
}

k=3;
difficultList(msg, k);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayList(arr){
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            document.write(`<li><span style="color: blue;">${arr[i]}</span></li>`);
        }else{
            document.write(`<li>${arr[i]}</li>`);
        }

    }
    document.write(`</ol>`);
}
let array=[123,234,345,'zxc','asd',true,false];
arrayList(array);