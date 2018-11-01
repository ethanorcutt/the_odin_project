const container = document.querySelector('.container');
let gridBlocks;
let gridSelection;
let color = 0;

const newBtn = document.querySelector('#new-board');
newBtn.addEventListener('click', (e) => {
  createBoard();
});

const resetBtn = document.querySelector('#reset-board');
resetBtn.addEventListener('click', (e) => {
  resetBoard();
});

const colorBtn = document.querySelector('#color-btn');
colorBtn.addEventListener('click', (e) => {
  // Color starts turned off.
  // If color is on, then turn it off & change the button to say 'Color'.
  if(color) {
    color = 0;
    colorBtn.textContent = 'Color';
  }
  else { // If color is off, then turn it on & change the button to say 'Black'.
    color = 1;
    colorBtn.textContent = 'Black'
  }
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
  // Checks if a non-null is currently in the gridBlocks var.
  // Using this to prevent an error being generated when the grid has not been loaded.
  if(gridBlocks) {
    gridBlocks.forEach((gridBlock) => {
      gridBlock.style.cssText = "";
    });
  }
}

function addEventListenersToGridBlocks() {
  gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener('mouseover', (e) => {
      if(color) {
        // If the color btn is selected, pass a random color.
        gridBlock.style.cssText = `background-color: 
          rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)});`;
      } else { // Else pass black to the grid when hovered.
        gridBlock.style.cssText = 'background-color: black;';
      }
    });
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}