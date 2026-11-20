// Mobile menu. Without JavaScript the menu simply stays open.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  // Home page: the menu bar is see-through only while the page is at its top
  var header = document.querySelector('.site-header');
  var isHome = document.body.classList.contains('home');
  function updateTop() {
    if (!header || !isHome) return;
    var menuOpen = toggle.getAttribute('aria-expanded') === 'true';
    header.classList.toggle('is-top', window.scrollY <= 0 && !menuOpen);
  }
  // On phones, an open menu folds away once the visitor scrolls a little
  var openedAt = 0;
  function collapseOnScroll() {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (Math.abs(window.scrollY - openedAt) > 30) setOpen(false);
  }
  window.addEventListener('scroll', function () {
    updateTop();
    collapseOnScroll();
  }, { passive: true });

  function setOpen(open) {
    if (open) openedAt = window.scrollY;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
    updateTop();
  }
  updateTop();

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
