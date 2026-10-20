/**
 * NIIO — Official Website Scripts
 * - Smooth accessible keyboard slide navigation
 * - Tech & Hospitality Rider lightbox modal
 */
(() => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Keyboard Slide Navigation
  // --------------------------------------------------------------------------
  const slides = Array.from(document.querySelectorAll('.slide'));

  function getCurrentSlideIndex() {
    const scrollY = window.scrollY || window.pageYOffset;
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetTop - scrollY);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    return closestIndex;
  }

  function scrollToSlide(index) {
    if (index >= 0 && index < slides.length) {
      slides[index].scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --------------------------------------------------------------------------
  // 2. Tech & Hospitality Rider Lightbox Modal
  // --------------------------------------------------------------------------
  const riderBtn = document.getElementById('tech-rider-btn');
  const riderModal = document.getElementById('rider-modal');
  const riderCloseBtn = document.getElementById('rider-modal-close');

  function openRiderModal(e) {
    if (e) e.preventDefault();
    if (!riderModal) return;
    riderModal.removeAttribute('hidden');
    riderCloseBtn?.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeRiderModal() {
    if (!riderModal) return;
    riderModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    riderBtn?.focus();
  }

  if (riderBtn && riderModal) {
    riderBtn.addEventListener('click', openRiderModal);
    riderCloseBtn?.addEventListener('click', closeRiderModal);

    riderModal.addEventListener('click', (e) => {
      // Close if clicking outside the modal content container
      if (e.target === riderModal) {
        closeRiderModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Global Keyboard Listener (Navigation + Escape Modal)
  // --------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    // If rider modal is open, Escape closes it
    if (riderModal && !riderModal.hasAttribute('hidden')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeRiderModal();
      }
      return;
    }

    // Ignore if focus is in an input or editable element
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      const current = getCurrentSlideIndex();
      if (current < slides.length - 1) {
        e.preventDefault();
        scrollToSlide(current + 1);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      const current = getCurrentSlideIndex();
      if (current > 0) {
        e.preventDefault();
        scrollToSlide(current - 1);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToSlide(slides.length - 1);
    }
  });
})();
