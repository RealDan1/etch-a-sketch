let bigbox = document.querySelector('.bigbox');

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
    div.style.border = '1px solid black';
    div.style.height = '30px';
    div.style.width = '30px';
    width.appendChild(div);
  }
}
// let width = document.querySelector('.div1');
width3.style.border = '4px solid red';
div3.style.border = '4px solid red';
