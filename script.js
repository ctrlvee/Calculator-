let result;
let useOperator;

// Section for display
const calcContainer = document.querySelector('.calcContainer');
const buttonsContainer = document.querySelector('.buttonsContainer');
const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
calcContainer.insertBefore(displayContainer,buttonsContainer);

// Display current & previous container
const currentValue = document.createElement('p')
currentValue.classList.add('currentValue');
currentValue.textContent = '';
displayContainer.appendChild(currentValue);

const previousValue = document.createElement('p');
previousValue.classList.add('previousValue');
previousValue.textContent = '';
displayContainer.appendChild(previousValue);

function checkLength() {

    switch(currentValue.textContent.length) {
        case 11:
            currentValue.style.cssText = 'font-size: 1em; overflow-wrap: break-word; margin:auto; margin-top: 10px';
            break;
        case 25:
            currentValue.style.cssText = 'font-size: 0.5em; word-wrap: break-all; margin:auto ';
    }

}

function add(numOne, numTwo) {
    return (numOne+numTwo)
}
function subtract(numOne, numTwo) {
    return (numOne-numTwo)
}
function multiply(numOne, numTwo) {
    return (numOne*numTwo)
}
function divide(numOne, numTwo) {
    return (numOne/numTwo)
}
function compute(operator,numOne, numTwo) {
    switch (operator) {
        case '+':
            result = add(numOne,numTwo);
            break;
        case '-':
            result = subtract(numOne,numTwo);
            break
        case '*':
            result = multiply(numOne,numTwo)
            break
        case '÷':
            result = divide(numOne,numTwo);
            break
    }
    updateDisplay();
}
function updateDisplay() {
    currentValue.textContent = result;
}
function clear() {
    previousValue.textContent ='';
    currentValue.textContent ='';
}
function addDecimal() {
    if (!(currentValue.textContent.includes('.'))) {
        currentValue.textContent += decimal.textContent;
    }
}

const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equalSign');
const allClear = document.querySelector('.allClear');
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click',addDecimal)
document.addEventListener('click', checkLength);
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue.textContent += button.textContent;
        currentValue.textContent = currentValue.textContent.replace(' ', '');
        console.log(currentValue.textContent);
        displayContainer.appendChild(currentValue);
    });
    
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        previousValue.textContent = currentValue.textContent;
        currentValue.textContent = '';
        useOperator = operator.textContent;
    });
});

equalSign.addEventListener('click', function () {
    if (parseFloat(currentValue.textContent) === 0) {
        return currentValue.textContent = 'ERROR';
    } else {
        compute(useOperator, parseFloat(previousValue.textContent),parseFloat(currentValue.textContent));

        previousValue.textContent = '';
    }
   
    
});
allClear.addEventListener('click', clear)
