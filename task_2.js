// TASK #2 ==============================================================
alert('Сейчас вы просматриваете задание №2')

const total = 100;
const ordered = 130;

if (ordered > total) {
    console.log(`На складе не достаточно товаров! Вы заказали ${ordered} товаров, а на складе всего ${total}`);
}
else {
    console.log('Заказ оформлен, с вами свяжется менеджер!');
}