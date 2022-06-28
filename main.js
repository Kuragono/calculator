function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === 'ADD') {
        return add(a,b);
    } else if (operator === 'SUBTRACT') {
        return subtract(a,b);
    } else if (operator === 'MULTIPLY') {
        return multiply(a,b);
    } else if (operator === 'DIVIDE') {
        return divide(a,b);
    }
}

console.log(add(8,5),subtract(8,5),multiply(8,5),divide(8,5));
console.log(operate('ADD',8,5),operate('SUBTRACT',8,5),operate('MULTIPLY',8,5),operate('DIVIDE',8,5))