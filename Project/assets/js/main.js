// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");

  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", () => {
      panel.classList.toggle("open");
      const isOpen = panel.classList.contains("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    panel.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link) panel.classList.remove("open");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") panel.classList.remove("open");
    });
  }
});