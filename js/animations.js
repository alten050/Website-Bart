// Smits & Wouters — Premium Animation System
// Scroll reveal · Counters · Parallax · Lenis · Scroll progress
// Custom cursor · Magnetic buttons · Card tilt · Page transitions

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasFineMouse = window.matchMedia('(pointer: fine)').matches;

  // ── Scroll Reveal ──────────────────────────────────────────────
  function initReveal() {
    var elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ── Staggered children ─────────────────────────────────────────
  function initStagger() {
    var parents = document.querySelectorAll('.stagger');
    parents.forEach(function (parent) {
      var children = parent.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      children.forEach(function (child, i) {
        child.style.transitionDelay = (i * 0.1) + 's';
      });
    });
  }

  // ── Counter animation ──────────────────────────────────────────
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-count-suffix') || '';
    var prefix = el.getAttribute('data-count-prefix') || '';
    var duration = 1600;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  // ── Parallax — scroll + optional mouse tracking ────────────────
  function initParallax() {
    var bg = document.querySelector('.parallax-bg');
    if (!bg) return;

    var hero = bg.closest('.hero-mouse-parallax');
    var mouseOffsetX = 0, mouseOffsetY = 0;
    var targetX = 0, targetY = 0;
    var ticking = false;

    // Scroll-based parallax
    function applyTransform() {
      var scrollY = window.scrollY;
      bg.style.transform =
        'translateY(' + (scrollY * 0.25 + mouseOffsetY) + 'px)' +
        ' translateX(' + mouseOffsetX + 'px)' +
        ' scale(1.08)';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(applyTransform);
        ticking = true;
      }
    }, { passive: true });

    // Mouse parallax on hero (desktop only)
    if (hero && hasFineMouse && !prefersReducedMotion) {
      hero.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      });
      hero.addEventListener('mouseleave', function () {
        targetX = 0;
        targetY = 0;
      });

      (function animateMouse() {
        mouseOffsetX += (targetX - mouseOffsetX) * 0.06;
        mouseOffsetY += (targetY - mouseOffsetY) * 0.06;
        applyTransform();
        requestAnimationFrame(animateMouse);
      })();
    }
  }

  // ── Lenis smooth scroll ────────────────────────────────────────
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    var lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  // ── Scroll progress bar ────────────────────────────────────────
  function initScrollProgress() {
    if (!document.getElementById('scroll-progress')) return;
    var root = document.documentElement;
    window.addEventListener('scroll', function () {
      var max = root.scrollHeight - root.clientHeight;
      var pct = max > 0 ? (window.scrollY / max * 100).toFixed(2) : 0;
      root.style.setProperty('--scroll-pct', pct + '%');
    }, { passive: true });
  }

  // ── Custom cursor ──────────────────────────────────────────────
  function initCursor() {
    if (!hasFineMouse || prefersReducedMotion) return;

    var dot  = document.createElement('div');
    var ring = document.createElement('div');
    dot.className  = 'sw-cursor-dot';
    ring.className = 'sw-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var mouseX = -200, mouseY = -200;
    var ringX  = -200, ringY  = -200;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(' + (mouseX - 5) + 'px,' + (mouseY - 5) + 'px)';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      ring.style.transform = 'translate(' + (ringX - 20) + 'px,' + (ringY - 20) + 'px)';
      requestAnimationFrame(animateRing);
    })();

    // Expand ring when hovering links / buttons / cards
    function addHover(selector, label) {
      document.querySelectorAll(selector).forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          ring.setAttribute('data-state', label || 'hover');
        });
        el.addEventListener('mouseleave', function () {
          ring.removeAttribute('data-state');
        });
      });
    }
    addHover('a, button', 'link');
    addHover('.service-card, .project-card, .tilt-card', 'card');
  }

  // ── Magnetic buttons ───────────────────────────────────────────
  function initMagneticButtons() {
    if (!hasFineMouse || prefersReducedMotion) return;

    document.querySelectorAll('.btn-magnetic').forEach(function (btn) {
      var rect;

      btn.addEventListener('mouseenter', function () {
        rect = btn.getBoundingClientRect();
        btn.style.transition = 'transform 0.1s ease, opacity 0.2s ease';
      });

      btn.addEventListener('mousemove', function (e) {
        if (!rect) rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left - rect.width  / 2) * 0.3;
        var y = (e.clientY - rect.top  - rect.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px) translateY(-1px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transition = 'transform 0.65s cubic-bezier(.22,1,.36,1), opacity 0.2s ease';
        btn.style.transform = '';
      });
    });
  }

  // ── 3D card tilt ───────────────────────────────────────────────
  function initCardTilt() {
    if (!hasFineMouse || prefersReducedMotion) return;

    document.querySelectorAll('.tilt-card').forEach(function (card) {
      card.style.willChange = 'transform';

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width  - 0.5;
        var y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
        card.style.transform  =
          'perspective(900px) rotateY(' + (x * 9) + 'deg) rotateX(' + (-y * 9) + 'deg) translateZ(10px) translateY(-5px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 0.65s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease';
        card.style.transform  = '';
      });
    });
  }

  // ── Page transitions ───────────────────────────────────────────
  function initPageTransitions() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href
        || href.charAt(0) === '#'
        || href.indexOf('//') !== -1
        || href.indexOf('tel:')    === 0
        || href.indexOf('mailto:') === 0
        || link.getAttribute('target') === '_blank') return;

      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = href;
        document.body.classList.add('sw-page-out');
        setTimeout(function () { window.location.href = target; }, 280);
      });
    });
  }

  // ── Init ───────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initStagger();
    initCounters();
    initParallax();
    initLenis();
    initScrollProgress();
    initCursor();
    initMagneticButtons();
    initCardTilt();
    initPageTransitions();
  });
})();
