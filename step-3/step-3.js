const cube = {};

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

function makeCube() {
  return Array(3)
    .fill('')
    .map(() => Array());
}

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
  displayCube();
  for (let i = 1; i < 7; i++) {
    cube[`color${i}`] = putValues(i);
  }
}

main();
