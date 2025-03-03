/**
 * Smooth scrolling functionality for navigation links
 */
export function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.header__menu-link');
  const header = document.querySelector('.header');

  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (header.classList.contains('active')) {
          header.classList.remove('active');
        }
      }
    });
  });
}