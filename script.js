//U94140233
document.addEventListener('DOMContentLoaded', async () => {
    const loadingElement = document.querySelector('.loading');
    const errorElement = document.querySelector('.error');
    const productsContainer = document.querySelector('.products-container');
    const navigationElement = document.querySelector('.navigation');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const apiURL = 'https://course-api.com/react-store-products'

    let products = [];
    let currentIndex = 0;

    function displayProduct() {
        if (products.length === 0) return;

        const product = products[currentIndex];
        productsContainer.innerHTML = `
            <div class="product" style="opacity: 0;">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${(product.price / 100).toFixed(2)}</p>
                <p>${product.description}</p>
            </div>
        `;

        const productElement = document.querySelector('.product');
        setTimeout(() => {
            productElement.style.opacity = 1;
        }, 50);

        navigationElement.style.display = products.length > 1 ? 'block' : 'none';
    }

    function showLoading() {
        loadingElement.style.display = 'block';
    }

    function hideLoading() {
        loadingElement.style.display = 'none';
    }

    function showError() {
        errorElement.style.display = 'block';
    }

    function hideError() {
        errorElement.style.display = 'none';
    }

    async function loadProducts() {
        showLoading();
        hideError();
        try {
            const response = await fetch(apiURL);
            products = await response.json();
            hideLoading();
            displayProduct();
        } catch (error) {
            showError();
            hideLoading();
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        displayProduct();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        displayProduct();
    });

    loadProducts();
});