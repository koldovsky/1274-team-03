// Выбираем элементы корзины
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");

cartIcon.addEventListener("click", () => {
  // Проверяем состояние модального окна
  console.log("Cart icon clicked!");
  
  if (cartModal.style.display === "block") {
    cartModal.style.display = "none";
  } else {
    cartModal.style.display = "block";
  }
});

const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];
let totalAmount = 0;

// Функция обновления модального окна корзины
function updateCartModal() {
  cartItemsContainer.innerHTML = ""; // Очистить предыдущие элементы
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">&times;</button>
            `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Обновить общую сумму
  cartTotal.innerText = totalAmount.toFixed(2);

  // Добавить обработчики для кнопок удаления
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      removeFromCart(index);
    });
  });
}

// Функция добавления товара в корзину
function addToCart(name, price) {
  cart.push({ name, price });
  totalAmount += price;
  cartCount.innerText = cart.length;
  updateCartModal();
  cartIcon.style.display = "block";
}

// Функция удаления товара из корзины
function removeFromCart(index) {
  totalAmount -= cart[index].price;
  cart.splice(index, 1);
  cartCount.innerText = cart.length;
  updateCartModal();

  if (cart.length === 0) {
    cartIcon.style.display = "none";
  }
}

// Делегирование события для кнопок "Add To Cart"
document.body.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".product-card__add-to-cart")) {
      const button = e.target;
      const productCard = button.closest(".product-card");
      
      // Проверьте выбор элемента
      console.log(productCard);
  
      const productName = productCard.querySelector(".product-card__name a").innerText;
      const productPriceText = productCard.querySelector(".product-card__price").innerText;
      const productPrice = parseFloat(productPriceText.replace("$", ""));
  
      // Вызываем функцию добавления в корзину
      addToCart(productName, productPrice);
    }
  });

// Переключение видимости модального окна при клике на иконку корзины
cartIcon.addEventListener("click", () => {
  if (cartModal.style.display === "block") {
    cartModal.style.display = "none";
  } else {
    cartModal.style.display = "block";
  }
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
