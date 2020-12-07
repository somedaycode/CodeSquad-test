// 정보를 받을 객체
const info = {
  word: [],
  number: '',
  direction: '',
};

// 사용자로부터 입력받은 단어, 숫자 그리고 L 또는 R값을 콘솔창에 출력 후 info 객체에 저장한다.
function usersInput(input) {
  console.log(input);

  const words = input.split(' ')[0];
  info.word = words.split('');
  info.number = checkNumber(input);
  info.direction = input.split(' ')[2].toUpperCase();
}

function checkNumber(input) {
  const number = Number(input.split(' ')[1]);
  if (number >= 100 || number < -100) {
    console.log('-100이상 100미만의 숫자를 입력해주세요.');
    return 1;
  } else {
    return number;
  }
}

// 단어를 왼쪽으로 사용자가 입력한 숫자만큼 밀어낸다.
function Lshift() {
  //0보다 입력값이 작다면 Rshift 함수 실행
  if (info.number < 0) {
    info.number = changeAbs(info.number);
    Rshift();
  } else {
    for (let i = 0; i < info.number; i++) {
      const temp = info.word.shift();
      info.word.push(temp);
    }

    const result = info.word;
    console.log(result.join(''));
  }
}

// 단어를 오른쪽으로 사용자가 입력한 숫자만큼 밀어낸다.
function Rshift() {
  // 0보다 입력값이 작다면 Lshift 함수 실행
  if (info.number < 0) {
    info.number = changeAbs(info.number);
    Lshift();
  } else {
    for (let i = 0; i < info.number; i++) {
      const temp = info.word.pop();
      info.word.unshift(temp);
    }
    const result = info.word;
    console.log(result.join(''));
  }
}

// 입력받은 숫자를 절대값으로 변환한다.
function changeAbs(number) {
  const n = Math.abs(number);
  return n;
}

// 실행함수
function main() {
  const input = prompt(
    '단어와 숫자 그리고 L 또는 R을 차례대로 입력해주세요. ex) apple 3 L'
  );
  if (checkNumber(input) === 1) return main();
  if (input === 'q') return console.log('종료하였습니다.');

  usersInput(input);
  if (info.direction === 'L') {
    Lshift();
  } else if (info.direction === 'R') {
    Rshift();
  } else {
    console.log('L 또는 R이 아닙니다.');
  }

  main();
}

main();
