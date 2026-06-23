// ========== NAVBAR SCROLL ==========
(function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ========== MOBILE MENU ==========
(function() {
  const toggle = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.menu-close');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => menu.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => menu.classList.remove('open'));

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();

// ========== SCROLL REVEAL ==========
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ========== WAITLIST FORM ==========
(function() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const company = document.getElementById('company');
    let valid = true;

    // Clear errors
    [name, email, company].forEach(f => {
      f.classList.remove('form-error');
      const err = f.parentNode.querySelector('.form-error-msg');
      if (err) err.remove();
    });

    function showError(field, msg) {
      field.classList.add('form-error');
      const err = document.createElement('p');
      err.className = 'form-error-msg';
      err.textContent = msg;
      field.parentNode.appendChild(err);
      valid = false;
    }

    if (!name.value.trim()) showError(name, 'Name is required');
    if (!email.value.trim()) showError(email, 'Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) showError(email, 'Enter a valid email');
    if (!company.value.trim()) showError(company, 'Company is required');

    if (!valid) return;

    // Show loading
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<svg class="icon" style="animation:spin 1s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Submitting...';
    btn.disabled = true;

    setTimeout(() => {
      const data = {
        name: name.value,
        email: email.value,
        company: company.value,
        role: document.getElementById('role').value,
        useCase: document.getElementById('usecase').value,
        date: new Date().toISOString()
      };

      const existing = JSON.parse(localStorage.getItem('margint_waitlist') || '[]');
      existing.push(data);
      localStorage.setItem('margint_waitlist', JSON.stringify(existing));

      form.style.display = 'none';
      document.getElementById('success-state').classList.remove('hidden');
    }, 1500);
  });

  // Spin animation
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
  document.head.appendChild(style);
})();

// ========== ACCORDION ==========
(function() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all siblings if you want single-open behavior
      // item.parentElement.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));

      item.classList.toggle('open', !isOpen);
    });
  });
})();
