// Smits & Wouters — Shared Animation System
// Scroll reveal + counter animations

(function () {
  'use strict';

  // ── Scroll Reveal ──────────────────────────────────────────────
  // Elements with class "reveal" (or "reveal-left" / "reveal-right")
  // fade+slide into view when they enter the viewport.
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
  // Parent with class "stagger" — direct children get staggered delays.
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
  // Elements with data-count="37" count up when first visible.
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-count-suffix') || '';
    var prefix = el.getAttribute('data-count-prefix') || '';
    var duration = 1600;
    var start = null;
    var startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(startVal + eased * (target - startVal));
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

  // ── Parallax on hero background ────────────────────────────────
  // Hero photo moves slightly as user scrolls down.
  function initParallax() {
    var hero = document.querySelector('.parallax-bg');
    if (!hero) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          hero.style.transform = 'translateY(' + (scrollY * 0.25) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Lenis smooth scroll ────────────────────────────────────────
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    var lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
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

  // ── Init ───────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initStagger();
    initCounters();
    initParallax();
    initLenis();
    initScrollProgress();
  });
})();
