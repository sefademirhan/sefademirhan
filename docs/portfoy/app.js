'use strict';
(() => {
  document.documentElement.classList.add('js-ready');
  const $ = (q, base = document) => base.querySelector(q);
  const $$ = (q, base = document) => Array.from(base.querySelectorAll(q));
  const menuToggle = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');
  function setMenu(open) {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    mobileNav.hidden = !open;
  }
  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  $$('#mobile-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (ev) => { if (!ev.target.closest('.site-header')) setMenu(false); });

  const filters = $$('.filter');
  const cards = $$('.project-card');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const category = btn.dataset.filter || 'all';
    filters.forEach(f => { const active = f === btn; f.classList.toggle('active', active); f.setAttribute('aria-pressed', String(active)); });
    cards.forEach(card => { card.hidden = category !== 'all' && (card.dataset.category || '') !== category; });
  }));
  filters.forEach(f => f.setAttribute('aria-pressed', String(f.classList.contains('active'))));

  const form = $('#contact-form');
  const feedback = $('#form-feedback');
  const EMAIL = 'sefademirhan02@gmail.com';
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#contact-name')?.value.trim() || '';
    const email = $('#contact-email')?.value.trim() || '';
    const service = $('#contact-service')?.value || 'Web sitesi';
    const message = $('#contact-message')?.value.trim() || '';
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !message) {
      feedback.textContent = 'Lütfen adınızı, geçerli e-posta adresinizi ve mesajınızı doldurun.';
      feedback.className = 'form-feedback error';
      return;
    }
    const subject = `Yeni proje görüşmesi: ${service} — ${name}`;
    const body = `Merhaba Sefa,\n\n${message}\n\n---\nİletişim bilgileri\nAd Soyad: ${name}\nE-posta: ${email}\nİlgilenilen hizmet: ${service}\n`;
    feedback.textContent = 'E-posta uygulamanızda taslak açılıyor. Mesajı göndermek için e-posta uygulamanızda onaylamanız gerekir.';
    feedback.className = 'form-feedback success';
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });
    $$('.reveal').forEach(el => observer.observe(el));
  } else { $$('.reveal').forEach(el => el.classList.add('visible')); }
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();