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

// 큐브 배열 값에 따른 화면 구성 함수
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

// 명령에 따른 큐브 동작 함수
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
  const lastArr = cube.arr.length - 1;
  const temp = cube.arr[lastArr].shift();
  cube.arr[lastArrNum].push(temp);
  removeBtns();
  displayCube();
}

function bottomRight(move) {
  if (move !== `B`) return;
  const lastArr = cube.arr.length - 1;
  const temp = cube.arr[lastArr].pop();
  cube.arr[lastArr].unshift(temp);
  removeBtns();
  displayCube();
}

function rightUp(move) {
  if (move !== `R`) return;

  // 각 배열의 마지막 문자를 temp에 저장
  const temp = cube.arr.map((cubeArr) => {
    return cubeArr[cubeArr.length - 1];
  });
  // 가장 앞의 문자를 뒤로 옮김
  temp.push(temp.shift());
  for (let i = 0; i < temp.length; i++) {
    cube.arr[i][temp.length - 1] = temp[i];
  }

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

// 큐브 동작
function moveCube() {
  const moveOrder = cube.movement.join('').split('');
  const finalMove = checkApostrophe(moveOrder);
  finalMove.forEach((move) => {
    upLeft(move);
    upRight(move);
    bottomRight(move);
    bottomRight(move);
    rightUp(move);
    // console.log(move);         //콘솔 출력
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
  // console.table(cube.arr); // 초기값을 콘솔창에 출력
  displayCube();
  btn.addEventListener('click', btnHandler);
}

main();
