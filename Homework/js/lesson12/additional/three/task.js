let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let addr = [];
for (const user of users) {
    for (const key in user) {
        if(key==='address'){
            addr.push(user[key]);
        }
    }
}
console.log(addr)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let div1 = document.createElement('div');
div1.classList.add('task1');
document.body.appendChild(div1);

for (const user of users) {
    let div_users = document.createElement('div');
    for (const userKey in user) {
        if (typeof user[userKey] === 'object'){
            for (const key in user[userKey]) {
                div_users.innerHTML+=`${key}: ${user[userKey][key]} <br>`;
            }
        }
        else{
            div_users.innerHTML+=`${userKey}: ${user[userKey]} <br>`;
        }
    }
    div1.appendChild(div_users);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
let div2 = document.createElement('div');
div2.classList.add('task2');
document.body.appendChild(div2);

for (const user of users) {
    let div_users = document.createElement('div');
    for (const userKey in user) {
        let div_task2 = document.createElement('div');
        if (typeof user[userKey] === 'object'){
            for (const key in user[userKey]) {
                div_task2.innerHTML+=`${key}: ${user[userKey][key]} <br>`;
            }
        }
        else{
            div_task2.innerHTML+=`${userKey}: ${user[userKey]} <br>`;
        }
        div_users.appendChild(div_task2);
    }
    div2.appendChild(div_users);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
//больше div'ок богу div'ок
let div3 = document.createElement('div');
div3.classList.add('task3');
document.body.appendChild(div3);

for (const user of users) {
    let div_users = document.createElement('div');
    for (const userKey in user) {
        let div_task3 = document.createElement('div');
        if (typeof user[userKey] === 'object'){
            for (const key in user[userKey]) {
                let div_addr = document.createElement('div');
                div_addr.innerHTML+=`${key}: ${user[userKey][key]} <br>`;
                div_task3.appendChild(div_addr);
            }
        }
        else{
            div_task3.innerHTML+=`${userKey}: ${user[userKey]} <br>`;
        }
        div_users.appendChild(div_task3);
    }
    div3.appendChild(div_users);
}