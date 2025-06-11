
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
            <p class="product-rating">Rating: ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">${product.isInCart ? "Remove from cart" : "Add to cart"}</button>
        `;

        productsContainer.appendChild(productCard)
    })
}