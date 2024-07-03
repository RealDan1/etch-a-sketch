let bigbox = document.querySelector('.bigbox');
let boxes = [];
let boxSize = 30;
loadGrid();

function loadGrid() {
  for (let i = 1; i <= boxSize; i++) {
    let width = document.createElement('div');
    width.id = 'width' + i;
    bigbox.appendChild(width);

    width.style.display = 'flex';
    width.style.flex = '1';
    width.style.flexDirection = 'column';

    //height
    for (let j = 1; j <= boxSize; j++) {
      let div = document.createElement('div');
      width.appendChild(div);
      div.id = 'div' + j;
      boxes.push(div);

      div.style.display = 'flex';
      div.style.flex = '1';
      div.style.border = '1px solid black';
      div.style.width = 'auto';
    }
  }
}

function clearGrid() {
  let body = document.querySelector('body');
  body.removeChild(bigbox);
  let bigbox = document.createElement('div');
  body.appendChild(bigbox);
}
//button to input x/y size
let sizeButton = document.querySelector('.size_button');
sizeButton.addEventListener('click', () => {
  boxSize = prompt('how many boxes do you want for the grid size?');
  if (width) {
    clearGrid();
    loadGrid();
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

//width

// //change color on hover
// boxes.forEach((element) => {
//   element.addEventListener('mouseover', () => {
//     element.style.backgroundColor = 'black';
//   });
// });

// //reset button
// let reset_button = document.querySelector('.reset_button');
// reset_button.addEventListener('click', () => {
//   boxes.forEach((element) => {
//     element.style.backgroundColor = 'white';
//   });
// });
