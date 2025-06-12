import { renderStars } from "./renderRating.js"


export function renderProducts(products) {
    const productsContainer = document.querySelector("#product-list")
    productsContainer.innerHTML = ""

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card"

        const buttonText = product.isInCart ? "Remove from cart" : "Add to cart"
        
        productCard.innerHTML = `
            <div >
                <span id="badge" class="in-cart-badge">In Cart</span>
            </div>
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}">
                <button class="add-to-cart-btn">${buttonText}</button>
            </div>
            <div id="info" class="product-info">
                <p class="name">${product.name}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        productCard.lastElementChild.appendChild(renderStars(product.rating))

        const button = productCard.querySelector(".add-to-cart-btn")
        button.addEventListener("click", () => {
            product.isInCart = !product.isInCart;
            button.textContent = product.isInCart ? "Remove from cart" : "Add to cart"
            if(product.isInCart) {
                productCard.classList.add("in-cart")
            } else {
                productCard.classList.remove("in-cart")
            }

        });
        
        productsContainer.appendChild(productCard)
    })
}