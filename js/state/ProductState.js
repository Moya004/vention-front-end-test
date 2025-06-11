import { Product } from "../models/Product.js"


export const produtcState = {
    products: [],
}


export function loadProducts() {
    produtcState.products = [
        new Product(1, 80.00, "Blue Flower", "../assets/blue-flower.png", 4),
        new Product(2, 17.60, "Orange Flower", "../assets/orange-flower.png", 3),
        new Product(3, 40.00, "Pink Flower", "../assets/pink-flower.png", 5),
    ]
}