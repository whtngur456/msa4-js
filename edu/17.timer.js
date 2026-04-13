//  타이머 함수
//  비동기 적으로 코드를 실행

//  setTimeout(cb, ms[, ...args]): number
//  설정한 일정 시간 후에 콜백함수를 실행(일정시간 단위는 ms)
//  콜백 함수에 파라미터가 필요한 경우 ...args를 추가(보통은 잘없다)
//  리턴값은 timeOutID 0이 아닌 정수값 (해당 타이머의 고유한 식별값)
// const timeOutID1 = setTimeout(() => {
//   console.log('1초');
// }, 1000);

// console.log(timeOutID1);

//  clearTimeout(timeoutId);
// clearTimeout(timeOutID1);

const timeOutID1 = setTimeout(() => {
  console.log('1초');
}, 1000);

const timeOutID2 = setTimeout(() => {
  console.log('2초');
}, 2000);

const timeOutID3 = setTimeout(() => {
  console.log('3초');
}, 3000);

//  setInterval (cb, ms[, ...args]) number
//  설정한 일정 시간마다 콜백함수를 싫
//  반환값은 intervalID로 0이아닌 정수값 (해당 인터벌의 고유한 식별값)
const intervalID1 = setInterval (() => {
  console.log('인터벌');
}, 1000);

setTimeout(() => {
  clearInterval(intervalID1);
}, 5000);