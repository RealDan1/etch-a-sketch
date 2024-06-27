let container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
  let div = document.createElement('div');
  div.id = 'div' + i;
  div.style.border = '1px solid black';
  div.style.height = '30px';
  div.style.width = '30px';
  container.appendChild(div);
}
//width
// let br = document.createElement('br');
// container.appendChild(br);
