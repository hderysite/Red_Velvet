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
  const savedTheme = localStorage.getItem("theme") || "dark"; // padrão escuro
  setTheme(savedTheme);

  document.getElementById("light-mode").addEventListener("click", () => setTheme("light"));
  document.getElementById("dark-mode").addEventListener("click", () => setTheme("dark"));
}

document.addEventListener("DOMContentLoaded", initThemeToggle);

// <-- Tradução - inglês e português
const defaultLang = "pt";
const supportedLangs = ["pt", "en"];
let currentLang = defaultLang;

// <-- Aplicando arquivos JSON - ptred e engred
function setLanguage(lang) {
  if (!supportedLangs.includes(lang)) return;
  currentLang = lang;

  document.getElementById("btn_pt").classList.toggle("active", lang === "pt");
  document.getElementById("btn_en").classList.toggle("active", lang === "en");

  const file = lang === "pt" ? "ptred" : "engred";

  fetch(`root/traduções/red/${file}.json`)
    .then((res) => res.json())
    .then((data) => applyTranslations(data))
    .catch((err) => console.error("Erro ao carregar traduções:", err));
}

function applyTranslations(data) {
  if (!data) return;

  safeSet("title_red", data.title_red);
  safeSet("subtitle_red", data.subtitle_red);
  safeSet("info_red", data.info_red);

  const ids = [
    "happiness", "ice", "dumb", "russian", "redflavor",
    "power", "queendom", "feel", "birthday", "cosmic"
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

function init() {
  document.getElementById("btn_pt").addEventListener("click", () => setLanguage("pt"));
  document.getElementById("btn_en").addEventListener("click", () => setLanguage("en"));

  setLanguage(defaultLang);
  initThemeToggle(); 
}

document.addEventListener("DOMContentLoaded", init);



