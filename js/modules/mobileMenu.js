export function initMobileMenu() {
  const burgerButton = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const menuLinks = document.querySelectorAll(".header__menu-link");

  if (burgerButton) {
    burgerButton.addEventListener("click", () => {
      if (!header.classList.contains("active")) {
        burgerButton.style.pointerEvents = "none";
        setTimeout(() => {
          burgerButton.style.pointerEvents = "auto";
        }, 500);
      }

      header.classList.toggle("active");
      burgerButton.classList.toggle("active");
    });
  }
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("active");
      burgerButton.classList.remove("active");
    });
  });
}
