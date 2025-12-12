// Highlight the current page link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Handle contact form submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thanks! Your message has been noted (demo).');
      form.reset();
    });
  }
});
