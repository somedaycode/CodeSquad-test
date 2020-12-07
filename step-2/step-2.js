const container = document.querySelector('#container');
const btn = document.querySelector('.btn');
let input = document.querySelector('#movement');

const cube = {
  arr: [
    ['R', 'R', 'W'],
    ['G', 'C', 'W'],
    ['G', 'B', 'B'],
  ],
  movement: [],
};

function displayCube() {
  for (let i = 0; i < cube.arr.length; i++) {
    for (let j = 0; j < cube.arr.length; j++) {
      const text = document.createElement('div');
      text.textContent = cube.arr[i][j];
      text.className = 'item-value';
      text.id = `${i}${j}`;
      container.appendChild(text);
    }
  }
}

function removeBtns() {
  const number = Math.pow(cube.arr.length, 2);
  for (let i = 0; i < number; i++) {
    container.removeChild(container.childNodes[0]);
  }
}

function upLeft() {
  const temp = cube.arr[0].shift();
  cube.arr[0].push(temp);
  removeBtns();
  displayCube();
}

function init() {
  displayCube();
  btn.addEventListener('click', (e) => {
    if (input.value === 'U') {
      upLeft();
    }
  });
}

init();
