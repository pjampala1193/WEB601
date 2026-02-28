/* Splashes Project - main.js */
(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!isOpen));
    menu.style.display = isOpen ? 'none' : 'block';
  });

  // Close mobile menu when a link is clicked (safe, doesn’t change desktop layout)
  menu.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (!a) return;
    menu.setAttribute('data-open', 'false');
    menu.style.display = 'none';
  });
})();