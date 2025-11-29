// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

// Check saved preference
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  darkModeToggle.classList.replace("text-warning", "text-warning");
} else {
  darkModeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
}

darkModeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    localStorage.setItem("theme", "light");
    darkModeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
  }
});
