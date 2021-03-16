// TASK #5 ==============================================================
alert('Сейчас вы просматриваете задание №5')

const askUser = prompt('Введите страну для расчета доставки', '').toLowerCase();

let price = 0;
let country = '';
let message = '';

switch(askUser) {
    case 'китай':
        alert('Доставка в Китай будет стоить 150 кредитов')
        break;
    case 'чили':
        alert(`Доставка в Чили будет стоить 250 кредитов`)
        break;
    case 'австралия':
        alert(`Доставка в Австралию будет стоить 165 кредитов`)
        break;
    case 'индия':
        price = 90;
        alert(`Доставка в Индию будет стоить ${price} кредитов`)
        break;
    case 'ямайка':
        price = 130;
        country = askUser;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        alert(message = 'Доставка в вашей стране не доступна :(')
}