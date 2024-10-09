$(document).ready(function () {
  let currentIndex = 0;
  const images = $('.pets-product__carousel-image');
  const totalImages = images.length;

  // Показати 6 зображень одночасно
  const showImages = () => {
    const offset = -currentIndex * (100 / 6); // Вираховуємо зсув для 6 зображень
    $('.pets-product-discount__carousel-container').css('transform', `translateX(${offset}%)`);
  };

  $('.next').click(function () {
    if (currentIndex < totalImages - 6) { // Змінено умову на 6
      currentIndex++;
      showImages();
    }
  });

  $('.prev').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      showImages();
    }
  });

  // Показуємо початкові зображення
  showImages();
});
