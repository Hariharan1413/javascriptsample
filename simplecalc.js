// Progrm for simple calculator

const operator = prompt('Enter the operator ( either +,-,*bor / ):');
const number1  = parseFloat(prompt('Enter first number:'));
const number2  = parseFloat(prompt('Enter second number:'));

switch(operator) {
    case '+' :
        result = number1 + number2;
        console.log('${number1} + ${number2} = ${result}');
        break;
    case '-' :
        result = number1 - number2;
        console.log('${number1} + ${number2} = ${result}');
        break;
    case '*' :
        result = number1 * number2;
        console.log('${number1} + ${number2} = ${result}');
        break;
    case '/' :
        result = number1 / number2;
        console.log('${number1} + ${number2} = ${result}');
        break;
    default:
        console.log('Invalid operator');
        break;
}

