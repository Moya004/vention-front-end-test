export class Product {
    constructor (id, price, name, image, rating) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.image = image;
        this.isInCart = false;
        this.rating = rating; 
    }
}