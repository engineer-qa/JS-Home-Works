// TASK #3 ==============================================================
alert('Сейчас вы просматриваете задание №3')

let message = '';
const admin_passowrd = 'adminpass';
const askUser = prompt('Введите пароль для входа', '')

// IF COUNSTRUCTION

if (askUser == null) {
    message = 'Отменено пользователем'
}
else if (askUser == admin_passowrd) {
    message = 'Welcome!'
}
else {
    message = 'Доступ запрещен! Неверный пароль';
}

// SWITCH COUNSTRUCTION

// switch(askUser) {
//     case null:
//         message = 'Отменено пользователем';
//         break;
//     case admin_passowrd:
//         message = 'Welcome!';
//         break;
//     default:
//         message = 'Доступ запрещен! Неверный пароль';
// }

alert(message);