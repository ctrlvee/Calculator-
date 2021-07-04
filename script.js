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
