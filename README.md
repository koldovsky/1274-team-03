# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

# Team Members
- Anastasia Storozhenko
- Kostiantyn Pavlyk
- Katsimon Serhii
- Shulezhko Antony
- Melnyk Sofia
- Novostroinyi Dmytro
- Volosheniuk Vladyslav
- Semenchenko Andrii
- Mykola Rad
- Pavlo Tukalo
- Tsurkan Zoriana
- Antipov Oleksandr
- Rybitska Ivanna
- Maksym Lytvynchuk
- Oleksandr Yieriemieiev
