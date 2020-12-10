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

function main() {
  const cube = {};
  displayCube();
  for (let i = 1; i < 7; i++) {
    // 총 6개의 cube.color를 생성
    cube[`color${i}`] = putValues(i);
  }
  console.log(cube);
}

main();
