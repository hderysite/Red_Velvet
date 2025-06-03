let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const extraText = document.getElementById('extraInfo');

  if (readMoreBtn && extraText) {
    extraText.classList.remove('active');

    readMoreBtn.addEventListener('click', function (event) {
      event.preventDefault();

      extraText.classList.toggle('active');

      if (extraText.classList.contains('active')) {
        readMoreBtn.textContent = 'LEIA MENOS';
      } else {
        readMoreBtn.textContent = 'LEIA MAIS';
      }
    });
  }
});


const toggleBtn = document.getElementById('toggleThemeBtn');
const body = document.body;

const imagesToSwap = [
  {
    id: 'cosmicGif',
    darkSrc: 'root/mídia/imagens/página_inicial/cosmic_gif.webp',
    lightSrc: 'root/mídia/imagens/página_inicial/cosmic_gif_light.webp',
  },
];

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Modo Escuro';

    imagesToSwap.forEach(({ id, lightSrc }) => {
      const img = document.getElementById(id);
      if (img) img.src = lightSrc;
    });
  } else {
    toggleBtn.textContent = 'Modo Claro';

    imagesToSwap.forEach(({ id, darkSrc }) => {
      const img = document.getElementById(id);
      if (img) img.src = darkSrc;
    });
  }
});
