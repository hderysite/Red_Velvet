const defaultLang = "pt";
const supportedLangs = ["pt", "en"];
let currentLang = defaultLang;

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
}

document.addEventListener("DOMContentLoaded", init);



