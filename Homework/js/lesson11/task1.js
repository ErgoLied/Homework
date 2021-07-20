// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function createArr(n){
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    return arr;
}
console.log(createArr(10));


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
function createArr2(n, a, b){
    let arr = [];
    if(a<0){b*=2;}                                      //если а меньше 0, тогда сдвиг границы поплывет, а юзер, который не знает логики работы rand, не поймет, в чем прикол, поэтому сделаем визуально для юзера так, будто границы такие, как нужно
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * b + a);
    }
    return arr;
}
console.log(createArr2(10, -5, 5));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arrTemp = createArr2(20, 0, 100);
console.log(arrTemp);
console.log(arrTemp.sort(function (a, b){return a-b;}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
console.log(arrTemp.filter(num => num % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
console.log(arrTemp.map(String));

// - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
class User{
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let Alex = new User(1, 'Alex', 'Smith', 'al.sm@com.gb', '050 235 55 41');
console.log(Alex);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let Users = [
    new User(1, 'Alex', 'Smith', 'al.sm@com.gb', '050 235 55 41'),
    new User(2, 'Brad', 'Smith', 'br.sm@com.gb', '050 235 55 41'),
    new User(3, 'John', 'Smith', 'jo.sm@com.gb', '050 235 55 41'),
    new User(8, 'Manya', 'Smith', 'ma.sm@com.gb', '050 235 55 41'),
    new User(9, 'Sonya', 'Blade', 'sonya.mortal-combat@com.gb', '050 235 55 41'),
    new User(10, 'Dunya', 'Smith', 'du.nya@com.gb', '050 235 55 41'),
    new User(4, 'Anya', 'Smith', 'an.sm@com.gb', '050 235 55 41'),
    new User(5, 'Vanya', 'Smith', 'va.sm@com.gb', '050 235 55 41'),
    new User(6, 'Tanya', 'Smith', 'ta.sm@com.gb', '050 235 55 41'),
    new User(7, 'Jenya', 'Smith', 'jen.sm@com.gb', '050 235 55 41')
];
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
console.log(Users);
console.log(Users.filter(id => id.id % 2 === 0).sort(function (a, b){return a.id-b.id;}));
