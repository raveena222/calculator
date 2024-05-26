let firstOperand ='';
let secondOperand ='';
let operation= null;

function handleDigitClick(event){
    const buttonText = event.target.innerText;
    inputField.value += buttonText;
    secondOperand += buttonText;
    if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/' ){
        firstOperand = secondOperand;
        operation= buttonText;
        secondOperand ='';

    }
    
}

const buttons = document.querySelectorAll('.js-digit');

const inputField = document.querySelector('.input1');

buttons.forEach(button =>{
    button.addEventListener('click', handleDigitClick);
});
 

function calculate(){
    let computation;
    const first = parseInt(firstOperand);
    const second = parseInt(secondOperand);
    if(isNaN(first) || isNaN(second)) return;
    
    switch(operation){
        case '+':
            computation = first +second;
            break;
        case '-':
            computation = first - second;
            break;
        case '*':
            computation = first * second;
            break;
        case '/':
            computation = first /second;
            break;
        default:
            return;

    }
    secondOperand ='' + computation;
    operation= null;
    firstOperand ='';
    updateDisplay();
}

function updateDisplay(){
    document.querySelector('.output').value = secondOperand;
}

const equals = document.querySelector('.equalButton');
equals.addEventListener('click', calculate);

const oper = document.querySelector('.js-clear');
oper.addEventListener('click', clearDisplay);

function clearDisplay(){
    firstOperand='';
    secondOperand='';
    operation=null;
    inputField.value ='';
    document.querySelector('.output').value ='';
 }