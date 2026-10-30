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

/* ------------------------------------------------------------------ */
/* Resource directory search and category filters                      */
/* ------------------------------------------------------------------ */
(function initializeResourceDirectory() {
  const search = document.getElementById('resource-search');
  const cards = Array.from(document.querySelectorAll('.resource-card'));
  const filters = Array.from(document.querySelectorAll('.filter-chip'));
  const count = document.getElementById('results-count');
  const emptyState = document.getElementById('empty-state');

  if (!search || !cards.length || !count || !emptyState) return;

  let activeCategory = 'all';

  const updateResults = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesQuery = !query || card.textContent.toLocaleLowerCase().includes(query)
        || (card.dataset.search || '').toLocaleLowerCase().includes(query);
      const isVisible = matchesCategory && matchesQuery;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    count.textContent = `Showing ${visibleCount} of ${cards.length} resources`;
    emptyState.hidden = visibleCount > 0;
  };

  search.addEventListener('input', updateResults);

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      activeCategory = filter.dataset.filter || 'all';

      filters.forEach((item) => {
        const isActive = item === filter;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      updateResults();
    });
  });

  updateResults();
})();

/* ------------------------------------------------------------------ */
/* Local attribution-note builder                                      */
/* ------------------------------------------------------------------ */
(function initializeAttributionBuilder() {
  const form = document.getElementById('credit-form');
  const output = document.getElementById('credit-output');
  const copyButton = document.getElementById('copy-credit');
  const status = document.getElementById('credit-status');

  if (!form || !output || !copyButton || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = String(formData.get('title') || '').trim();
    const creator = String(formData.get('creator') || '').trim();
    const source = String(formData.get('source') || '').trim();
    const license = String(formData.get('license') || '').trim();
    const adapted = formData.has('adapted');

    output.value = `${title} by ${creator}. Source: ${source}. License: ${license}.${adapted ? ' Modified from the original.' : ''}`;
    copyButton.disabled = false;
    status.textContent = 'Draft created. Verify the exact credit wording required by the original license.';
  });

  form.addEventListener('input', () => {
    output.value = '';
    copyButton.disabled = true;
    status.textContent = 'Your entries stay in this browser and are not sent to the site.';
  });

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = 'Attribution copied to the clipboard.';
    } catch (error) {
      status.textContent = 'Automatic copy failed. Select the attribution text and copy it manually.';
    }
  });
})();
