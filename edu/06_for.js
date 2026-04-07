// for 문
// 기본문법
// for(초기값; 조건식; 1회 루프당 증감 값) {
//     // 반복하고 싶은 처리
// }

// for(let i = 0; i < 3; i++) {
//   console.log(`${i}번째 루프문`);
  
//   if(i === 1) {
  //     //break: 처리중 break를 만나면 그 즉시 루프 종료
  //     break;
  //   }
// }

// for(let i = 0; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if(i % 2 === 0){

//     continue;
//   }
//   console.log(`${i}번째 루프문`)

// }

// for(let i = 0; i < 3; i++){
//   console.log(`부모: ${i}번째`)
//   for(let z = 0; z < 3; z++){
//     console.log(`자식: ${z}번째`)
//   }
// }
// let z = 2;
// let multi = 9;
// for(let i = 1; i <= multi; i++){
//   console.log(`${z} x ${i} = ${i*z}`)
// }
// 구구단 2~9단을출력
//  예시)
// **2단**
// 2 x 2 =4
// ...
// ** 3단 **
// 3 x 1 = 3
// 3 x 2 =6
// ...
// 9 x 8 = 72
// 9 x 9 = 81
let startDan
for(let i = 2; i <= 9; i++) {
  for(let z = 1; z <= 9; z++){
    console.log(`${i} x ${z} = ${i*z}`)
  }
  console.log(`** ${i}단 **`)
}

