function init() {
    import('./index.trending-products.js')
    import('./index.top-recommendations.js');
 //   import('./index.product-list.js');
    import('./index.frequently-asked-question.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});