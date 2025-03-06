import { fetchCarouselImages } from "./fetchImages.js";

export async function initCarousel() {
  const carouselSlides = document.querySelectorAll(".carousel__slide");
  const carouselDots = document.querySelectorAll(".carousel__dot");
  const prevButton = document.querySelector(".carousel__button--prev");
  const nextButton = document.querySelector(".carousel__button--next");

  if (!carouselSlides.length) return;

  let currentSlide = 0;

  const images = await fetchCarouselImages(carouselSlides.length);

  carouselSlides.forEach((slide, index) => {
    const img = slide.querySelector(".carousel__image");
    if (img) {
      img.src = images[index];
      img.alt = `Random Image ${index + 1}`;
    }
  });

  function showSlide(index) {
    carouselSlides.forEach((slide) => slide.classList.remove("active"));
    carouselDots.forEach((dot) => dot.classList.remove("active"));

    carouselSlides[index].classList.add("active");
    carouselDots[index].classList.add("active");
    currentSlide = index;
  }

  prevButton.addEventListener("click", () => {
    const index =
      currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1;
    showSlide(index);
  });

  nextButton.addEventListener("click", () => {
    const index =
      currentSlide === carouselSlides.length - 1 ? 0 : currentSlide + 1;
    showSlide(index);
  });

  carouselDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(parseInt(dot.dataset.index));
    });
  });

  showSlide(currentSlide);
}
