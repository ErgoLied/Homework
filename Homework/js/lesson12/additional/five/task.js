// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules2 = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let h1 = document.createElement('h1');
h1.innerText='Правила бойцовского клуба';
document.body.appendChild(h1);

let wrap_block = document.createElement('div');
wrap_block.classList.add('wrap');
document.body.appendChild(wrap_block);


for (let i = 0; i < rules2.length; i++) {
    let div = document.createElement('div');
    div.classList.add(`rules`);
    div.classList.add(`rule${i+1}`);
    for (const key in rules2[i]) {
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        if (key==='title'){
            h2.innerText=rules2[i][key];
            div.appendChild(h2);
        }
        if (key==='body'){
            p.innerText=rules2[i][key];
            div.appendChild(p);
        }


    }
    wrap_block.appendChild(div);
}
