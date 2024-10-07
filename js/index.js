function init() {
  import("./index.trending-products.js");
  import("./index.products-service.js");
  import("./index.product-list.js");
  import("./index.section-cart.js");
  import("./index.top-recommendations.js");
  import("./index.frequently-asked-question.js");
  import("./index.promotion.js");
  import("./index.our-news-and-articles.js");
  import("./index.our-new-arrivals.js");
  import('./index.pets-product-discount.js');
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
