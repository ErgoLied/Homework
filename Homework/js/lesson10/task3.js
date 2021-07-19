// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
function replaceArrEl(arr,i){
    for (let j = 0; j < arr.length; j++) {
        let temp;
        if(j===i){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    return arr;
}
console.log(replaceArrEl([9, 8, 0, 4], 0));
console.log(replaceArrEl([9, 8, 0, 4], 1));
console.log(replaceArrEl([9, 8, 0, 4], 2));

// - Дано список імен.
let n1 = '    Harry       Potter      James     Olololol          '
let n2 = '    Ron       Weasley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Weasley'
// let n3 = 'Hermione Granger'

function normaliseName(name){
    let arrName = Array.from(name);
    let newName='';
    for (let i = 0; i < arrName.length; i++) {
        if(arrName[i]===' ' && arrName[i+1]===' '){
            arrName.splice(i, 1);
            i-=2;
        }
        else{
            i++;
        }
    }
    arrName.shift();
    arrName.pop();
    for (let i = 0; i < arrName.length; i++) {
        newName+=arrName[i];
    }
    console.log(arrName);           //для наглядности, можно закомментить эту строку
    return newName;
}
console.log(n1);
console.log(normaliseName(n1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let num1 = [2, 8, 0, 7, 1, 3, 4, 7, 0, 5];
let num2 = [6, 0, 6, 6, 8, 7, 0, 7, 0, 2, 5, 4, 0, 0, 0, 1, 1, 7, 7, 8];        //1 6 8 12 13 14
let num3 = [0, 4, 6, 7, 1, 1, 2, 8, 1, 0, 0, 3, 9, 6, 2, 6, 9, 7, 8, 8, 5, 4, 6, 8, 8, 5, 3, 3, 3, 7, 7, 4, 0, 8, 0, 3, 2, 2, 6, 1, 8, 2, 9, 5, 4, 4, 2, 2, 0, 4];
let rand = [];
for (let j = 0; j < 200; j++) {
    rand[j]=Math.round(Math.random()*10-5);
}

function zeroToEnd(arr){
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===0){
            arr.splice(i,1);
            count++;
            i--;
        }
    }
    for (let i = 0; i < count; i++) {
        arr.push(0);
    }
    return arr;
}

console.log(zeroToEnd(rand));