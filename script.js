let result = 0;


// Section for display
const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
document.body.appendChild(displayContainer);

// Display current & previous container
const currentValue = document.createElement('p')
currentValue.classList.add('currentValue');
//currentValue.textContent = '';
//displayContainer.appendChild(currentValue);

const previousValue = document.createElement('p');
previousValue.classList.add('previousValue');
previousValue.textContent = 'previous';
displayContainer.appendChild(previousValue);

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
            result = add(numOne,numTwo);
            break
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
    
    updateDisplay(result);
    console.log("I'm here");
}

function updateDisplay(result) {
    currentValue.textContent = result;
displayContainer.appendChild(currentValue);
    //document.getElementsByClassName('currentValue').textContent = result;
   
}
