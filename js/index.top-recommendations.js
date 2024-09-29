const dogsProducts = [
    {
        id: "1",
        title: "DOGGY Fun Set",
        image: "img/section-top-recommendations/section-top-recommendations-for-dogs/doggy-fun-set.png",
        price: 6.00
    },
    {
        id: "2",
        title: "DUNA Pillow Bed",
        image: "img/section-top-recommendations/section-top-recommendations-for-dogs/duna-pillow-bed.png",
        price: 10.00
    },
    {
        id: "3",
        title: "AGA Retractable Leash",
        image: "img/section-top-recommendations/section-top-recommendations-for-dogs/aga-retractable-leash.png",
        price: 33.00
    },
    {
        id: "4",
        title: "DOGGY 2-Bunch Toy",
        image: "img/section-top-recommendations/section-top-recommendations-for-dogs/doggy-2-bunch-toy.png",
        price: 5.00
    }
];

const catsProducts = [
    {
        id: "1",
        title: "AGA Mice Set",
        image: "img/section-top-recommendations/section-top-recommendations-for-cats/aga-mice-set.png",
        price: 3.00
    },
    {
        id: "2",
        title: "VITALIFE 2-Bowls Set",
        image: "img/section-top-recommendations/section-top-recommendations-for-cats/vitalife-2-bowls-set.png",
        price: 9.00
    },
    {
        id: "3",
        title: "AGA Leash & Collar",
        image: "img/section-top-recommendations/section-top-recommendations-for-cats/aga-leash-collar.png",
        price: 13.00
    },
    {
        id: "4",
        title: "DUNA Gray Bed",
        image: "img/section-top-recommendations/section-top-recommendations-for-cats/duna-gray-bed.png",
        price: 25.00
    }
];

const parrotsProducts = [
    {
        id: "1",
        title: "DORA Hanging Mirror",
        image: "img/section-top-recommendations/section-top-recommendations-for-parrots/dora-hanging-mirror.png",
        price: 14.00
    },
    {
        id: "2",
        title: "VETRA Hanging Nest",
        image: "img/section-top-recommendations/section-top-recommendations-for-parrots/vetra-hanging-nest.png",
        price: 8.00
    },
    {
        id: "3",
        title: "DORA Wood Swing",
        image: "img/section-top-recommendations/section-top-recommendations-for-parrots/dora-wood-swing.png",
        price: 7.00
    },
    {
        id: "4",
        title: "OPTY Wooden Stand",
        image: "img/section-top-recommendations/section-top-recommendations-for-parrots/opty-wooden-stand.png",
        price: 13.00
    }
];

const rabbitsProducts = [
    {
        id: "1",
        title: "SERA Purple Collar",
        image: "img/section-top-recommendations/section-top-recommendations-for-rabbits/sera-purple-collar.png",
        price: 2.00
    },
    {
        id: "2",
        title: "AGA Clinking Toy",
        image: "img/section-top-recommendations/section-top-recommendations-for-rabbits/aga-clinking-toy.png",
        price: 2.00
    },
    {
        id: "3",
        title: "HARNO Rabbit Cage",
        image: "img/section-top-recommendations/section-top-recommendations-for-rabbits/harno-rabbit-cage.png",
        price: 60.00
    },
    {
        id: "4",
        title: "DORA Rabbit Brush",
        image: "img/section-top-recommendations/section-top-recommendations-for-rabbits/dora-rabbit-brush.png",
        price: 10.00
    }
];

const hamstersProducts = [
    {
        id: "1",
        title: "AGA Bowl for Hamsters",
        image: "img/section-top-recommendations/section-top-recommendations-for-hamsters/aga-bowl-for-hamsters.png",
        price: 2.00
    },
    {
        id: "2",
        title: "TISCO Toy Wheel",
        image: "img/section-top-recommendations/section-top-recommendations-for-hamsters/tisco-toy-wheel.png",
        price: 9.00
    },
    {
        id: "3",
        title: "STERCO Rainbow Balls",
        image: "img/section-top-recommendations/section-top-recommendations-for-hamsters/sterco-rainbow-balls.png",
        price: 3.50
    },
    {
        id: "4",
        title: "AGA Green Cage",
        image: "img/section-top-recommendations/section-top-recommendations-for-hamsters/aga-green-cage.png",
        price: 25.00
    }
];

const fishProducts = [
    {
        id: "1",
        title: "DUCCA Air Pump",
        image: "img/section-top-recommendations/section-top-recommendations-for-fish/ducca-air-pump.png",
        price: 42.00
    },
    {
        id: "2",
        title: "TISCO 50 Liter Aquarium",
        image: "img/section-top-recommendations/section-top-recommendations-for-fish/tisco-50-liter-aquarium.png",
        price: 70.00
    },
    {
        id: "3",
        title: "VEGA Fish Castle",
        image: "img/section-top-recommendations/section-top-recommendations-for-fish/vega-fish-castle.png",
        price: 6.00
    },
    {
        id: "4",
        title: "TISCO Landing Net",
        image: "img/section-top-recommendations/section-top-recommendations-for-fish/tisco-landing-net.png",
        price: 4.00
    }
];

const products = [dogsProducts, catsProducts, parrotsProducts, rabbitsProducts, hamstersProducts, fishProducts];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <article class="top-recommendations__product">
                <a href="shop.html" class="top-recommendations__product-img-link"><img class="top-recommendations__product-img"
                        src="${product.image}"
                        alt="${product.title}" width="270" /></a>
                <a href="shop.html" class="top-recommendations__product-txt-link">${product.title}</a>
                <span class="top-recommendations__product-price">$${product.price.toFixed(2).replace('.', ',')}</span>
                <button class="top-recommendations__add-to-cart-btn">Add to Cart</button>
            </article>
        `;
    }
    const productsContainer = document.querySelector('.top-recommendations__products');
    productsContainer.innerHTML = productsHtml;
}

function renderButtons(buttons) {
    for (let i = 0; i < buttons.length; ++i) {
        console.log(products[i]);
        buttons[i].addEventListener("click", () => renderProducts(products[i]));
        buttons[i].addEventListener("click", () => {
            document.querySelector('.active-btn').classList.remove('active-btn');
            buttons[i].classList.add('active-btn');
        });
    }
}

const catsButton = document.querySelector('.cats-button');
const categoryButtons = document.querySelectorAll('.top-recommendations__category-btn');

renderButtons(categoryButtons);
renderProducts(dogsProducts);