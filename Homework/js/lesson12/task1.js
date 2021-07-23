// - Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
console.log(document.getElementById("content").innerText);

// -- отримує текст з блоку з id "rules"
console.log(document.getElementById("rules").innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById("content").innerText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, odio!'
console.log(document.getElementById("content").innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById("rules").innerText='Четвертое правило Бойцовского клуба: не более одного поединка за один раз';
console.log(document.getElementById("rules").innerText);

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let all = document.getElementsByTagName('*');
for (const el of all) {
    el.style.background='#EB6757';
    el.style.color='#000056';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules').getAttribute('class');
console.log(rules);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний text
// ээээээээээээ, у меня так не выходит :с второе событие "онклик" перекрывает первое, из-за
// чего первое не срабатывает, а только второе, так что реализовала вот так, через один "онклик":
let listRules = document.getElementsByClassName('fc_rules');
for (const rule of listRules) {
    rule.onclick = function (){
        console.log(rule.innerText);         //одна вивдоить текст елементу
        rule.innerText += ' ololo ';         //інша довільний text
    }
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let newRed = document.getElementsByClassName('fc_rules');
for (const red of newRed) {
    red.style.color='#900000'; //мМмМмМ, красный на красном (:
}