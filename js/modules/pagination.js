/**
 * Pagination functionality
 */
export function initPagination() {
  const paginationNumbers = document.querySelectorAll('.pagination__number');
  const paginationPrev = document.querySelector('.pagination__button--prev');
  const paginationNext = document.querySelector('.pagination__button--next');

  if (!paginationNumbers.length) return;

  let currentPage = 0;

  function updatePagination() {
    paginationNumbers.forEach((number, index) => {
      number.classList.toggle('active', index === currentPage);
    });
    
    // Disable/enable prev/next buttons
    paginationPrev.disabled = currentPage === 0;
    paginationNext.disabled = currentPage === paginationNumbers.length - 1;
  }

  paginationNumbers.forEach((number, index) => {
    number.addEventListener('click', () => {
      currentPage = index;
      updatePagination();
    });
  });
  
  if (paginationPrev) {
    paginationPrev.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updatePagination();
      }
    });
  }
  
  if (paginationNext) {
    paginationNext.addEventListener('click', () => {
      if (currentPage < paginationNumbers.length - 1) {
        currentPage++;
        updatePagination();
      }
    });
  }
}