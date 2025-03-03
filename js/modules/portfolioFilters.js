/**
 * Portfolio filters functionality
 */
export function initPortfolioFilters() {
  const portfolioFilters = document.querySelectorAll('.portfolio__filter');
  const portfolioItems = document.querySelectorAll('.portfolio__item');

  if (!portfolioFilters.length || !portfolioItems.length) return;

  portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Remove active class from all filters
      portfolioFilters.forEach(f => f.classList.remove('active'));
      
      // Add active class to the clicked filter
      filter.classList.add('active');
      
      const filterValue = filter.getAttribute('data-filter');
      
      // Show/hide portfolio items based on the selected filter
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}