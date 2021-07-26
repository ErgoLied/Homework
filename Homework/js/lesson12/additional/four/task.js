// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let rules = document.getElementsByTagName('h2');
let list_h2 = document.getElementById('content');

let list = document.createElement('ul');
for (const rule of rules) {
    let row = document.createElement('li');
    row.innerText = (rule.innerText);
    list.appendChild(row);
}
list_h2.appendChild(list);