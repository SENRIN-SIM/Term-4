class Stores {
    store_name: string;
    products: Products[];
    customers: Customers[];

    constructor(store_name:string){
        this.store_name = store_name;
        this.products = [];
        this.customers = [];
    }

    addProducts(product: Products){
        this.products.push(product);
    }

    addCustomer(customer: Customers){
        this.customers.push(customer);
    }

    displayComments() {
        console.log("Comments for each product:");
        this.products.forEach(product => {
            console.log(`Product: ${product.Pro_name}`);
            product.Comments.forEach(comment => {
                console.log(`- ${comment.comments} (${comment.evaluation})`);
            });
            console.log(); // Empty line for separation
        });
    }

    displayStoreInfo() {
        console.log(`Store Name: ${this.store_name}`);
        console.log("Products:");
        this.products.forEach(product => {
            console.log(`- ${product.Pro_name} ($${product.Pro_price})`);
        });
        console.log("Customers:");
        this.customers.forEach(customer => {
            console.log(`- ${customer.Firstname} ${customer.Lastname}`);
        });
        console.log(); // Empty line for separation
        this.displayComments(); // Display comments for each product
    }
}

class Products {
    Pro_name: string;
    Pro_price: number;
    Comments: Feetbacks[];

    constructor(pro_name:string, pro_price:number){
        this.Pro_name = pro_name;
        this.Pro_price = pro_price;
        this.Comments = [];
    }

    getFeedback(feedback: Feetbacks){
        this.Comments.push(feedback);
    }
}

class Feetbacks {
    comments: string;
    evaluation: number;
    Commenters: Customers[];

    constructor(comment:string, evaluation:number){
        this.comments = comment;
        this.evaluation = evaluation;
        this.Commenters = [];
    }

    commenter(person: Customers){
        this.Commenters.push(person);
    }
}

class Customers{
    Firstname: string;
    Lastname: string;

    constructor(firstName:string, lastName:string){
        this.Firstname = firstName;
        this.Lastname = lastName;
    }
}

let store_01 = new Stores("Senrin-Store");
let product_01 = new Products("Car toy", 322)
let product_02 = new Products("Car Truck", 332)
let feedback_01 = new Feetbacks("It's really nice...", 7);
let feedback_02 = new Feetbacks("I like it!", 8);
let customer_01 = new Customers("Sarey", "Sim")

store_01.addProducts(product_01);
store_01.addProducts(product_02);
store_01.addCustomer(customer_01);
product_01.getFeedback(feedback_01);
product_01.getFeedback(feedback_02);
feedback_01.commenter(customer_01);
feedback_02.commenter(customer_01);

store_01.displayStoreInfo();
