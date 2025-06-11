import { renderStars } from "./renderRating.js";


export function renderProducts(products) {
    const productsContainer = document.querySelector("#product-list");
    productsContainer.innerHTML = ""

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card"

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        `;
        productCard.appendChild(renderStars(product.rating))

        const button  = document.createElement("button")
        button.classList.add("add-to-cart-btn")
        button.textContent = product.isInCart ? "Remove from cart" : "Add to cart"
        productCard.appendChild(button)
        productsContainer.appendChild(productCard)
    })
}