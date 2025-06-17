    // Mobile menu toggle
    document.getElementById('mobile-menu').addEventListener('click', function () {
      document.querySelector('.nav-list').classList.toggle('active');
    });

    // Dark mode toggle
    document.getElementById('darkToggle').addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));