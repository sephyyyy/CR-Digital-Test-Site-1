/* ═══════════════════════════════════════════════
   CR DIGITAL GROUP — Script principale
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── HAMBURGER MENU ────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── SCROLL REVEAL ─────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  /* ─── NAV SCROLL EFFECT ─────────────────────── */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background        = 'rgba(10,10,12,0.97)';
      nav.style.borderBottomColor = 'rgba(0,229,255,0.12)';
    } else {
      nav.style.background        = 'rgba(10,10,12,0.85)';
      nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
    }
  }, { passive: true });

  /* ─── ACTIVE NAV LINK ───────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === '#' + current;
      link.style.color = isActive ? 'var(--accent)' : '';
    });
  }, { passive: true });

  /* ─── FORM SUBMIT ───────────────────────────── */
  const formSubmit = document.querySelector('.form-submit');
  if (formSubmit) {
    formSubmit.addEventListener('click', () => {
      alert('Grazie! Vi ricontatteremo a breve.');
    });
  }

});
