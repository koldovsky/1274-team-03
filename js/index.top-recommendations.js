const response = await fetch('api/products.json');
const products = await response.json();

const categoryButtons = document.querySelectorAll('.top-recommendations__category-btn');
const tabsInner = document.querySelectorAll('.top-recommendations__products');

function getProductByType(type) {
    return products.filter((product) => product.category === "top-recommendations" && product.type === type);
}

function renderProductsForTab(tabInner, products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
            <article class="top-recommendations__product">
                    <a href="shop.html" class="top-recommendations__product-img-link"><img class="top-recommendations__product-img"
                            src="${product.image}"
                            alt="${product.title}" width="270" /></a>
                    <a href="shop.html" class="top-recommendations__product-txt-link">${product.title}</a>
                    <span class="top-recommendations__product-price">$${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="button product-card__add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </article>
            `;
    }
    tabInner.innerHTML = productsHtml;
}

function renderAllProducts(tabsInner) {
    const types = ["dogs", "cats", "parrots", "rabbits", "hamsters", "fish"];

    for (let i = 0; i < tabsInner.length; ++i) {
        renderProductsForTab(tabsInner[i], getProductByType(types[i]));
    }

    const event = new Event("productsRendered");
    document.dispatchEvent(event);
}

function renderButtons(tabsInner, buttons) {
    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener("click", () => {
            document.querySelector('.active-btn').classList.remove('active-btn');
            buttons[i].classList.add('active-btn');
            document.querySelector('.active-tab').classList.remove('active-tab');
            tabsInner[i].classList.add('active-tab');
        });
    }
}

renderButtons(tabsInner, categoryButtons);
renderAllProducts(tabsInner);