let display = document.getElementById('display');

function printToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}   

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Hata';
    }
}