import { Cart } from "./index.section-cart.js";
import { ProductsService } from "./index.products-service.js";

export class ProductList {
  constructor() {
    this.productsService = new ProductsService();
    this.listenForProductsRender();
  }

  listenForProductsRender() {
    document.addEventListener("productsRendered", () => {
      this.addEventListeners();
    });
  }

  addEventListeners() {
    document.querySelectorAll(".product-card__add-to-cart").forEach((btn) => {
      btn.addEventListener("click", this.addProductToCart.bind(this));
    });
  }

  addProductToCart(event) {
    const id = event.target.dataset.id;
    const cart = new Cart();
    cart.addProduct(id);
  }
}
new ProductList();
