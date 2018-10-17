const operators = ['+', '-', '*', '/'];

let inputtedValues = [];
let runningTotal = 0;

function operate () {
  let calculatorOutput = 0;
  let operatorIndices = [];

  for (var i = 0; i < inputtedValues.length; i++)
    if (operators.includes(inputtedValues[i])) operatorIndices.push(i);

  let firstValue = Number(inputtedValues.slice(0, operatorIndices[0]).join(''));;
  let secondValue = Number(inputtedValues.slice(operatorIndices[0] + 1, inputtedValues.length).join(''));;
  let currentOperator = inputtedValues[operatorIndices[0]];

  switch (currentOperator) {
    case '+': calculatorOutput = add (firstValue, secondValue); break;
    case '-': calculatorOutput = subtract (firstValue, secondValue); break;
    case '*': calculatorOutput = multiply (firstValue, secondValue); break;
    case '/': calculatorOutput = divide (firstValue, secondValue); break;
    default: alert("You can't do that!");
  }

  runningTotal = calculatorOutput;
  checkAndUpdateScores(runningTotal);
  clearCurrentSession();

  function add (a, b) {
    // if (typeof a !== 'number' || typeof a !== 'number') return 0; // I forgot what use case would generate this error, but I think this is the fix for it.
    return a + b;
  }

  function subtract (a, b) {
    return a - b;
  }

  function divide (a, b) {
    if (b == 0) { 
      alert ("You fool! You can't divide by 0.");
      return 0;
    }
    else return a / b;
  }

  function multiply (a, b) {
    return a * b;
  }
}

function checkAndUpdateScores (output) {
  updateTextDisplays('calculatorOutput', output);
  updateTextDisplays('calculatorOutputSmall', inputtedValues.join(''));
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
  if (btnID == 'CLR') resetCalculator();
  else if (btnID == 'BKSP') {
    inputtedValues.pop();
    if (inputtedValues.length == 0)
      checkAndUpdateScores(0);
    else
      checkAndUpdateScores(inputtedValues[inputtedValues.length - 1]);
  }
  else if (btnID == '=') operate();
  else if (operators.includes(inputtedValues[inputtedValues.length - 1]) && operators.includes(btnID)) alert ("Can't use multiple operators back-to-back.");
  else {
      inputtedValues.push(btnID);
    checkAndUpdateScores(btnID);
  }
  console.log(btnID);
  console.log(inputtedValues);
}

function clearCurrentSession() {
  inputtedValues = [runningTotal];
  checkAndUpdateScores(runningTotal);
}

function resetCalculator() {
  inputtedValues = [];
  checkAndUpdateScores(0);
}

setupEventListeners();