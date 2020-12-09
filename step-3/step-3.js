const color1 = document.querySelectorAll('.color1');
const color2 = document.querySelectorAll('.color2');
const color3 = document.querySelectorAll('.color3');
const color4 = document.querySelectorAll('.color4');
const color5 = document.querySelectorAll('.color5');
const color6 = document.querySelectorAll('.color6');

function makeCube() {
  return Array(3)
    .fill(null)
    .map(() => Array());
}

const cube = {
  color1: makeCube(),
  color2: makeCube(),
  color3: makeCube(),
  color4: makeCube(),
  color5: makeCube(),
  color6: makeCube(),
};

function displayCube() {
  let count = 0;
  for (let i = 0; i < 6; i++) {
    count++;
    const cubeContainer = document.querySelector(`#c${i + 1}`);
    for (let j = 0; j < 9; j++) {
      const box = document.createElement('div');
      box.className = `color${count}`;
      console.log(box);
      cubeContainer.appendChild(box);
    }
  }
}

function main() {
  displayCube();
}

main();
