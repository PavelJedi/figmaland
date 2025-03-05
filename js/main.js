import { initMobileMenu } from './modules/mobileMenu.js';
import { initCarousel } from './modules/carousel.js';
import { initAccordion } from './modules/accordion.js';
import { initPortfolioFilters } from './modules/portfolioFilters.js';
import { initPagination } from './modules/pagination.js';
import { initSmoothScroll } from './modules/smoothScroll.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCarousel();
  initAccordion();
  initPortfolioFilters();
  initPagination();
  initSmoothScroll();
});