const toggleButton = document.querySelector(".theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("light-mode", savedTheme === "light");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const currentTheme = body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
});
