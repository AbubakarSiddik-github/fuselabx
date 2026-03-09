/* =====================================================
   VOLTBLOOM — js/script.js
   ===================================================== */
(function () {
  'use strict';

  /* ── Navbar scroll ──────────────────────────────── */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('sc', window.scrollY > 40);
    setActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Active nav link ────────────────────────────── */
 

  /* ── Mobile hamburger ───────────────────────────── */
  var ham     = document.getElementById('ham');
  var drawer  = document.getElementById('drawer');

  ham.addEventListener('click', function () {
    var open = drawer.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });/* ── Active nav link ────────────────────────────── */
function setActiveLink() {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav-links a, #drawer a');
  var cur = '';
  sections.forEach(function (s) {
    if (window.scrollY + 130 >= s.offsetTop) cur = s.id;
  });
  links.forEach(function (a) {
    a.classList.remove('act');
    if (a.getAttribute('href') === '#' + cur) a.classList.add('act');
  });
}

/* ── Smooth scroll ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]:not([data-vb])').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id  = a.getAttribute('href').slice(1);
    var tgt = document.getElementById(id);
    if (!tgt) return;
    e.preventDefault();
    var top = tgt.getBoundingClientRect().top + window.scrollY - 66;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

  document.querySelectorAll('#drawer a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });

  document.addEventListener('click', function (e) {
    if (drawer.classList.contains('open') &&
        !drawer.contains(e.target) && !ham.contains(e.target)) {
      closeDrawer();
    }
  });

  function closeDrawer() {
    drawer.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ── Smooth scroll ──────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id  = a.getAttribute('href').slice(1);
      var tgt = document.getElementById(id);
      if (!tgt) return;
      e.preventDefault();
      var top = tgt.getBoundingClientRect().top + window.scrollY - 66;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Fade-up on scroll ──────────────────────────── */
  var fuEls = document.querySelectorAll('.fu');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        setTimeout(function () { e.target.classList.add('vis'); }, i * 70);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    fuEls.forEach(function (el) { obs.observe(el); });
  } else {
    fuEls.forEach(function (el) { el.classList.add('vis'); });
  }

  /* ── Stat counter ───────────────────────────────── */
  var statEls = document.querySelectorAll('.sn[data-end]');
  if ('IntersectionObserver' in window) {
    var sobs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el   = e.target;
        var end  = parseInt(el.getAttribute('data-end'), 10);
        var plus = el.getAttribute('data-plus') || '';
        var dur  = 1400, step = 16, cur = 0;
        var t    = setInterval(function () {
          cur += Math.ceil(end / (dur / step));
          if (cur >= end) { cur = end; clearInterval(t); }
          el.textContent = cur + plus;
        }, step);
        sobs.unobserve(el);
      });
    }, { threshold: 0.5 });
    statEls.forEach(function (el) { sobs.observe(el); });
  }

  /* ── Gallery lightbox ───────────────────────────── */
  var lb    = document.getElementById('lb');
  var lbImg = document.getElementById('lb-img');
  var lbX   = document.getElementById('lb-x');

  document.querySelectorAll('.gi').forEach(function (item) {
    item.addEventListener('click',   openLB.bind(item));
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB.call(item); }
    });
  });

  function openLB() {
    var img   = this.querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbX.focus();
  }
  function closeLB() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  lbX.addEventListener('click', closeLB);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });

  /* ── Contact form ───────────────────────────────── */
  var form  = document.getElementById('cf');
  var fok   = document.getElementById('f-ok');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name  = document.getElementById('f-name').value.trim();
    var email = document.getElementById('f-email').value.trim();
    var msg   = document.getElementById('f-msg').value.trim();
    var ok    = true;
    [document.getElementById('f-name'), document.getElementById('f-email'), document.getElementById('f-msg')].forEach(function (f) {
      f.style.borderColor = '';
    });
    if (!name)  { document.getElementById('f-name').style.borderColor  = '#ff6b6b'; ok = false; }
    if (!msg)   { document.getElementById('f-msg').style.borderColor   = '#ff6b6b'; ok = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('f-email').style.borderColor = '#ff6b6b'; ok = false;
    }
    if (!ok) return;
    form.reset();
    fok.style.display = 'block';
    setTimeout(function () { fok.style.display = 'none'; }, 6000);
  });

  document.querySelectorAll('.ff').forEach(function (f) {
    f.addEventListener('input', function () { f.style.borderColor = ''; });
  });

})();
