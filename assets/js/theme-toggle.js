(function () {
  var toggle = document.getElementById('theme-toggle');
  var root = document.documentElement;

  if (!toggle) {
    return;
  }

  function updateToggle() {
    var darkMode = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-pressed', darkMode ? 'true' : 'false');
    toggle.setAttribute('aria-label', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.querySelector('span').textContent = darkMode ? 'Light mode' : 'Dark mode';
    toggle.querySelector('i').className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
  }

  updateToggle();

  toggle.addEventListener('click', function () {
    var darkMode = root.getAttribute('data-theme') === 'dark';

    if (darkMode) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    updateToggle();
  });
})();
