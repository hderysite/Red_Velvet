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


const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");
const body = document.body;
const homeSection = document.querySelector(".home");

function ativarModoClaro() {
    body.classList.add("light-mode");
    homeSection.classList.add("light-mode");
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
    atualizarImagens(true);
    localStorage.setItem("modo", "claro");
}

function ativarModoEscuro() {
    body.classList.remove("light-mode");
    homeSection.classList.remove("light-mode");
    lightBtn.classList.remove("active");
    darkBtn.classList.add("active");
    atualizarImagens(false);
    localStorage.setItem("modo", "escuro");
}

function atualizarImagens(modoClaroAtivo) {
    const imagensIntegrantes = {
        "integrante-yeri": {
            dark: "root/mídia/imagens/página_inicial/cosmic_yeri.jpeg",
            light: "root/mídia/imagens/página_inicial/feelr_yeri.jpg"
        },
        "integrante-joy": {
            dark: "root/mídia/imagens/página_inicial/cosmic_joy.jpeg",
            light: "root/mídia/imagens/página_inicial/feelr_joy.jpeg"
        },
        "integrante-wendy": {
            dark: "root/mídia/imagens/página_inicial/cosmic_wendy.jpeg",
            light: "root/mídia/imagens/página_inicial/feelr_wendy.jpeg"
        },
        "integrante-seulgi": {
            dark: "root/mídia/imagens/página_inicial/cosmic_seulgi.jpeg",
            light: "root/mídia/imagens/página_inicial/feelr_seulgi.jpg"
        },
        "integrante-irene": {
            dark: "root/mídia/imagens/página_inicial/cosmic_irene.jpeg",
            light: "root/mídia/imagens/página_inicial/feelr_irene.jpg"
        },
        "cover_feel_my_rhythm": {
            dark: "root/mídia/imagens/página_inicial/cover-feel_my_rhythm.png",
            light: "root/mídia/imagens/página_inicial/cover_feel.png"
        },
        "cover_peek_a_boo": {
            dark: "root/mídia/imagens/página_inicial/cover-peek_a_boo.png",
            light: "root/mídia/imagens/página_inicial/cover_red.png"
        },
        "gif_group": {
            dark: "root/mídia/imagens/página_inicial/cosmic_gif.webp",
            light: "root/mídia/imagens/página_inicial/feel_gif.gif"
        }
    };

    for (let integrante in imagensIntegrantes) {
        const el = document.getElementById(integrante);
        if (el) {
            el.src = modoClaroAtivo
                ? imagensIntegrantes[integrante].light
                : imagensIntegrantes[integrante].dark;
        }
    }
}

lightBtn.addEventListener("click", ativarModoClaro);
darkBtn.addEventListener("click", ativarModoEscuro);

document.addEventListener("DOMContentLoaded", () => {
    const modoSalvo = localStorage.getItem("modo");
    if (modoSalvo === "claro") {
        ativarModoClaro();
    } else {
        ativarModoEscuro();
    }
});



document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const extraText = document.querySelector(".extra-text");

  if (readMoreBtn && extraText) {
    readMoreBtn.addEventListener("click", function () {
      extraText.classList.toggle("active");

      if (extraText.classList.contains("active")) {
        readMoreBtn.textContent = "LEIA MENOS";
      } else {
        readMoreBtn.textContent = "LEIA MAIS";
      }
    });
  }
});