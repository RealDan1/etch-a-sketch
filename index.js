let bigbox = document.querySelector('.bigbox');
let height = [];
//width
for (let i = 1; i <= 16; i++) {
  let width = document.createElement('div');
  // widthy.push(width);

  width.id = 'width' + i;
  bigbox.appendChild(width);

  //height
  for (let j = 1; j <= 16; j++) {
    let div = document.createElement('div');
    div.id = 'div' + j;
    height.push(div);
    div.style.border = '1px solid black';
    div.style.height = '30px';
    div.style.width = '30px';
    width.appendChild(div);
  }
}
// let width = document.querySelector('.div1');
width1.style.border = '4px solid red';
height[100].style.border = '5px solid red';
height[101].style.border = '5px solid red';
