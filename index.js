let bigbox = document.querySelector('.bigbox');

for (let i = 1; i <= 16; i++) {
  let height = document.createElement('div');

  height.id = 'height' + i;
  bigbox.appendChild(height);

  // container.style.display = flex;
  for (let i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.id = 'div' + i;
    div.style.border = '1px solid black';
    div.style.height = '30px';
    div.style.width = '30px';
    height.appendChild(div);
  }
  // let br = document.createElement('br');
  // container.appendChild(br);
}

//width
// let br = document.createElement('br');
// container.appendChild(br);
