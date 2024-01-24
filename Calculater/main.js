const display = document.querySelector('.display');

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function addNumber(number) {
    display.value += number;
}

function addOperator(operator) {
    if (operator === '%') {
        display.value = (parseFloat(display.value) /100).toString();
    } else {
        display.value += operator;
    }
}

function calculateResult() {
    try {
        if (display.value.includes('%')) {
            let percentage = display.value.match(/\d+(\.\d+)?/g);
            let result = (parseFloat(percentage[0]) * parseFloat(percentage[1])) / 100;
            display.value = result.toString();
        } else {
            display.value = eval(display.value);
        }
    } catch (error){
        display.value = 'Error';
    }
}
