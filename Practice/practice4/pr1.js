// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    }
let clients=[
    new Client(1, 'Ololosha', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3']),
    new Client(2, 'Ololosha2', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2']),
    new Client(3, 'Ololosha3', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3']),
    new Client(4, 'Ololosha4', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3', 'item4']),
    new Client(5, 'Ololosha5', 'Hz', 'pochka@com.ua', 123456, ['item1']),
    new Client(6, 'Ololosha6', 'Hz', 'pochka@com.ua', 123456, ['item1']),
    new Client(7, 'Ololosha7', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2']),
    new Client(8, 'Ololosha8', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3']),
    new Client(9, 'Ololosha9', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3', 'item4', 'item5']),
    new Client(10, 'Ololosha10', 'Hz', 'pochka@com.ua', 123456, ['item1', 'item2', 'item3'])
];
console.log(clients);

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sortClients = clients.sort(function (client1, client2){
    return client1.order.length - client2.order.length;
})
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    // function carConstructor(model, manufactured,year,maxspeed,v){
    //     let cars={
    //         model: model,
    //         manufactured: manufactured,
    //         year: year,
    //         maxspeed: maxspeed,
    //         v: v
    //     }
    //     return cars;
    // }
    // function drive(car){
    //     console.log(`їдемо зі швидкістю ${car.maxspeed} на годину`);
    // }
    // function info(car){
    //     console.log(car);
    // }
    // function increaseMaxSpeed(car, newSpeed){
    //     car.maxspeed+=newSpeed;
    // }
    // function changeYear(car, newValue){
    //     car.year=newValue;
    // }
    // function addDriver(car, driver){
    //     car.driver=driver;
    // }
    // //приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    // // шта? о_О
    // // car.driver = {name: name, age: age} что-то типа такого
    //
    // let car=carConstructor('honda', 'Korea', 234, 666, 20);
    // info(car);
    // drive(car);
    //
    // increaseMaxSpeed(car,1000);
    // info(car);
    //
    // changeYear(car, 2020);
    // info(car);
    //
    // driver1={
    //     name: 'Ololo1',
    //     age: 69,
    //     deathpenalty: true
    // }
    // addDriver(car, driver1);
    // info(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class CarConstruct{
    constructor(model, manufactured, year, maxspeed, v) {
        this.model = model;
        this.manufactured = manufactured;
        this.year = year;
        this.maxspeed = maxspeed;
        this.v = v;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info(){
        console.log(this);
    }
    increaseMaxSpeed(newSpeed){
        this.maxspeed+=newSpeed;
    }
    changeYear(newValue){
        this.year=newValue;
    }
    addDriver(driver){
        this.driver=driver;
    }
}
let car2 = new CarConstruct('Kaktus', 'Mexico', 2001, 9999, 50);
console.log(car2);
car2.drive();
car2.increaseMaxSpeed(10000);
car2.changeYear(1234567);
car2.addDriver({name: 'Ololo1', age: 69, deathpenalty: true});
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Sinderella{
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let arrSinderellas=[
    new Sinderella('random name', 40, 42),
    new Sinderella('smth girl', 29, 39),
    new Sinderella('noname tyan', 12, 12),
    new Sinderella('mb sinderella', 23, 36),
    new Sinderella('absolutely not sinderella', 140, 46),
    new Sinderella('true sinderella', 20, 35),
    new Sinderella('defaultname1', 40, 42),
    new Sinderella('defaultname2', 40, 42),
    new Sinderella('defaultname3', 40, 42),
    new Sinderella('im hungry', 100, 1),
];
console.log(arrSinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//то есть у нас есть класс принц?
//запилить ему новый объект при помощи еще одного класса?
//у этого еще одного класса есть ім'я, вік, туфелька яку він знайшов?
//или это запилить принцу? я чет запуталась аааыыыээ
class Prince{
    constructor(nameprince, ageprince, shoes) {
        this.nameprince = nameprince;
        this.ageprince = ageprince;
        this.shoes = shoes;
    }
}
let prince = new Prince('Shrek', 35, 46);
for (let i=0; i < arrSinderellas.length; i++) {             //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    if(prince.shoes===arrSinderellas[i].footsize){
        console.log(`!!!WOW!!! You find her! Her name is ${arrSinderellas[i].name} with foot size ${arrSinderellas[i].footsize}`);
        break;
    }else{
        if(i===arrSinderellas.length-1){
            console.log(`You're shizoid, there are no one Sinderella. Its just a tale`);
        }
    }
}




// let find = users.find(value => value.name === 'max'); /*{name : 'max'.....}*/
// let findTrueSinderella = arrSinderellas.find(
//     function (value){
//         return value.footsize===prince.shoes;
//     }
// );
let findTrueSinderella = arrSinderellas.find(value => value.footsize===prince.shoes);
console.log(findTrueSinderella);

