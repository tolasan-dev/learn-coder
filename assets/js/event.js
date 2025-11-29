const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const toggleBtn = document.getElementById("toggleBtn");
const d_done = document.getElementById("d-done");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");

  // Check if sidebar is NOT collapsed → means it's expanded → show logo
  if (!sidebar.classList.contains("collapsed")) {
    d_done.textContent = "learnCoder";
  } else {
    d_done.textContent = ""; // Hide brand name when collapsed
  }

  // Mobile handling
  if (window.innerWidth <= 992) {
    sidebar.classList.toggle("active");
  }
});

// Close sidebar on mobile when clicking outside
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 992 && sidebar.classList.contains("active")) {
    if (!sidebar.contains(e.target) === false && e.target !== toggleBtn) {
      sidebar.classList.remove("active");
    }
  }
});
