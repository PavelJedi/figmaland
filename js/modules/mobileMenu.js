/**
 * Mobile Menu functionality
 */
export function initMobileMenu() {
  const burgerButton = document.querySelector('.header__burger');
  const header = document.querySelector('.header');

  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      header.classList.toggle('active');
      
      // Toggle burger menu animation
      const burgerLines = burgerButton.querySelectorAll('.header__burger-line');
      burgerLines[0].classList.toggle('rotate-45');
      burgerLines[1].classList.toggle('opacity-0');
      burgerLines[2].classList.toggle('rotate--45');
    });
  }
}