const container = document.querySelector('.container');
let gridBlocks;
let gridSelection;

const newBtn = document.querySelector('#new-board');
newBtn.addEventListener('click', (e) => {
  createBoard();
});

const resetBtn = document.querySelector('#reset-board');
resetBtn.addEventListener('click', (e) => {
  resetBoard();
});

function getGridSize() {
  let answer;

  do {
    answer = parseInt(prompt('Select a grid size between 10 & 100:'), 10);
  } while(isNaN(answer) || answer > 100 || answer < 10);

  return answer;
}

function createGrid(maxHeightWidth) {
  container.style.gridTemplateColumns = `repeat(${gridSelection}, ${maxHeightWidth})`;
  container.style.gridTemplateRows = `repeat(${gridSelection}, ${maxHeightWidth})`;
}

function createBoard() {
  gridSelection = getGridSize();
  let maxHeightWidth = (800 / gridSelection);
  let divCount = Math.pow(gridSelection, 2);

  createGrid(maxHeightWidth);

  while(container.firstChild) container.removeChild(container.firstChild);

  for(let x = 0; x < divCount; x++) {
    let gridBlock = document.createElement('div');
    
    gridBlock.id = `grid-block-${x}`;
    gridBlock.classList.add('grid-block-divs');
    gridBlock.style.height = `${maxHeightWidth}`;
    gridBlock.style.width = `${maxHeightWidth}`;

    container.appendChild(gridBlock);
  }
  gridBlocks = document.querySelectorAll('.container .grid-block-divs');
  addEventListenersToGridBlocks();
}

function resetBoard() {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.classList.remove('hovered-grid-block');
  });
}

function addEventListenersToGridBlocks() {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener('mouseover', (e) => {
      gridBlock.classList.add('hovered-grid-block');
    });
  });
}