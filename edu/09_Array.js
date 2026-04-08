// 배열 (Array) 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할수 있는 데이터 구조
// 데이터 타입은 Object
// 배여르이 크기가 동적으로 변화 가능
// 인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1[4]);

// length: 배열의 길이를 반환
arr1.length;
console.log(arr1.length);
const obj = {
  length: 1, // 속성(Property): 객체 안에 선언한 변수
  fnc: () => { // (Method): 객체 안에 선언한 함수
    console.log('함수임');
  }
}

// Array.isArray(arg): boolean
//  배열인지 아닌지 체크
console.log(Array.isArray(arr1)); //true
console.log(Array.isArray('어레이')); //false

// Array.includes(searchElement): boolean
//  배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
console.log(arr1.includes(5));
console.log(arr1.includes(100));

// Array.indexOf(searchElement): number
//   배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
//   없으면 '-1'을 반환
let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('둘리')); //1 반환
console.log(arr.indexOf('도우너')); //2 반환
console.log(arr.indexOf('또치')); //-1 반환

// Array.push(...arge): number **원본 변경**
//   원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
let arr2 = [...arr];
let resultArr =arr2.push(5);
console.log(resultArr, arr, arr2);

let num =1;
let num2 = num;
num2 = 3;
console.log(num, num2);

// Array.concat(...arg): T[]
//   배열의 마지막 요소를 추가한 새로운 배열은 반환
arr =[1, 2, 3];
resultArr = arr.concat(4, 5, 6);
console.log(arr, resultArr);

// Array.pop(): T | undefined **원본 변경 **
//    원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 3];
resultArr = arr.pop();
console.log(arr, resultArr);

// Array.shift() : T | undefined ** 원본 변경 **
//  원본 배열의 첫번째 요소를 제거하고, 해당 요소를 반환
arr=[1, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);

// Array.splice(start, count, ...arge): T [] **원본 변경 **
//    1.start만 전달했을 경우
//      start가 양수일 경우 해당 인덱스 요소 부터 모두 제거하고, 제거한 요소들은 배열로 반환
//      start가 음수일 경우
//      > 끝 요소부터 start 수 만큼의 해당 인덱스 요소를 모두 제거하고,
//      제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2);
console.log(arr, resultArr);
// 1.start와 count를 전달했을 경우
//  - 해당 인덱스 요소 부터 count 수 만큼의 요소를 제거하고,
// 제거한 요소들을 배열로 반환
arr= [1, 2, 3, 4, 5];
resultArr = arr.splice(-2, 1);
console.log(arr, resultArr);

// resultArr = arr.unshift(100);
// Array.unshift(...args): number **원본 변경 **
//   원본배열의 첫번째 요소를 추가하고, 변경된 length를 반환

// 3.start와 count를 전달했을 경우
//  - 해당 인덱스 요소 부터 count 수 만큼의 요소를 제거하고,
//  해당 위치에 args를 삽입하고 ,제거한 요소들을 배열로 반환

arr= [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, 100, 200, 300);
console.log(arr, resultArr);

// Array.join(separator): String
//    배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//    ㅂ열의 요소가 없으면 빈문자열을 반환
//    separator 를 생략하면 기본 구분자가 ','로 연결

arr= [1, 2, 3, 4, 5];
resultArr = arr.join('a');
console.log(arr, resultArr);

// -------------------------------------------------------------
// 배열 [2,4,5,6,9] 있따.
// 여기서 특정요소가 있는지 확인하고 ture/false를 반환하는 myIncludes 함수를 만들어주세요

// const myArr = [2, 4, 5, 6, 3, 4, 1];

// let target = 1;

// let result = false;
//   for(let idx = 0; idx < myArr.length; idx++) {
//   if(target === myArr[idx]) {
//     result = true;
//     break;
//   } 
// }
// console.log(result);
// 이 시불 샛기가 괴롭혔어여 ㅜ
const myArr = [2, 4, 5, 6, 3, 4, 1];
function myIncludes(arr, search) {
  let result = false;
  for(let idx = 0; idx < arr.length; idx++) {
    if(search === arr[idx]) {
      result = true;
    } 
  }
  return result;
}
console.log(`마이어레이: ${myIncludes(myArr, 100)}`);
console.log(`리터럴어레이: ${myIncludes([5, 4, 3], 5)}`);
