const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel__inner");
const prevButton = carousel.querySelector(".carousel-button-prev");
const nextButton = carousel.querySelector(".carousel-button-next");
let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
  if (window.innerWidth >= 1000) return 4;
  if (window.innerWidth >= 750) return 2;
  return 1;
}

function setupCarousel() {
  slides = slides.filter((slide) => !slide.classList.contains("clone"));
  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);
  carouselInner.innerHTML = "";
  carouselInner.append(...clonesStart, ...slides, ...clonesEnd);
  slides = Array.from(carouselInner.children);
  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("clone");
  return clone;
}

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const offset = slideWidth * currentIndex;
  carouselInner.style.transform = `translateX(-${offset}px)`;
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - slidesPerView * 2;
    carouselInner.style.transition = "none"; // Вимкнення анімації для миттєвого переміщення
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = ""; // Включення анімації знову
      });
    });
  } else {
    updateCarousel();
  }
  console.log("Current Index after prev click:", currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length - slidesPerView) {
    currentIndex = slidesPerView;
    carouselInner.style.transition = "none"; // Вимкнення анімації для миттєвого переміщення
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = ""; // Включення анімації знову
      });
    });
  } else {
    updateCarousel();
  }
  console.log("Current Index after next click:", currentIndex);
});

window.addEventListener("resize", () => {
  slidesPerView = getSlidesPerView();
  setupCarousel();
});
