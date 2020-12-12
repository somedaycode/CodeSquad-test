# CodeSquad-test (step-3)

## 3단계: 루빅스큐브 구현하기

--------
모든 함수는 main 함수에서 실행.
--------

큐브 구현을 위해 전역객체 선언.

```
전역 객체
const cube = {
  time: 0,
  movement: [],
};
```

#### 동작 원리

##### 초기 화면 구성
1. displayCube 함수를 통해 총 6개의 큐브를 생성하고 1개의 큐브는 9개의 정사각형을 가지도록 화면을 구성하였다. 각각의 정사각형은 각 큐브에 맞는 클래스 이름이 지정된다. 

예) c1큐브 내 정사각형 클래스이름은 'color1' 이다.
예) c4큐브 내 정사각형 클래스이름은 'color4' 이다.

- css 이용해 각 큐브의 색깔을 지정해 주었다.
- html 각 큐브마다 9개의 div를 가지고 classname을 동일하게 가진다

2. makeCube 함수는 *3의 배열을 return 한다.

3. putValues 함수는 makeCube의 3*3 배열을 리턴 받은 후 각 클래스이름을 집어넣는다.

3. 6번의 for loop을 통해 총 6개의 cube.color를 생성함
 - 예시) key: color1, value: 3*3 배열
 
##### 버튼 동작

###### startBtnHandler
1. 명령어를 입력한 이후 실행 버튼을 누른다.
2. 입력된 명령어를 화면에 출력.
3. 입력된 명령어를 cube.movement에 (push)하여 저장.
4. moveCube 함수를 실행한다.

###### moveCube
1. cube.movement에 저장된 값을 각각의 문자로 나눈다.
2. 나눈 값들을 checkApostrophe함수에 넣고 실행한다.

###### checkApostrophe
1. 전달된 값의 작은따옴표 유무를 검사하기 위해 문자열의 길이만큼 반복문을 실행
2. 작은따옴표가 발견되면 바로 앞의 문자와 병합 후 남아있는 작은따옴표는 삭제한다.
3. 수정된 문자열을 리턴한다.

###### moveCube
작은따옴표 함수 실행이 완료된 이후
1. 각각의 문자를 큐브 동작 함수들에 집어넣고 실행한다.
2. 'Q'가 입력된다면 quit함수를 실행 - bye를 출력한다.
3. 맞는 명령어가 입력된다면 그에 따른 동작이 실행된다.

------
frontClockwise 함수 동작 예시
 - 다른 동작 함수들의 원리는 같으므로 하나의 함수만 설명하였음.
```

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
```
1. F를 입력받지 않았다면 함수를 즉시 return
2. 임시로 값을 저장한 빈 배열 tempName을 선언
3. 한번의 명령값으로 총 4개의 큐브가 움직이므로 반복문을 활용함
4. color1의 큐브의 값을 tempName에 저장
5. 이후 각 큐브의 배열 위치와 맞게 값들을 수정한다.
6. 마지막 큐브는 저장된 color1의 값을 입력받고 함수를 종료한다.
--------

###### shuffleCube
큐브 섞기를 눌렀을 때 동작
1. 랜덤한 5이상 19이하의 숫자를 생성
2. move 변수에 랜덤하게 입력된 명령어들을 배열로 저장 후 각각의 문자로 split
```
const move = ['URBFURLRLDFDBURDFRUBLDR'].join('').split('');
```
3. 랜덤하게 생성된 숫자의 길이만큼 move 배열내 문자들을 큐브동작 함수에 넣는다.
```
for (let i = 0; i < number; i++) {
    excuteCube(move[i]);
  }
```

4. time 함수를 실행

###### time
1. 큐브섞기 버튼을 눌렀을 때의 시간을 저장 한다.
이후 setinterval을 실행하며,
2. 현재 시간을 저장 계속해서 저장하고,
3. 현재시간과 큐브 섞기 버튼을 눌렀을 때의 시간을 계속 뺀다.
4. 값을 시간창에 출력

###### reset
1. 각 큐브들의 childeNodes를 반복해서 삭제하여 화면을 비운다.
2. main 함수를 재실행하여 모든 화면을 초기화 시킨다.

---------

#### 해결하지 못한 추가 기능

1. clearinterval을 통해 time 함수를 정지시키려 했지만 멈추지 않는다...
2. 큐브를 섞을 때마다 time함수가 실행되어 setinterval이 중첩되어 실행된다.
3. 큐브를 다 맞추었을 때 종료가 되지 않음.
