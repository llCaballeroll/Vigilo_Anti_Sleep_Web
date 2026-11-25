// Vigilo: enlace de la Mac App Store y aparición suave.
// Cuando la app esté publicada, pega aquí el enlace de la tienda.
(function () {
  var MAC = '';   // https://apps.apple.com/app/id0000000000
  document.querySelectorAll('[data-store="mac"]').forEach(function (a) {
    if (MAC) { a.href = MAC; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.setAttribute('aria-disabled', 'true'); a.removeAttribute('href'); }
  });
  var soon = document.querySelector('[data-soon]');
  if (soon && MAC) soon.hidden = true;

  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('visible'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
