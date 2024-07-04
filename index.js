let bigbox = document.querySelector('.bigbox');
let boxes = [];
let boxSize = 6;
loadGrid();

function loadGrid() {
  for (let i = 1; i <= boxSize; i++) {
    let width = document.createElement('div');
    width.id = 'width' + i;
    width.classList.add = 'widthDivs';
    // width.style.border = '1px solid black';
    bigbox.appendChild(width);

    width.style.display = 'flex';
    width.style.flex = '1';
    width.style.flexDirection = 'column';

    //height
    for (let j = 1; j <= boxSize; j++) {
      let div = document.createElement('div');
      width.appendChild(div);
      div.id = 'div' + j;
      div.classList.add = 'heightDivs';
      boxes.push(div);

      div.style.display = 'flex';
      div.style.flex = '1';
      div.style.border = '1px solid black';
      div.style.width = 'auto';
    }
  }
}

//OLD clears the grid
function clearGrid() {
  let body = document.querySelector('body');
  var bigbox = document.querySelector('.bigbox');
  body.removeChild(bigbox);
  bigbox = document.createElement('div');
  bigbox.classList.add = 'bigbox';
  body.appendChild(bigbox);
}

//new clearGrid
// function clearGrid() {
//   let body = document.querySelector('body');
//   let bigbox = document.querySelector('.bigbox');
//   for (let i = 1; i <= boxSize; i++) {
//     body.removeChild(bigbox);
//     let bigbox = document.createElement('div');
//     body.appendChild(bigbox);
//   }
// }
//resize button
let sizeButton = document.querySelector('.size_button');
sizeButton.addEventListener('click', () => {
  boxSize = prompt('how many boxes do you want for the grid size?');
  let element = document.querySelector('.widthDivs');
  if (element) {
    clearGrid();
    loadGrid();
  } else {
    loadGrid;
  }
});

//change color on hover
boxes.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'black';
  });
});

//reset button
let reset_button = document.querySelector('.reset_button');
reset_button.addEventListener('click', () => {
  boxes.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});
