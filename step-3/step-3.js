const startBtn = document.querySelector('.btn-start');

const cube = {
  movement: [],
};

/*

초기 화면 구성 함수

*/

// 화면에 큐브를 출력
function displayCube() {
  let count = 0;
  for (let i = 0; i < 6; i++) {
    count++;
    const cubeContainer = document.querySelector(`#c${i + 1}`);
    for (let j = 0; j < 9; j++) {
      const box = document.createElement('div');
      box.className = `color${count}`;
      cubeContainer.appendChild(box);
    }
  }
}

// 3개의 row를 만듬
function makeCube() {
  return Array(3)
    .fill()
    .map(() => Array());
}

// 각각의 스타일 값을 3*3 배열에 집어넣음
function putValues(number) {
  const cubeMaker = makeCube();
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cubeMaker[i][j] = document.querySelectorAll(`.color${number}`)[count];
      count++;
    }
  }
  return cubeMaker;
}

/*

큐브 명령어 및 동작 함수 

 */

function frontClockwise(move) {
  if (move !== 'F') return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color1[length - 1][i].className);
    cube.color1[length - 1][i].className = cube.color6[i][length - 1].className;
    cube.color6[i][length - 1].className = cube.color2[0][i].className;
    cube.color2[0][i].className = cube.color4[i][0].className;
  }
  cube.color4.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

function frontInvert(move) {
  if (move !== `F'`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color2[length - 1][i].className);
    cube.color1[length - 1][i].className = cube.color4[i][length - 1].className;
    cube.color6[i][length - 1].className = cube.color1[0][i].className;
    cube.color2[0][i].className = cube.color6[i][0].className;
  }
  cube.color4.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

function rightClockwise(move) {
  if (move !== `R`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color1[i][length - 1].className);
    cube.color1[i][length - 1].className = cube.color3[i][length - 1].className;
    cube.color3[i][length - 1].className = cube.color2[i][length - 1].className;
    cube.color2[i][length - 1].className = cube.color5[i][0].className;
  }
  cube.color5.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

function rightInveted(move) {
  if (move !== `R'`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color2[i][length - 1].className);
    cube.color2[i][length - 1].className = cube.color3[i][length - 1].className;
    cube.color3[i][length - 1].className = cube.color1[i][length - 1].className;
    cube.color1[i][length - 1].className = cube.color5[i][0].className;
  }
  cube.color5.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

function upClockwise(move) {
  if (move !== `U`) return;
  const tempName = [];
  const temp = [];

  for (let i = 0; i < 3; i++) {
    tempName.push(cube.color5[0][i].className);
    temp.push(cube.color6[0][i].className);
    cube.color5[0][i].className = temp.shift();
  }
  for (let i = 0; i < 3; i++) {
    temp.push(cube.color4[0][i].className);
    cube.color4[0][i].className = tempName.shift();
  }

  for (let i = 0; i < 3; i++) {
    temp.push(cube.color3[0][i].className);
    cube.color3[0][i].className = temp.shift();
  }

  for (let i = 0; i < 3; i++) {
    cube.color6[0][i].className = temp.shift();
  }
}

function upInvert(move) {
  if (move !== `U'`) return;
  const tempName = [];
  const temp = [];

  for (let i = 0; i < 3; i++) {
    tempName.push(cube.color3[0][i].className);
    temp.push(cube.color6[0][i].className);
    cube.color3[0][i].className = temp.shift();
  }
  for (let i = 0; i < 3; i++) {
    temp.push(cube.color4[0][i].className);
    cube.color4[0][i].className = tempName.shift();
  }

  for (let i = 0; i < 3; i++) {
    temp.push(cube.color5[0][i].className);
    cube.color5[0][i].className = temp.shift();
  }

  for (let i = 0; i < 3; i++) {
    cube.color6[0][i].className = temp.shift();
  }
}

function bottomClockwise(move) {
  if (move !== `B`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color1[0][i].className);
    cube.color4[i][length - 1].className = cube.color2[length - 1][i].className;
    cube.color1[0][i].className = cube.color4[i][0].className;
    cube.color2[length - 1][i].className = cube.color6[i][0].className;
  }
  cube.color6.map((arr) => {
    arr[0].className = tempName.shift();
  });
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

function quit(move) {
  if (move !== `Q`) return;
  const inputOrder = document.querySelector('.input-order');
  inputOrder.textContent = 'Bye~';
  console.log('Bye~');
}

// 큐브 동작
function moveCube() {
  const moveOrder = cube.movement.join('').split('');
  const finalMove = checkApostrophe(moveOrder);
  finalMove.forEach((move) => {
    if (move === 'Q') return quit(move);
    else {
      frontClockwise(move);
      frontInvert(move);
      rightClockwise(move);
      rightInveted(move);
      upClockwise(move);
      upInvert(move);
      bottomClockwise(move);
      console.log('test');
    }
  });
  cube.movement = [];
}

/*

  버튼 함수

*/

//실행 버튼
function startBtnHandler(e) {
  const inputText = document.querySelector('.input-text');
  const inputOrder = document.querySelector('.input-order');
  inputOrder.textContent = inputText.value;
  cube.movement.push(inputText.value);
  inputText.value = '';
  moveCube();
}

// 메인 함수
function main() {
  displayCube();
  for (let i = 1; i < 7; i++) {
    // 총 6개의 cube.color를 생성
    cube[`color${i}`] = putValues(i);
  }
  startBtn.addEventListener('click', startBtnHandler);
  console.log(cube);
}

main();
