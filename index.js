let bigbox = document.querySelector('.bigbox');

// let heighty = [];

//width
for (let i = 1; i <= 16; i++) {
  let height = document.createElement('div');
  // heighty.push(height);

  height.id = 'height' + i;
  bigbox.appendChild(height);

  //height
  for (let j = 1; j <= 16; j++) {
    let div = document.createElement('div');
    div.id = 'div' + j + '-' + i;
    div.style.border = '1px solid black';
    div.style.height = '30px';
    div.style.width = '30px';
    height.appendChild(div);
  }
}
// let height = document.querySelector('.div1');
height3.style.border = '4px solid red';
// div1.style.border = '4px solid red';
