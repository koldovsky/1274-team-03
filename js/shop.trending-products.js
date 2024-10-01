const quantityInput = document.getElementById('quantity-input');
  const arrowUp = document.getElementById('arrow-up');
  const arrowDown = document.getElementById('arrow-down');

  // Додаємо слухачі подій для збільшення кількості
  arrowUp.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });

  // Додаємо слухачі подій для зменшення кількості
  arrowDown.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });