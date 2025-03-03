/**
 * Accordion functionality
 */
export function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion__item');

  if (!accordionItems.length) return;

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');
    
    header.addEventListener('click', () => {
      // Close all other accordion items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle the current accordion item
      item.classList.toggle('active');
    });
  });
}