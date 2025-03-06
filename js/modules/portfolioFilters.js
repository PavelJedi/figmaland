import { fetchCarouselImages } from './fetchImages.js';

export async function initPortfolioFilters() {
  const portfolioFilters = document.querySelectorAll('.portfolio__filter');
  const portfolioItems = document.querySelectorAll('.portfolio__item');

  if (!portfolioFilters.length || !portfolioItems.length) return;

  const images = await fetchCarouselImages(portfolioItems.length, 300, 200);

  portfolioItems.forEach((item, index) => {
    const img = item.querySelector('.portfolio__image');
    if (img) {
      img.src = images[index];
      img.alt = `Portfolio Image ${index + 1}`;
    }
  });

  // Existing filtering logic (unchanged)
  portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const filterValue = filter.dataset.filter;

      portfolioFilters.forEach(btn => btn.classList.toggle('active', btn === filter));

      portfolioItems.forEach(item => {
        item.style.display =
          filter.dataset.filter === 'all' || item.dataset.category === filter.dataset.filter
            ? 'block'
            : 'none';
      });
    });
  });
}
