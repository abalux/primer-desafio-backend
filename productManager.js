
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const codeExists = this.products.some(product => product.code === code)
        if (codeExists){
            console.error("A product with this code already exists")
        }else if(arguments.length !==6){
            console.error("All fields are required")
        }else{
            const product = {
            title, description, price, thumbnail, code, stock
            };
            product.id = this.products.length + 1
            this.products.push(product);
        }
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
            throw new Error("There isn't a product with that id")
        }
    }
}

const manager = new ProductManager();
//testeo
manager.getProducts();
manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);
manager.getProducts();
manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);
manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc124");
manager.getProductById(1);
manager.addProduct("producto prueba b", "este es un producto prueba b", 300, "sin imagen", "abc125", 25);
manager.getProducts();
manager.getProductById(2);