const carousel = document.querySelector(".new-arrivals__carousel-arrivals");
const carouselInner = carousel.querySelector(".new-arrivals__carousel-arrivals-inner");
const prevButton = carousel.querySelector(".carousel-control-prev1");
const nextButton = carousel.querySelector(".carousel-control-next1");

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
  carouselInner.innerHTML = ''; // Очистим карусель перед добавлением
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
  const slideWidth = slides[0].getBoundingClientRect().width; // Получаем реальную ширину слайда
  const offset = slideWidth * currentIndex; // Рассчитываем смещение на основе ширины
  carouselInner.style.transform = `translateX(-${offset}px)`;
}

prevButton.addEventListener("click", () => {
  if (--currentIndex < 0) {
    currentIndex = slides.length - slidesPerView * 2 - 1;
    carouselInner.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = "";
      });
    });
  } else {
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  carouselInner.style.transition = "";
  if (++currentIndex >= slides.length - slidesPerView) {
    currentIndex = slidesPerView;
    carouselInner.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = "";
      });
    });
  } else {
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  slidesPerView = getSlidesPerView();
  setupCarousel();
});