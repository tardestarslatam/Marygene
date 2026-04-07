/* 47 Formatos Virales — Marygene Landing interactions */
(function () {
  'use strict';

  // Year in footer
  var y = document.getElementById('mg-year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.mg-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Counter animation
  var counters = document.querySelectorAll('[data-counter]');
  var counted = new WeakSet();
  function animateCounter(el) {
    if (counted.has(el)) return;
    counted.add(el);
    var target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    var duration = 1400;
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('es-ES');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(animateCounter);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id && id.length > 1) {
        var t = document.querySelector(id);
        if (t) {
          ev.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // FAQ — only one open at a time
  var faqItems = document.querySelectorAll('.mg-faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Subtle parallax on hero blobs
  var blobs = document.querySelectorAll('.mg-blob');
  if (blobs.length && window.matchMedia('(hover:hover)').matches) {
    window.addEventListener('mousemove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 20;
      var y = (e.clientY / window.innerHeight - 0.5) * 20;
      blobs.forEach(function (b, i) {
        var f = i === 0 ? 1 : -1;
        b.style.transform = 'translate(' + (x * f) + 'px,' + (y * f) + 'px)';
      });
    });
  }
})();
