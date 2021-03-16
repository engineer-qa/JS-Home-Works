// TASK #6 ==============================================================
alert('Сейчас вы просматриваете задание №6')

let message = '';
let total = 0;

while (true) {
    const askUser = prompt('Введите число', '');

    if (askUser == null) {
        message = `Общая сумма: ${total}`;
        break;
    }
    total += parseInt(askUser);
}
alert(message)