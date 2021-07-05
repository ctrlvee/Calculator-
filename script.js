let result;
let useOperator;


// Section for display
const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
document.body.appendChild(displayContainer);

// Display current & previous container
const currentValue = document.createElement('p')
currentValue.classList.add('currentValue');
currentValue.textContent = '';
displayContainer.appendChild(currentValue);


const previousValue = document.createElement('p');
previousValue.classList.add('previousValue');
previousValue.textContent = 'previous';
displayContainer.appendChild(previousValue);

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
        case '/':
            result = divide(numOne,numTwo);
            break
    }

    updateDisplay();
}

function updateDisplay() {
    currentValue.textContent = result;
}


const numButtons = document.querySelectorAll('.button-number');
const operatorButtons = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equalSign');
const allClear = document.querySelector('.allClear');

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
   compute(useOperator, parseFloat(previousValue.textContent),parseFloat(currentValue.textContent));
    
}, {
    once: true,
    //temporary true value.
});