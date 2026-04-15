const container = document.querySelector('.container');
const nextBtn = document.querySelector('#next');
const resetBtn = document.querySelector('#reset');

let page = 1;       
const limit = 3;   

async function fetchImages() {
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);

    response.data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      const img = document.createElement('div');
      img.classList.add('card-image');
      img.style.backgroundImage = `url('${item.download_url}')`;
      const author = document.createElement('span');
      author.textContent = `${item.id}: ${item.author}`;
      card.appendChild(img);
      card.appendChild(author);
      container.appendChild(card);
    });

  } catch (error) {
    console.log(error);
  }
}
``
nextBtn.addEventListener('click', () => {
  fetchImages(); 
  page++;        
});

resetBtn.addEventListener('click', () => {
  container.innerHTML = ''; 
  page = 1;                
});