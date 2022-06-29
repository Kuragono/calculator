/**** Constants or value ****/

const DISPLAY = document.getElementById('display');
let display_value = 0;
let stored_number_value = 0;
let stored_operator;

/**** Functions ****/

function add(num) {
    display_value += num;
}

function subtract(num) {
    display_value -= num;
}

function multiply(num) {
    display_value *= num;
}

function divide(num) {
    display_value /= num;
}

function clear() {
    display_value = 0;
    DISPLAY.textContent = `${display_value}`;
}

function operate(operator, num) {
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
}

/**** Buttons ****/

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = (a) => {
        stored_number_value = a.currentTarget.innerText;
    }
}

const operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = (a) => {
        stored_operator = a.currentTarget.innerText;
        if (stored_operator == '+') {
            stored_operator = 'ADD';
        } else if (stored_operator == '-') {
            stored_operator = 'SUBTRACT';
        } else if (stored_operator == '*') {
            stored_operator = 'MULTIPLY';
        } else if (stored_operator == '/') {
            stored_operator = 'DIVIDE';
        }
    }  
}

document.getElementById('btn=').onclick = () => {operate(stored_operator,stored_number_value)};
document.getElementById('btnc').onclick = () => {clear()};