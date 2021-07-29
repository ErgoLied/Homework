// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
// 1. Проснуться - 0.3с
// 2. Помыться - 0.5с
// 3. Позавтракать - 1с
// 4. Прокрастинировать - 3с
// 5. Обед - 1с
// 6. Сделать дз - 3с
// 7. Лекция - 2с
// 8. Ужин - 1с
// 9. Развлечения - 0.2с
// 10. Спатоньки - 0.1с


function schedule(morning){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Praise the SUN')
            if (morning === 'bad'){
                console.log(`>>> ${morning} morning`);
                reject('this is the (dead) end');
            }
            else {
                resolve('>>> good morning');
            }
        }, 500)
    });
}

function wakeUp(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('1. *проснуться*');
            resolve('Проснулись, а затем еще раз проснулись');
        }, 300);
    })
}
function wash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('2. *помыться*');
            resolve('Теперь я чистенький');
        }, 500);
    })
}
function breakfast(mood){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('3. *позавтракать*');
            setTimeout(() => {
                if (mood === 'bad'){
                    console.log('Я поел');
                    reject('*еда не удовлетворила естественную потребность*');
                }
                else{
                    resolve('Я сыт!');
                }

            }, 1000)
        }, 500);
    })
}
function procrastinate(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('4. *задуматься о смысле бытия*');
            resolve('Смысл в учебе.');
        }, 3000);
    })
}
function lunch(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`"...но сначала нужно поесть"`);
            console.log('5. *пообедать*');
            resolve('Поел и готов к новым свершениям');
        }, 1000);
    })
}
function homework(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`6. *начать делать дз*`);
            if(status==='bad'){
                console.log('Ничего не получается!')
                reject('*устроить самому себе истерику*');
            }
            else{
                resolve('Успех!');
            }
        }, 3000);
    })
}
function study(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`7. *посмотреть лекцию*`);
            resolve('Стал умнее на 0,1%');
        }, 2000);
    })
}
function dinner(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`8. *поужинать*`);
            resolve('Шкала энергии заполнена борщом');
        }, 1000);
    })
}
function watchYT(value){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`9. *смотреть мультики*`);
            resolve(`Смотрю ${value}`);
        }, 200);
    })
}
function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`10. Пора спать.`);
            resolve(`*умер в подушку*`);
        }, 100);
    })
}

schedule('good')
    .then(value => {
        console.log(value);
        return wakeUp();
    })
    .then(value => {
        console.log(value);
        return wash();
    })
    .then(value => {
        console.log(value);
        return breakfast('ok');  // or 'bad'
    })
    .then(value => {
        console.log(value);
        return procrastinate();
    })
    .then(value => {
        console.log(value);
        return lunch();
    })
    .then(value => {
        console.log(value);
        return homework('ok');  // or 'bad'
    })
    .then(value => {
        console.log(value);
        return study();
    })
    .then(value => {
        console.log(value);
        return dinner();
    })
    .then(value => {
        console.log(value);
        return watchYT('the simpsons');  // or smth else
    })
    .then(value => {
        console.log(value);
        return sleep();
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.warn(reason);
        console.error('DEAD END');
    })