let bigbox = document.querySelector('.bigbox');
let boxes = [];
//width
for (let i = 1; i <= 16; i++) {
  let width = document.createElement('div');
  bigbox.appendChild(width);
  width.style.display = 'flex';
  width.style.flex = '1';
  width.style.flexDirection = 'column';
  // widthy.push(width);

  width.id = 'width' + i;

  //height
  for (let j = 1; j <= 16; j++) {
    let div = document.createElement('div');
    width.appendChild(div);
    div.id = 'div' + j;
    boxes.push(div);
    div.style.display = 'flex';
    div.style.flex = '1';
    div.style.border = '1px solid black';

    // div.style.height = '20px';
    // div.style.width = '20px';
  }
}

// width1.style.border = '4px solid red';
// boxes[100].style.border = '5px solid red';
// boxes[101].style.border = '5px solid red';

//change color on hover
boxes.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'black';
  });
});

// boxes.forEach((element) => {
//   element.addEventListener('mouseout', () => {
//     element.style.backgroundColor = 'red';
//   });
// });

let reset_button = document.querySelector('.reset_button');
reset_button.addEventListener('click', () => {
  boxes.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});
