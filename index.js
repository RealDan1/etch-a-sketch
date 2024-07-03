let bigbox = document.querySelector('.bigbox');
let boxes = [];
let boxSize = 30;

//button to input x/y size
let sizeButton = document.querySelector('.size_button');

//width
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
