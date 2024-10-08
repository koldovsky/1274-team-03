document.querySelectorAll('.dry-food-section__product-image').forEach(function(img) {
    img.addEventListener('click', function() {
        img.style.transform = "scale(1.5)";
        setTimeout(function() {
            img.style.transform = "scale(1)";
        }, 1000);
    });
});

const textElement = document.getElementById('text-explain');
const textOptions = [
    "Discover the best well-balanced dry and canned food for your pets!",
    "Treat your pets to nutritious and delicious dry and canned food selections!",
    "Explore top-quality dry and canned food to keep your pets happy and healthy!",
    "Find the perfect nutrition with our premium dry and canned pet food!",
    "Give your pets the best with our expertly crafted dry and wet food options!",
    "Nourish your pets with our carefully balanced dry and canned food!",
    "Keep your pets healthy and strong with our high-quality dry and canned food!",
    "Choose from a variety of delicious and nutritious dry and wet pet food!",
    "Ensure your pets get the best with our well-balanced dry and wet food!",
    "Pamper your pets with top-tier dry and canned food, crafted for their needs!"
];

let currentIndex = 0;
textElement.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % textOptions.length;
    textElement.textContent = textOptions[currentIndex];
});

