# CodeSquad-test (step-2)

## 2단계: 평면큐브 구현하기

------
### 큐브 객체 선언
2차원 배열과 추후 input값을 입력받기 위한 movement 배열을 선언하였음

초기값을 설정함
```
전역변수
  const cube = {
  arr: [
    ['R', 'R', 'W'],
    ['G', 'C', 'W'],
    ['G', 'B', 'B'],
  ],
  movement: [],
};
```
--------
### 동작 원리
모든 함수는 main 함수를 통해 실행된다.

1. displayCube 함수를 통해 cube.arr 초기값을 3*3 큐브로 화면에 출력

2. 지정된 명령어를 스페이스 없이 입력한다.

3. 확인 버튼을 누르면 btnHandler 함수에 의해서 입력된 명령어를 cube.movement에 저장 후 화면에 표시해준다. 그리고 moveCube 함수를 마지막으로 실행.

##### 함수: moveCube
4. cube.movement에 저장된 명령어를 각각의 문자로 split한 후 작은따옴표 유무 검사를 위해 checkApostrophe 함수를 실행.

5. cube.movement에 저장된 문자열의 길이만큼 for loop을 실행하며 작은따옴표가 있다면 그 전 순서의 문자와 병함함 - concat, 이 후 남아있는 작은따옴표는 splice를 이용해 삭제.

6. 작은따옴표 유무 검사가 끝난 이후 각 문자에 따라 큐브 방향 명령 함수를 실행시킨다.
  - 'Q'가 있을 경우 quit 함수를 출력
  - 그 외에는 각 방향에 맞게 큐브를 이동시킴
  - 방향에 이동된 이후에는 기존의 큐브들을 삭제하고 새로저장된 cube.arr에 맞추어 displayCube함수를 실행시킨다.
  
7. 큐브 방향 명령 함수들이 종료된 이후에는 cube.movement에 저장된 명령어들을 초기화 시킨다.






