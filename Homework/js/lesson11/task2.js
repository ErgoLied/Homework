// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: this.street = street,
            suite: this.suite = suite,
            city: this.city = city,
            zipcode: this.zipcode = zipcode,
            geo: {
                lat: this.lat = lat,
                lng: this.lng = lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: this.companyname = companyname,
            catchPhrase: this.catchPhrase = catchPhrase,
            bs: this.bs = bs
        }
    }
}

let Leanne = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
    -37.3159, 81.1496, '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(Leanne);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru


// Таким чином описати теги
let a_attrs = [
    {
        titleOfAttr: 'href',
        actionOfAttr: 'Задает адрес документа, на который следует перейти'
    },
    {
        titleOfAttr: 'download',
        actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
    }
];
let div_attrs = [
    {
        titleOfAttr: 'align',
        actionOfAttr: 'Задает выравнивание содержимого тега'
    },
    {
        titleOfAttr: 'title',
        actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'
    }
];
let h1_attrs = [
    {
        titleOfAttr: 'align',
        actionOfAttr: 'Определяет выравнивание заголовка'
    }
];
let span_attrs = [
    {
        titleOfAttr: 'accesskey',
        actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
    },
    {
        titleOfAttr: 'class',
        actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
    }
];
let input_attrs = [
    {
        titleOfAttr: 'name',
        actionOfAttr: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать'
    },
    {
        titleOfAttr: 'type',
        actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы'
    }
];
let form_attrs = [
    {
        titleOfAttr: 'action',
        actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'
    },
    {
        titleOfAttr: 'name',
        actionOfAttr: 'Имя формы'
    }
];
let option_attrs = [
    {
        titleOfAttr: 'label',
        actionOfAttr: 'Указание метки пункта списка'
    },
    {
        titleOfAttr: 'selected',
        actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным'
    }
];
let select_attrs = [
    {
        titleOfAttr: 'disabled',
        actionOfAttr: 'Блокирует доступ и изменение элемента'
    },
    {
        titleOfAttr: 'multiple',
        actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'
    }
];

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
class Tag {
    constructor(name, action, attrs) {
        this.name = name;
        this.action = action;
        this.attrs = attrs;
    }
}

console.log(new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', a_attrs));
console.log(new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', div_attrs));
console.log(new Tag('h1', 'ML предлагает шесть заголовков разного уровня, которые показывают относительную ' +
    'важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня', h1_attrs));
console.log(new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа', span_attrs));
console.log(new Tag('input', 'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', input_attrs));
console.log(new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером', form_attrs));
console.log(new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', option_attrs));
console.log(new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', select_attrs));