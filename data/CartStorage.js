const CART_KET = 'cart'


const Cart = (() => {
    var items = null

    const getCart = () => {
        if (items) return items
        let local = localStorage.getItem(CART_KET)
        if (!local) {
            items = new Map()
            saveCart(items)
            return items
        }
        items = JSON.parse(local)
        items = new Map(Object.entries(items))
        return items
    }

    const saveCart = () => {
        localStorage.setItem(CART_KET, JSON.stringify(Object.fromEntries(items)))
    }

    const addToCart = (product) => {
        if (!items.has(`${product.id}`)) {
            items.set(product.id, true)
            saveCart(items)
        }
    }

    const removeFromCart = (productId) => {
        if (items.has(`${productId}`)) {
            items.delete(`${productId}`)
        }
        saveCart(items)
    }

    const isInCart = (productId) => {
        if (!items) {
            return false
        }
        return items.has(`${productId}`);
    }

    return {
        getCart,
        addToCart,
        removeFromCart,
        isInCart,
    }
})()

export default Cart