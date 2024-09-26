const products = [
  {
    id: "1",
    title: "DORA Metal Pet Brush",
    image: "img/section-trending-products/dora-metal-pet-brush.png",
    price: 15.0,
  },
  {
    id: "2",
    title: "Kitten's Heaven Set",
    image: "img/section-trending-products/kittens-heaven-set.png",
    price: 12.0,
  },
  {
    id: "3",
    title: "AGA Rope Toy",
    image: "img/section-trending-products/aga-rope-toy.png",
    price: 8.0,
  },
  {
    id: "4",
    title: "Kitten's Heaven Set",
    image: "img/section-trending-products/kittens-heaven-set.png",
    price: 5.0,
  },
  {
    id: "5",
    title: "DORA Pet Carrier",
    image: "img/section-trending-products/dora-pet-carrier.png",
    price: 23.0,
  },
];

function renderProducts(products) {
  let productsHtml = "";
  for (const product of products) {
    productsHtml += `
            <a class="product-card__link" href="shop.html">
                <img
                   class="product-card__image"
                    src="${product.image}"
                  alt="${product.title}"
                />
            </a>
            <p class="product-card__name">
                <a href="shop.html" class="product-card__link">>${product.title}</a>
            </p>
            <p class="product-card__price">$${product.price}</p>
            <button class="button product-card__add-to-cart">Add To Cart</button>
        `;
  }
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHtml;
}

renderProducts(products);
