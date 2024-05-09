const display = document.getElementById('result');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;

    if(buttonText === 'C') {
      display.innerText = '';
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
    } else if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      currentOperator = buttonText;
      firstOperand = parseFloat(display.innerText);
      display.innerText = '';
    } else if(buttonText === '=') {
      const result = eval(firstOperand + ' ' + currentOperator + ' ' + display.innerText);
      display.innerText = result;
      firstOperand = result;
      secondOperand = null;
      currentOperator = null;
    } else {
      display.innerText += buttonText;
    }
  });
});