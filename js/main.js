/**
 * main.js — Root website JavaScript
 * Minimal vanilla JS. No frameworks required.
 */

'use strict';

/* ------------------------------------------------------------------ */
/* Utility                                                              */
/* ------------------------------------------------------------------ */

/**
 * Safely query a single element; returns null instead of throwing.
 * @param {string} selector
 * @param {ParentNode} [root=document]
 * @returns {Element|null}
 */
const $ = (selector, root = document) => root.querySelector(selector);

/* ------------------------------------------------------------------ */
/* Current year in footer copyright                                     */
/* ------------------------------------------------------------------ */
(function setYear() {
  const el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ------------------------------------------------------------------ */
/* Announce page ready to screen readers                                */
/* ------------------------------------------------------------------ */
(function srAnnounce() {
  const live = document.getElementById('sr-live');
  if (live) {
    live.textContent = 'Page loaded.';
    setTimeout(() => { live.textContent = ''; }, 3000);
  }
})();

/* ------------------------------------------------------------------ */
/* Smooth-scroll for same-page anchor links (progressively enhanced)   */
/* ------------------------------------------------------------------ */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href').slice(1);
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});
