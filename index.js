let bigbox = document.querySelector('.bigbox');

for (let i = 1; i <= 16; i++) {
  let height = document.createElement('div');

  height.id = 'height' + i;
  bigbox.appendChild(height);

  // container.style.display = flex;
  for (let j = 1; j <= 16; j++) {
    let div = document.createElement('div');
    div.id = 'div' + j;
    div.style.border = '1px solid black';
    div.style.height = '30px';
    div.style.width = '30px';
    height.appendChild(div);
  }
}
// let height1 = document.querySelector('.div1');
// height1.style.border = '1px solid red';
