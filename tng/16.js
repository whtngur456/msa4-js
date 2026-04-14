const box = document.querySelector('#box');
let found = false;

box.addEventListener('mouseenter', () => {
  if (!found) {
    alert('두근두근');
  }
});

box.addEventListener('click', () => {
  if (!found) {
    alert('들켰다');
    box.style.backgroundImage = "url('./짱구.jpg')";
    box.style.opacity = '1';
    found = true;
  } else {
    alert('숨는다');
    box.style.backgroundImage = "url('./짱구1.jpg')"
    box.style.opacity = '1';
    setTimeout(() => {
      box.style.opacity = '0';
      found = false; 
      const randomX = Math.random() * (window.innerWidth - box.offsetWidth);
      const randomY = Math.random() * (window.innerHeight - box.offsetHeight);
      box.style.left = randomX + 'px';
      box.style.top = randomY + 'px';
  }, 2000);
}
});
