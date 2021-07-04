function add(numOne, numTwo) {
    return numOne + numTwo
}
function subtract(numOne, numTwo) {
    return numOne - numTwo
}
function multiply(numOne, numTwo) {
    return numOne * numTwo
}
function divide(numOne, numTwo) {
    return numOne / numTwo
}
function compute(operator,numOne, numTwo) {
    switch (operator) {
        case '+':
            return add(numOne,numTwo);
        case 'subtract':
            return subtract(numOne,numTwo)
        case '*':
            return multiply(numOne,numTwo)
        case '/':
            return divide(numOne,numTwo)
    }
}

// Section for display
const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
document.body.appendChild(displayContainer);

// Display current & previous container
const currentValue = document.createElement('p')
currentValue.classList.add('currentValue');
currentValue.textContent = 'current';
displayContainer.appendChild(currentValue);

const previousValue = document.createElement('p');
previousValue.classList.add('previousValue');
previousValue.textContent = 'previous';
displayContainer.appendChild(previousValue);