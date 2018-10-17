let inputtedValues = [];

function operate () {
  switch (currentOperator) {
    case '+': calculatorOutput = add (firstValue, secondValue); break;
    case '-': calculatorOutput = subtract (firstValue, secondValue); break;
    case '*': calculatorOutput = multiply (firstValue, secondValue); break;
    case '/': calculatorOutput = divide (firstValue, secondValue); break;
    default: alert('Invalid Input - OPERATE');
  }

  function add (a, b) {
    return a + b;
  }

  function subtract (a, b) {
    return a - b;
  }

  function divide (a, b) {
    return a / b;
  }

  function multiply (a, b) {
    return a * b;
  }
}

function checkAndUpdateScores (output) {
  updateTextDisplays('calculatorOutput', output);
  updateTextDisplays('calculatorOutputSmall', inputtedValues.join(' '));
}

function updateTextDisplays (target, string) {
    const calculatorOutput = document.querySelector('#calculator-output');
    const calculatorOutputSmall = document.querySelector('#calculator-output-small');
    
    if(target === 'calculatorOutput') calculatorOutput.textContent = string;
    else if(target === 'calculatorOutputSmall') calculatorOutputSmall.textContent = string;
}

function setupEventListeners() {
  const calcButtons = document.querySelectorAll('.calc-button');

  calcButtons.forEach(btn => {
    if (btn.id !== '') {
      btn.addEventListener('click', (e) => {
        validateInput(btn.id);
      });
    }
  });
}

function validateInput(btnID) {
  const operators = ['+', '-', '*', '/'];

  if (btnID == 'CLR') resetCalculator();
  else if (btnID == 'BKSP') {
    inputtedValues.pop();
    checkAndUpdateScores(inputtedValues[inputtedValues.length - 1]);
  }
  else if (btnID == '=') alert ('Operate not working currently.'); // operate();
  else { 
    inputtedValues.push(btnID);
    checkAndUpdateScores(btnID);
  }
  
  console.log(inputtedValues);
}

function resetCalculator() {
  inputtedValues = [];
  checkAndUpdateScores(0);
}

setupEventListeners();