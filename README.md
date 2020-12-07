# CodeSquad-test (step-2)

## 2단계: 평면큐브 구현하기

------
### 큐브 객체 선언
2차원 배열과 추후 input값을 입력받기 위한 movement 배열을 선언하였음
  const cube = {
  arr: [
    ['R', 'R', 'W'],
    ['G', 'C', 'W'],
    ['G', 'B', 'B'],
  ],
  movement: [],
};



### 함수
displayCube : 큐브 2차원 배열을 화면에 3*3표로 출력
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

removeBtns : 만들어진 3*3표를 제거
  function removeBtns() {
  const number = Math.pow(cube.arr.length, 2);
  for (let i = 0; i < number; i++) {
    container.removeChild(container.childNodes[0]);
  }
}


upLeft : input에 입력받은 문자를 확인 후, 2차원 배열 가장 윗줄을 왼쪽으로 한칸 밀어냄.
  function upLeft() {
  const temp = cube.arr[0].shift();
  cube.arr[0].push(temp);
  removeBtns();
  displayCube();
}






