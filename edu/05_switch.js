let food = '김밥'

// switch(검증 대상)
switch(food) {
  // case 일치검증값
  case '김밥':
    // 실행할 처리
    console.log('분식');
    break;
  case '돈가스':
    console.log('양식');
    break;
  default:
    console.log('이상한 음식');
    break;
}

let num = 1;

switch (num) {
  case 1:
    console.log('일')
    break;
  case 2:
    console.log('이')
    break;
  case 3:
    console.log('삼')
    break;
  default:
    console.log('끝')
    break;
}