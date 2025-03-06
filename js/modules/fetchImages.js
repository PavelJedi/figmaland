// js/modules/fetchCarouselImages.js
export async function fetchCarouselImages(count = 3, width = 800, height = 400) {
  const images = [];

  for (let i = 0; i < count; i++) {
    images.push(`https://picsum.photos/${width}/${height}?random=${i + 1}`);
  }

  return images;
}
