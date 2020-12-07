# CodeSquad-test
step-1
1단계: 단어 밀어내기 구현

prompt를 통해 input변수에 각각의 단어, 숫자, 방향을 입력받았음

만약 'q'가 입력된다면 종료 문구를 콘솔창에 출력


함수 userInput : 사용자로부터 입력받은 정보를 info 객체에 저장함.

-입력받은 단어는 split을 이용해 각각의 문자로 나눔
-입력받은 숫자는 Number를 통해 타입을 숫자로 전환
-입력받은 방향(L 또는 R)은 대문자로 변환하여, 소문자를 입력받아도 변함이 없게 구현

함수 ChangeAbs : 음수를 입력받으면 Math.abs를 통해 절대값으로 변환


함수 Lshift, Rshift : info 객체에 저장된 단어를 입력받은 숫자만큼 밀어냄
- shift, push, pop, unshift를 활용 
- 만약 음수라면 입력된 방향의 반대방향의 함수를 실행되게 구현


함수 checkNumber : 입력받은 숫자가 -100이상 +100미만인지 확인 후 리턴 값 전달






