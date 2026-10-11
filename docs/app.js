(() => {
  'use strict';

  const CONFIG = window.SITE_CONFIG || {};
  const menu = {
    coffee: [
      { number: '01', name: 'Flat White', details: 'Yoğun espresso, ipeksi süt dokusu.', price: '₺145', symbol: '☕', bg: 'coffee-one', hint: 'EN SEVİLEN' },
      { number: '02', name: 'Caramel Latte', details: 'Espresso, süt ve karamelin tatlı dengesi.', price: '₺160', symbol: '✺', bg: 'coffee-two', hint: 'TATLI BİR MOLA' },
      { number: '03', name: 'Filtre Kahve', details: 'Yumuşak içim, gün boyu eşlik eden lezzet.', price: '₺115', symbol: '◉', bg: 'coffee-three', hint: 'GÜNÜN KLÂSİĞİ' },
    ],
    bakes: [
      { number: '01', name: 'Bademli Kruvasan', details: 'Kat kat tereyağlı hamur ve badem dokunuşu.', price: '₺150', symbol: '✦', bg: 'bake-one', hint: 'FIRINDAN TAZE' },
      { number: '02', name: 'San Sebastian', details: 'Dışı hafif karamelli, içi yumuşacık.', price: '₺180', symbol: '◒', bg: 'bake-two', hint: 'TATLI MOLASI' },
      { number: '03', name: 'Çikolatalı Cookie', details: 'Dışı çıtır, içi yumuşak, bol çikolatalı.', price: '₺95', symbol: '✳', bg: 'bake-three', hint: 'KÜÇÜK MUTLULUK' },
    ],
    cold: [
      { number: '01', name: 'Iced Latte', details: 'Buz gibi süt, espresso ve ferahlık.', price: '₺155', symbol: '❄', bg: 'cold-one', hint: 'SERİNLE' },
      { number: '02', name: 'Cold Brew', details: 'Uzun demleme, pürüzsüz yoğun lezzet.', price: '₺145', symbol: '◍', bg: 'cold-two', hint: 'YAVAŞ DEMLEME' },
      { number: '03', name: 'Ev Yapımı Limonata', details: 'Taze limon ve hafif nane kokusu.', price: '₺120', symbol: '☀', bg: 'cold-three', hint: 'TAZE & FERAH' },
    ],
  };

  const toast = document.getElementById('toast');
  let hideToast;
  const showToast = (message) => {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(hideToast);
    hideToast = setTimeout(() => { toast.hidden = true; }, 6400);
  };

  const menuContainer = document.getElementById('menu-cards');
  const tabs = Array.from(document.querySelectorAll('.menu-tab'));
  const renderMenu = (category) => {
    menuContainer.replaceChildren();
    menu[category].forEach((item) => {
      const card = document.createElement('article');
      card.className = 'menu-card';
      const artwork = document.createElement('div');
      artwork.className = `menu-art ${item.bg}`;
      artwork.setAttribute('aria-hidden', 'true');
      const circle = document.createElement('div');
      circle.className = 'art-circle';
      circle.textContent = item.symbol;
      artwork.append(circle);
      const info = document.createElement('div');
      info.className = 'menu-card-body';
      const eyebrow = document.createElement('div');
      eyebrow.className = 'menu-card-eyebrow';
      const n = document.createElement('span');
      n.textContent = item.number + ' / KÖK';
      const h = document.createElement('span');
      h.textContent = item.hint;
      eyebrow.append(n, h);
      const title = document.createElement('h3');
      title.textContent = item.name;
      const details = document.createElement('p');
      details.textContent = item.details;
      const price = document.createElement('strong');
      price.className = 'menu-price';
      price.textContent = item.price;
      info.append(eyebrow, title, details, price);
      card.append(artwork, info);
      menuContainer.append(card);
    });
  };
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderMenu(tab.dataset.category);
    });
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const next = tabs[(idx + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
      next.focus(); next.click();
    });
  });
  renderMenu('coffee');

  const navButton = document.querySelector('.mobile-menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  function closeMobile() {
    mobileNav.hidden = true;
    navButton.setAttribute('aria-expanded', 'false');
    navButton.setAttribute('aria-label', 'Menüyü aç');
  }
  navButton.addEventListener('click', () => {
    const isOpen = navButton.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = isOpen;
    navButton.setAttribute('aria-expanded', String(!isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Menüyü aç' : 'Menüyü kapat');
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobile));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });

  document.querySelector('[data-address]').textContent = CONFIG.address || 'İstanbul, Türkiye • Demo konum';
  document.querySelector('[data-email]').textContent = CONFIG.email || 'İletişim bilgisi demo için henüz tanımlanmadı';
  document.getElementById('year').textContent = String(new Date().getFullYear());

  document.querySelector('.whatsapp-action').addEventListener('click', () => {
    const digits = String(CONFIG.whatsappNumber || '').replace(/[^\d]/g, '');
    if (digits.length < 10 || digits.length > 15) {
      showToast('Bu örnek sitede WhatsApp numarası tanımlanmadı. Müşterinin numarasını config.js dosyasına ekleyerek butonu etkinleştirebilirsin.');
      return;
    }
    const msg = encodeURIComponent(CONFIG.whatsappMessage || 'Merhaba!');
    window.open(`https://wa.me/${digits}?text=${msg}`, '_blank', 'noopener,noreferrer');
  });

  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!CONFIG.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(CONFIG.email)) {
      showToast('Bu bir portföy demosu: mesaj gönderilmedi. Gerçek müşteri e-postasını config.js dosyasına ekleyerek formu etkinleştirebilirsin.');
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Web sitesinden mesaj: ${data.get('name')}`);
    const body = encodeURIComponent(`İsim: ${data.get('name')}\nE-posta: ${data.get('email')}\n\nMesaj:\n${data.get('message')}`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    showToast('E-posta uygulaman açılacak. Mesajın gönderilmesi için e-posta uygulamasında gönder tuşuna basmalısın.');
  });
})();