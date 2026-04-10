const titleapple = document.getElementById('apple')
const newLi = document.createElement('li')
newLi.textContent='장기'
const ul = document.getElementById('ul')
ul.insertBefore(newLi,apple);

// const list = document.querySelectorAll('#ul > li');
// list.forEach(li => {
//   if ( li.textContent === '어메이징브릭') {
//     li.style.backgroundColor = '#da6d14';
//   };
// });
const list = document.querySelector('#ul > :last-child');
list.style.backgroundColor = '#da6d14';


const list1 = document.querySelectorAll('#ul > li');
list1.forEach((li, index) => {
  if(index % 2 === 0) {
    li.style.color = 'blue';
  }
  else {  
    li.style.color = 'red';
  }
})  