let value = prompt("Введите число");
if (value === null) {
    console.log("Вы не ввели число");
} else if ((typeof(+value) == 'number') && (!isNaN(+value))){
    if (value % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}