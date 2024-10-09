function init() {
<<<<<<< HEAD
    import('./index.trending-products.js')
    import('./index.top-recommendations.js');
    import('./index.product-list.js');
    import('./index.frequently-asked-question.js');
    import('./index.promotion.js');
    import('./index.our-news-and-articles.js');
    import('./index.our-new-arrivals.js');
    import('./index.pets-product-discount.js');
=======
>>>>>>> 791047f7c19e57cc80a96f8076a206c74b2de221
  import("./index.trending-products.js");
  import("./index.products-service.js");
  import("./index.product-list.js");
  import("./index.section-cart.js");
  import("./index.top-recommendations.js");
  import("./index.frequently-asked-question.js");
  import("./index.promotion.js");
  import("./index.our-news-and-articles.js");
  import("./index.our-new-arrivals.js");
<<<<<<< HEAD
=======
  import('./index.pets-product-discount.js');
  import('./index.any-products.js');
  import('./index.dry-food-treats.js');
  import("./index.testimonials-by-our-client.js");

>>>>>>> 791047f7c19e57cc80a96f8076a206c74b2de221
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
