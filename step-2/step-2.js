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

// 큐브 동작 함수

function upLeft() {
  const temp = cube.arr[0].shift();
  cube.arr[0].push(temp);
  removeBtns();
  displayCube();
}

function upRight() {
  const temp = cube.arr[0].pop();
  cube.arr[0].unshift(temp);
  removeBtns();
  displayCube();
}

const btnHandler = (e) => {
  const inputText = document.querySelector('.input-text');
  inputText.textContent = input.value;
  cube.movement.push(input.value);
  input.value = '';
};

function main() {
  displayCube();
  btn.addEventListener('click', btnHandler);
}

main();
