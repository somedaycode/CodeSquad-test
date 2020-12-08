const container = document.querySelector('#container');
const btn = document.querySelector('.btn');
let input = document.querySelector('#input-order');

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

function upLeft(move) {
  if (move !== 'U') return;
  const temp = cube.arr[0].shift();
  cube.arr[0].push(temp);
  removeBtns();
  displayCube();
}

function upRight(move) {
  if (move !== `U'`) return;
  const temp = cube.arr[0].pop();
  cube.arr[0].unshift(temp);
  removeBtns();
  displayCube();
}

function bottomLeft(move) {
  if (move !== `B'`) return;
  const lastArrNum = cube.arr.length - 1;
  const temp = cube.arr[lastArrNum].shift();
  cube.arr[lastArrNum].push(temp);
  removeBtns();
  displayCube();
}

function bottomRight(move) {
  if (move !== `B`) return;
  const lastArrNum = cube.arr.length - 1;
  const temp = cube.arr[lastArrNum].pop();
  cube.arr[lastArrNum].unshift(temp);
  removeBtns();
  displayCube();
}

// 작은따옴표 문자 검사
function checkApostrophe(moveOrder) {
  const moves = moveOrder;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === `'`) {
      const merge = moves[i - 1].concat(`'`);
      moves.splice(i, 1);
      moves[i - 1] = merge;
    }
  }
  return moves;
}

function moveCube() {
  const moveOrder = cube.movement.join('').split('');
  const finalMove = checkApostrophe(moveOrder);
  finalMove.forEach((move) => {
    upLeft(move);
    upRight(move);
    bottomRight(move);
    bottomRight(move);
    // console.log(move);
    // console.table(cube.arr);
  });
  cube.movement = [];
}

// 확인버튼
const btnHandler = (e) => {
  const inputText = document.querySelector('.input-text');
  inputText.textContent = input.valuer;
  cube.movement.push(input.value);
  // console.log(`CUBE> ${input.value}`); // 콘솔창 출력
  input.value = '';
  moveCube();
};

function main() {
  displayCube();
  console.table(cube.arr);
  btn.addEventListener('click', btnHandler);
}

main();
