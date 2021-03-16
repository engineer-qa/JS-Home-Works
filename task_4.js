// TASK #4 ==============================================================
alert('Сейчас вы просматриваете задание №4')

const askUser = prompt('Введите колличество дронов для покупки', '')

let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let message = '';


if (askUser == null) {
    message = 'Отменено пользователем';
}else if (askUser == 0) {
    message = `Вы не можете купить ${askUser} дронов!`;
}
else {
    totalPrice = (askUser * pricePerDroid)
    if (totalPrice > credits) {
        message = `У вас недостаточно кредитов для покупки дронов! 
        \n Итоговая сумма покупки составляет: ${totalPrice} 
        \n Сумма вашего счета составляет: ${credits}`;
    }else {
        credits = (credits - totalPrice);
        message = `Вы купили ${askUser} дронов за ${totalPrice} кредитов 
        \n Остаток кредитов: ${credits}`;
    }
}

alert(message);