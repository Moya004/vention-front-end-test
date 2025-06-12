import { loadProducts, produtcState} from "./state/ProductState.js"
import  Cart  from "../data/CartStorage.js"
import { renderProducts } from "./ui/render.js"


document.addEventListener("DOMContentLoaded", () => {
    Cart.getCart()
    loadProducts()
    renderProducts(produtcState.products)
})