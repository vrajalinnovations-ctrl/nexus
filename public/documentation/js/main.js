/**
 * NEXUS Cyber Security — Documentation Interactive Controller
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Copy to Clipboard
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeId = btn.getAttribute('data-target');
      const codeEl = document.getElementById(codeId);
      if (!codeEl) return;
      
      const textToCopy = codeEl.innerText.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2 text-success"></i> Copied!';
        btn.style.borderColor = '#10b981';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.borderColor = '';
        }, 2000);
      });
    });
  });

  // 2. Screen Previews Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const screenCards = document.querySelectorAll('.screen-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      screenCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Search Bar Filter
  const searchInput = document.getElementById('docsSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      screenCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (!term || text.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 4. FAQ Accordion Toggle
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.parentElement;
      const isOpen = parent.classList.contains('open');
      // Close other FAQs
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });

  // 5. Active Sidebar Section Tracker on Scroll
  const sections = document.querySelectorAll('.doc-section, .docs-hero');
  const navLinks = document.querySelectorAll('.sidebar-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // 6. Mobile Sidebar Drawer Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.querySelector('.docs-sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });

    // Close on link click
    sidebar.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          sidebar.classList.remove('show');
        }
      });
    });
  }
});
