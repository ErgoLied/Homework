import {IPost, IUser} from "./post";

let post1: IPost = {
    id: 1,
    userId: 10,
    body: 'ololo',
    title: 'post'
};

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone etc

let user: IUser = {
    id: 10,
    name: 'Meh',
    username: 'Meh',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '4524',
            lng: '4524'
        },
    },
    company: {
        name: 'Paimon.exe',
        catchPhrase: 'Ehe te nanda yo',
        bs: 'Sergio gold quotes foundations'
    }
}
console.log(user);
console.log(post1);