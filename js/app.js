import { loadProducts, produtcState} from "./state/ProductState.js"
import { renderProducts } from "./ui/render.js"

document.addEventListener("DOMContentLoaded", () => {
    loadProducts()
    renderProducts(produtcState.products)
})