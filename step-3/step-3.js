const startBtn = document.querySelector('.btn-start');
const shuffleBtn = document.querySelector('.btn-shuffle');
const resetBtn = document.querySelector('.btn-reset');
const clock = document.querySelector('.clock');

/*

초기 화면 구성 함수

*/

const cube = {
  movement: [],
};

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
// 모든 동작함수를 하나로 묶어 놓은 함수
function excuteCube(move) {
  frontClockwise(move);
  frontInvert(move);
  rightClockwise(move);
  rightInveted(move);
  upClockwise(move);
  upInvert(move);
  bottomClockwise(move);
  bottomInvert(move);
  leftClockwise(move);
  leftInvert(move);
  downClockwise(move);
  downInvert(move);
}

// 큐브 앞면 시계방향 동작
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

// 큐브 앞면 반시계 방향 동작
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

// 큐브 오른쪽면 시계방향 동작
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

// 큐브 오른쪽면 반시계 방향 동작
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

// 큐브 윗면 시계방향 동작
function upClockwise(move) {
  if (move !== `U`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color6[0][i].className);
    cube.color6[0][i].className = cube.color3[0][i].className;
    cube.color3[0][i].className = cube.color4[0][i].className;
    cube.color4[0][i].className = cube.color5[0][i].className;
  }
  cube.color5[0].map((arr) => {
    arr.className = tempName.shift();
  });
}

// 큐브 윗면 반시계 방향 동작
function upInvert(move) {
  if (move !== `U'`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color5[0][i].className);
    cube.color5[0][i].className = cube.color6[0][i].className;
    cube.color6[0][i].className = cube.color3[0][i].className;
    cube.color3[0][i].className = cube.color4[0][i].className;
  }
  cube.color4[0].map((arr) => {
    arr.className = tempName.shift();
  });
}

//큐브 뒷면 시계방향 동작
function bottomClockwise(move) {
  if (move !== `B`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color1[0][i].className);
    cube.color1[0][i].className = cube.color4[i][length - 1].className;
    cube.color4[i][length - 1].className = cube.color2[length - 1][i].className;
    cube.color2[length - 1][i].className = cube.color6[i][0].className;
  }
  cube.color6.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

// 큐브 뒷면 반시계방향
function bottomInvert(move) {
  if (move !== `B'`) return;
  const tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color6[i][0].className);
    cube.color6[i][0].className = cube.color2[length - 1][i].className;
    cube.color2[length - 1][i].className = cube.color4[i][length - 1].className;
    cube.color4[i][length - 1].className = cube.color1[0][length - 1].className;
  }
  cube.color1[0].map((arr) => {
    arr.className = tempName.shift();
  });
}

// 큐브 왼쪽면 시계방향 동작
function leftClockwise(move) {
  if (move !== `L`) return;
  let tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color3[i][0].className);
    cube.color3[i][0].className = cube.color1[i][0].className;
    cube.color1[i][0].className = cube.color5[i][length - 1].className;
    cube.color5[i][length - 1].className =
      cube.color2[length - 1 - i][0].className;
  }
  cube.color2.map((arr) => {
    arr[0].className = tempName.shift();
  });
}

// 큐브 왼쪽면 반시계방향 동작
function leftInvert(move) {
  if (move !== `L'`) return;
  let tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color1[i][0].className);
    cube.color1[i][0].className = cube.color3[i][0].className;
    cube.color3[i][0].className = cube.color2[i][0].className;
    cube.color2[i][0].className =
      cube.color5[length - 1 - i][length - 1].className;
  }
  cube.color5.map((arr) => {
    arr[length - 1].className = tempName.pop();
  });
}

// 큐브 바닥면 시계방향 동작
function downClockwise(move) {
  if (move !== `D`) return;
  let tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color6[length - 1][i].className);
    cube.color6[length - 1][i].className = cube.color5[length - 1][i].className;
    cube.color5[length - 1][i].className = cube.color4[length - 1][i].className;
    cube.color4[length - 1][i].className = cube.color3[length - 1][i].className;
  }
  cube.color3[length - 1].map((arr) => {
    arr.className = tempName.shift();
  });
}

// 큐브 바닥면 반시계방향으로 동작
function downInvert(move) {
  if (move !== `D'`) return;
  let tempName = [];
  const length = cube.color1.length;

  for (let i = 0; i < length; i++) {
    tempName.push(cube.color6[length - 1][i].className);
    cube.color6[length - 1][i].className = cube.color3[length - 1][i].className;
    cube.color3[length - 1][i].className = cube.color4[length - 1][i].className;
    cube.color4[length - 1][i].className = cube.color5[length - 1][i].className;
  }
  cube.color5[length - 1].map((arr) => {
    arr.className = tempName.shift();
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

// Q가 입력되었을 때 종료문구를 출력
function quit(move) {
  if (move !== `Q`) return;
  const inputOrder = document.querySelector('.input-order');
  inputOrder.textContent = '이용해주셔서 감사합니다. 뚜뚜뚜.';
  console.log('이용해주셔서 감사합니다.');
}

// 큐브 명령어를 실행
function moveCube() {
  const moveOrder = cube.movement.join('').split('');
  const finalMove = checkApostrophe(moveOrder);
  finalMove.forEach((move) => {
    if (move === 'Q') return quit(move);
    else {
      excuteCube(move);
    }
  });
  cube.movement = [];
}

/*

  버튼 함수

*/

//명령어를 실행하고 큐브를 동작시킨다.
function startBtnHandler(e) {
  const inputText = document.querySelector('.input-text');
  const inputOrder = document.querySelector('.input-order');
  inputOrder.textContent = `${inputText.value} 조작갯수: ${inputText.value.length}`;
  cube.movement.push(inputText.value);
  inputText.value = '';
  moveCube();
}

// 큐브를 섞는다.
function shuffleCube(e) {
  const number = Math.floor(Math.random() * 15 + 5);
  const move = ['URBFURLRLDFDBURDFRUBLDR'].join('').split('');
  for (let i = 0; i < number; i++) {
    excuteCube(move[i]);
  }
  time();
}

// 모든 화면을 초기화 시키는 함수 - 큐브를 원상태로 돌림
function reset() {
  let count = 0;
  for (let i = 0; i < 6; i++) {
    count++;
    const cubeContainer = document.querySelector(`#c${i + 1}`);
    for (let j = 0; j < 9; j++) {
      cubeContainer.removeChild(cubeContainer.childNodes[0]);
    }
  }
  main();
}

// 게임 시간을 출력한다.
function time() {
  const startTime = Date.now();
  setInterval(() => {
    const nowTime = Date.now();
    newTime = nowTime - startTime;
    clock.textContent = newTime / 1000;
  }, 250);
}

// 실행 불가 수정 필요
// function clearTime() {
//   clearInterval(time);
// }

// 메인 함수
function main() {
  displayCube();
  for (let i = 1; i < 7; i++) {
    // 총 6개의 cube.color를 생성
    cube[`color${i}`] = putValues(i);
  }
  startBtn.addEventListener('click', startBtnHandler);
  shuffleBtn.addEventListener('click', shuffleCube);
  resetBtn.addEventListener('click', reset);
}

main();
