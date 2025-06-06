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

function initThemeToggle() {
  const savedTheme = localStorage.getItem("theme") || "dark"; // padrão escuro
  setTheme(savedTheme);

  document.getElementById("light-mode").addEventListener("click", () => setTheme("light"));
  document.getElementById("dark-mode").addEventListener("click", () => setTheme("dark"));
}

document.addEventListener("DOMContentLoaded", initThemeToggle);


localStorage.removeItem('theme');

