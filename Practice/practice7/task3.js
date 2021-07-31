// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії
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


function schedule(morning, cb) {
    setTimeout(() => {
        if (morning === 'bad') {
            console.log(`>>> ${morning} morning`);
            cb('this is the (dead) end', null);
        } else {
            cb(null, `>>> ${morning} morning`)
        }
    }, 500)
}

function wakeUp(cb) {
    setTimeout(() => {
        console.log('1. *проснуться*');
        cb(null, 'Проснулись, а затем еще раз проснулись');
    }, 300);
}
function wash(cb) {
    setTimeout(() => {
        console.log('2. *помыться*');
        cb(null, 'Теперь я чистенький');
    }, 500);
}
function breakfast(mood, cb) {
    setTimeout(() => {
        console.log('3. *позавтракать*');
        setTimeout(() => {
            if (mood === 'bad') {
                console.log('Я поел');
                cb('*еда не удовлетворила естественную потребность*', null);
            } else {
                cb(null, 'Я сыт!');
            }

        }, 1000)
    }, 500);
}
function procrastinate(cb) {
    setTimeout(() => {
        console.log('4. *задуматься о смысле бытия*');
        cb(null, 'Смысл в учебе.');
    }, 3000);
}
function lunch(cb) {
    setTimeout(() => {
        console.log(`"...но сначала нужно поесть"`);
        console.log('5. *пообедать*');
        cb(null, 'Поел и готов к новым свершениям');
    }, 1000);
}
function homework(status, cb) {
    setTimeout(() => {
        console.log(`6. *начать делать дз*`);
        if (status === 'bad') {
            console.log('Ничего не получается!')
            cb('*устроить самому себе истерику*', null);
        } else {
            cb(null, 'Успех!');
        }
    }, 1000);
}
function study(cb) {
    setTimeout(() => {
        console.log(`7. *посмотреть лекцию*`);
        cb(null, 'Стал умнее на 0,1%');
    }, 2000);
}
function dinner(cb) {
    setTimeout(() => {
        console.log(`8. *поужинать*`);
        cb(null, 'Шкала энергии заполнена борщом');
    }, 1000);
}
function watchYT(value, cb) {
    setTimeout(() => {
        console.log(`9. *смотреть мультики*`);
        cb(null, `Смотрю ${value}`);
    }, 200);
}
function sleep(cb) {
    setTimeout(() => {
        console.log(`10. Пора спать.`);
        cb(null, `*умер в подушку*`);
    }, 100);
}

schedule('bad', (err, success) => {
    if (err) {
        console.error(err);
    } else {
        wakeUp((err, success) => {
            if (err) {
                console.error(err);
            } else {
                console.log(success);
                wash((err, success) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(success);
                        breakfast('bad', (err, success) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log(success);
                                procrastinate((err, success) => {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log(success);
                                        lunch((err, success) => {
                                            if (err) {
                                                console.error(err);
                                            } else {
                                                console.log(success);
                                                homework('bad', (err, success) => {
                                                    if (err) {
                                                        console.error(err);
                                                    } else {
                                                        console.log(success);
                                                        study((err, success) => {
                                                                if (err) {
                                                                    console.error(err);
                                                                } else {
                                                                    console.log(success);
                                                                    dinner((err, success) => {
                                                                        if (err) {
                                                                            console.error(err);
                                                                        } else {
                                                                            console.log(success);
                                                                            watchYT('anime', (err, success) =>{
                                                                                if (err) {
                                                                                    console.error(err);
                                                                                } else{
                                                                                    console.log(success);
                                                                                    sleep((err, success) => {
                                                                                        if (err) {
                                                                                            console.error(err);
                                                                                        } else{
                                                                                            console.log(success);
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            }
                                                        )
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    }
                });
            }
        });
    }
})
