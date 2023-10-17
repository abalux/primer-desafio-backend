
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        codeExists = this.products.some(product => product.code === code)
        if (codeExists){
            throw new error("A product with code ${code} already exists")
        }
        if(arguments.length !==6){
            throw new error("All fields are required")
        }
        const product = {
            title, description, price, thumbnail, code, stock
        };
        product.id = this.products.length + 1
        this.products.push(product);
    }

    getProducts(){
        console.log(this.products);
        return this.products
    }

    getProductById(id){
        const productFound = this.products.find(product => product.id === Number(id))
        if(productFound){
            console.log(productFound)
            return productFound;
        }else{
            throw new error("There isn't a product with that id")
        }
    }
}

const manager = new ProductManager();