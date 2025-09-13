const toggleButton = document.querySelector(".theme-toggle");
const body = document.body;

// Tenta recuperar tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("light-mode", savedTheme === "light");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Salva a preferência do usuário
  const currentTheme = body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
});
