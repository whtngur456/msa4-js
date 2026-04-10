// Destructuring (구조분해) 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1,2,3,4,5];
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];
// let arrVal3 = arr[2];
// let arrVal4 = arr[3];
// let arrVal5 = arr[4];

const [val1 , , , , val5] = arr; //이러면 1이랑 5만 나옴
// const [val1, val2] = arr; 이러면 1,2 만 나옴 뒤에서 생략가능
console.log(val1, val5);



//  ---------------------------------------------------------
const user = {
  name: '홍길동',
  age: 20,
  gender: 'M',
  addr: '서울시'
}

const {name,age,gender,addr = '없음'} = user;
console.log(user);

