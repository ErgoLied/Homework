// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//

class User{
    constructor(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,companyname,catchPhrase,bs) {
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
let Leanne = new User(1, 'Leanne Graham', 'Bret','Sincere@april.biz',
    'Kulas Light','Apt. 556','Gwenborough','92998-3874',
    -37.3159,81.1496, '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
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
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
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