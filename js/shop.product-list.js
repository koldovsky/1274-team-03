const products = [
  {
    id: "1",
    title: "DORA Metal Pet Brush (2321)",
    code: "Product code 43",
    image: "img/section-trending-products/dora-metal-pet-brush.png",
    price: 15.0,
    description:
      "Keep your pet's coat soft, manageable, and good-looking will be much easier with this brush. It has flexible metal pins to remove excess fur and tangles while not hurting your pet.",
    slug: "dora-metal-pet-brush",
  },
  {
    id: "2",
    title: "Kitten's Heaven Set (2321)",
    code: "Product code 45",
    image: "img/section-trending-products/kittens-heaven-set.png",
    price: 12.0,
    description:
      "Have you adopted a kitten? Congratulations! It will love this set of toys for sure. Here is everything to entertain your pet — bright woolen mice, sticks with ropes, and clinking balls.",
    slug: "kittens-heaven-set",
  },
  {
    id: "3",
    title: "AGA Rope Toy (2321)",
    code: "Product code 46",
    image: "img/section-trending-products/aga-rope-toy.png",
    price: 5.0,
    description:
      "Play with your dog with this great and simple toy. It features a tennis ball in the middle with a knotted rope running through it. Great for tug-and-fetch games.",
    slug: "aga-rope-toy",
  },
  {
    id: "4",
    title: "DORA Pet Carrier (2321)",
    code: "Product code 24",
    image: "img/section-trending-products/dora-pet-carrier.png",
    price: 23.0,
    description:
      "Do you need to go somewhere with your pet? This carrier is perfect for this. It allows enough air to pass through thanks to the grate and allows the pet to see what is happening around.",
    slug: "dora-pet-carrier",
  },
  {
    id: "5",
    title: "OPTY Pet Carrier (2321)",
    code: "Product code 48",
    image: "img/section-trending-products/opty-pet-carrier.png",
    price: 8.0,
    description:
      "This plastic carrier is large enough even for adult cats. We cannot relieve pets of the stress of being carried outside, but we can make it more comfortable, right?",
    slug: "opty-pet-carrier",
  },
];

function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product");
}

function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

function renderProduct(product) {
  let productHtml = `
    <div class="product-page-container">
      <div class="product-container">
        <div class="product-navigation">
          <div class="button-prev">
            <svg width="17" height="24" viewBox="0 0 17 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 24L5.23811 12L16.6667 0L12.0953 0L0.666685 12L12.0953 24L16.6667 24Z" />
            </svg>
          </div>
          <div class="product-navigation__image">
            <a href="shop.html" class="product-navigation__link">
              <img class="product-navigation__img" width="361" src="${
                product.image
              }" alt="${product.title}" />
            </a>
          </div>
          <div class="button-next">
            <svg width="17" height="24" viewBox="0 0 17 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333313 0L11.7619 12L0.333311 24L4.90474 24L16.3333 12L4.90474 0L0.333313 0Z" />
            </svg>
          </div>
        </div>
        <div class="product-preview">
          <article class="product-preview__card">
            <a href="shop.html" class="product-preview__link">
              <img class="product-preview__image" width="92" src="${
                product.image
              }" alt="${product.title}" />
            </a>
          </article>
        </div>
      </div>

      <div class="product-info">
        <div class="product-details">
          <p class="product-details__status">In stock</p>
          <p class="product-details__name">${product.title}</p>
          <p class="product-details__code">${product.code}</p>
          <p class="product-details__price">$${product.price.toFixed(2)}</p>
        </div>

        <div class="price-section__divider"></div>

        <div class="quantity-selection">
          <div class="quantity-selection__container">
            <div class="quantity-selection__input-group">
              <input class="quantity-selection__input" type="text" value="1" id="quantity-input" />
              <div class="quantity-selection__arrows">
                <svg class="quantity-selection__arrow quantity-selection__arrow--up" width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-up">
                  <path d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z" fill="#9199AB"></path>
                </svg>
                <svg class="quantity-selection__arrow quantity-selection__arrow--down" width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow-down">
                  <path d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z" fill="#9199AB"></path>
                </svg>
              </div>
            </div>
            <div>
              <button class="button--shop-page quantity-selection__add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>

        <div class="product-description">
          <div class="product-description__button-container">
            <h3 class="product-description__toggle">DESCRIPTION</h3>
            <div class="price-section__divider"></div>
          </div>
          <p class="product-description__text">${product.description}</p>
        </div>
      </div>
    </div>
  `;
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productHtml;
}

const productSlug = getProductFromURL();
if (productSlug) {
  const product = getProductBySlug(productSlug);
  if (product) {
    renderProduct(product);
  } else {
    document.querySelector(".products__list").innerHTML =
      "<p>Product not found</p>";
  }
}
