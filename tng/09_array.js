// // 원본은 보존하면서 오름차순 정렬 해주세요.
// const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];

// // 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
// const ARR2 = [5,7,3,4,5,1,2];

// ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ]; 
//   let arr = [...ARR1]
//   resultArr = arr.sort((a, b) => a - b); 
//   console.log(arr, ARR1);

const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const copy = [...ARR1];
copy.sort((a, b) => a- b);
console.log(ARR1, copy);

const ARR2 = [5,7,3,4,5,1,2];
const even = ARR2.filter(val => val % 2 === 0);
const odd = ARR2.filter(val => val % 2 === 1);
console.log(even, odd);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];
const rsult= ARR3.map(val => val % 3);
console.log(rsult);

// 
const arr4 = [5,7,3,4,5,1,2,0];
const result = test(arr4);
console.log(arr4, result);

function test(arr) {
  return arr.sort((a,b) => a - b);
}