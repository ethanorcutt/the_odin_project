const container = document.querySelector('.container');
const calculatorHead = document.querySelector('#calculator-head');
const calculatorBody = document.querySelector('#calculator-body');
const ignoreableIDs = ['clear-all', 'clear-current', 'backspace', 'pos-neg-toggle', '='];
const gridWidth = 450;
const gridSize = 4;

let calculatorOutput = 0;
let gridBlocks;
let inputtedValues = [];

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

function operate () {
  const operators = ['+', '-', '/', '*'];
  let operatorIndices = [];
  let firstValue = 0;
  let secondValue = 0;
  let operator = '';
  
  for (let x = 0; x <= inputtedValues.length; x++) {
    if (operators.includes(inputtedValues[x])) operatorIndices.push(x);
  }

  console.log(inputtedValues);
  console.log(operatorIndices);

  firstValue = Number(inputtedValues.slice(0, operatorIndices[0]).join(''));
  secondValue = Number(inputtedValues.slice(operatorIndices[0]
              + 1, inputtedValues.length).join(''));
  operator = inputtedValues[operatorIndices[0]];

  switch (operator) {
    case '+': calculatorOutput = add (firstValue, secondValue); break;
    case '-': calculatorOutput = subtract (firstValue, secondValue); break;
    case '*': calculatorOutput = multiply (firstValue, secondValue); break;
    case '/': calculatorOutput = divide (firstValue, secondValue); break;
    default: alert('Invalid Input');
  }

  checkAndUpdateScores (calculatorOutput);
}

function createGrid (maxHeightWidth) {
  calculatorBody.style.gridTemplateColumns = `repeat(${gridSize}, ${maxHeightWidth})`;
  calculatorBody.style.gridTemplateRows = `repeat(${gridSize}, ${maxHeightWidth})`;
}

function createBoard () {
  let maxHeightWidth = (gridWidth / gridSize);
  let divCount = Math.pow(gridSize, 2);

  createGrid(maxHeightWidth);
  checkAndUpdateScores(0);

  gridBlocks = document.querySelectorAll('#calculator-body .grid-block-divs');
  addEventListenersToGridBlocks();
}

function updateTextDisplays (target, string) {
    const calculatorOutput = document.querySelector('#calculator-output');
    
    if(target === 'calculatorOutput') calculatorOutput.textContent = string;
}

function checkAndUpdateScores (output) {
    updateTextDisplays('calculatorOutput', output);
}

function addEventListenersToGridBlocks () {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener('click', (e) => {
      if (!ignoreableIDs.includes(gridBlock.id)) {
        inputtedValues.push(gridBlock.id);
        checkAndUpdateScores(gridBlock.id);
      }

      if (gridBlock.id == 'clear-all') {
        calculatorOutput = 0;
        inputtedValues = [];
        checkAndUpdateScores(calculatorOutput);
      }
      else if (gridBlock.id == '=') {
        operate ();
      }
    });
  });
}

createBoard ();