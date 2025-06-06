// <-- Tradução - inglês e português
const defaultLang = "pt";
const supportedLangs = ["pt", "en"];
let currentLang = defaultLang;

// <-- Aplicando arquivos JSON - ptvelvet e engvelvet
function setLanguage(lang) {
  if (!supportedLangs.includes(lang)) return;
  currentLang = lang;

  document.getElementById("btn_pt").classList.toggle("active", lang === "pt");
  document.getElementById("btn_en").classList.toggle("active", lang === "en");

  const file = lang === "pt" ? "ptvelvet" : "engvelvet";

  fetch(`root/traduções/velvet/${file}.json`)
    .then((res) => {
      if (!res.ok) throw new Error('Arquivo não encontrado');
      return res.json();
    })
    .then((data) => applyTranslations(data))
    .catch((err) => console.error("Erro ao carregar traduções:", err));
}

function applyTranslations(data) {
  if (!data) return;

  safeSet("title_velvet", data.title_velvet);
  safeSet("subtitle_velvet", data.subtitle_velvet);
  safeSet("info_velvet", data.info_velvet);

  const ids = [
    "benatural", "oneof", "peekaboo", "badboy",
    "reallybad", "psycho", "chillkill"
  ];

  ids.forEach((id) => {
    safeSet(`date_${id}`, data[`date_${id}`]);
    safeSet(`text_${id}`, data[`text_${id}`], true);
  });
}

function safeSet(id, value, isHTML = false) {
  const el = document.getElementById(id);
  if (el) {
    isHTML ? (el.innerHTML = value) : (el.textContent = value);
  }
}

// <-- Tema claro/escuro
function setTheme(theme) {
  const body = document.body;

  if (theme === "light") {
    body.classList.add("light-mode");
    document.getElementById("light-mode").classList.add("active");
    document.getElementById("dark-mode").classList.remove("active");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    document.getElementById("dark-mode").classList.add("active");
    document.getElementById("light-mode").classList.remove("active");
    localStorage.setItem("theme", "dark");
  }
}

// <-- localStorage - salva a escolha
function initThemeToggle() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  document.getElementById("light-mode").addEventListener("click", () => setTheme("light"));
  document.getElementById("dark-mode").addEventListener("click", () => setTheme("dark"));
}

function init() {
  const btnPt = document.getElementById("btn_pt");
  const btnEn = document.getElementById("btn_en");

  // <-- Idioma trocado ao botão ser clicado
  if (btnPt && btnEn) {
    btnPt.addEventListener("click", () => setLanguage("pt"));
    btnEn.addEventListener("click", () => setLanguage("en"));
  } else {
    console.warn("Botões de linguagem não encontrados no DOM.");
  }

  setLanguage(defaultLang);
  initThemeToggle();
}

document.addEventListener("DOMContentLoaded", init);
