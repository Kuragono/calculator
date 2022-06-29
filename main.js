/**** Constants or value ****/

const DISPLAY = document.getElementById('display');
let display_value = 0;
let stored_number_value = 0;
let stored_operator;

/**** Functions ****/

function add(num) {
    display_value += num;
    DISPLAY.textContent = display_value;
    stored_number_value = 0;
}

function subtract(num) {
    display_value -= num;
    DISPLAY.textContent = display_value;
    stored_number_value = 0;
}

function multiply(num) {
    display_value *= num;
    DISPLAY.textContent = display_value;
    stored_number_value = 0;
}

function divide(num) {
    display_value /= num;
    DISPLAY.textContent = display_value;
    stored_number_value = 0;
}

function clear() {
    display_value = 0;
    stored_number_value = 0;
    DISPLAY.textContent = `${display_value}`;
}

function operate(operator, num) {
    num = parseInt(num);
    if (operator === 'ADD') {
        add(num);
    } else if (operator === 'SUBTRACT') {
        subtract(num);
    } else if (operator === 'MULTIPLY') {
        multiply(num);
    } else if (operator === 'DIVIDE') {
        divide(num);
    }
    DISPLAY.textContent = `${display_value}`;
    stored_number_value = 0;
}

/**** Buttons ****/

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = (a) => {
        stored_number_value += a.currentTarget.innerText.toString();
        DISPLAY.textContent = `${parseInt(stored_number_value)}`;
    }
}

const operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = (a) => {
        stored_operator = a.currentTarget.innerText;
        stored_number_value = parseInt(stored_number_value);
        if (stored_operator == '+') {
            stored_operator = 'ADD';
            add(stored_number_value);
        } else if (stored_operator == '-') {
            stored_operator = 'SUBTRACT';
            subtract(stored_number_value);
        } else if (stored_operator == '*') {
            stored_operator = 'MULTIPLY';
            multiply(stored_number_value);
        } else if (stored_operator == '/') {
            divide(stored_number_value);
        }
    }  
}

document.getElementById('btn=').onclick = () => {operate(stored_operator,parseInt(stored_number_value))};
document.getElementById('btnc').onclick = () => {clear()};