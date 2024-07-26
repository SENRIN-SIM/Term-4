var Stores = /** @class */ (function () {
    function Stores(store_name) {
        this.store_name = store_name;
        this.products = [];
        this.customers = [];
    }
    Stores.prototype.addProducts = function (product) {
        this.products.push(product);
    };
    Stores.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    Stores.prototype.displayComments = function () {
        console.log("Comments for each product:");
        this.products.forEach(function (product) {
            console.log("Product: ".concat(product.Pro_name));
            product.Comments.forEach(function (comment) {
                console.log("- ".concat(comment.comments, " (").concat(comment.evaluation, ")"));
            });
            console.log(); // Empty line for separation
        });
    };
    Stores.prototype.displayStoreInfo = function () {
        console.log("Store Name: ".concat(this.store_name));
        console.log("Products:");
        this.products.forEach(function (product) {
            console.log("- ".concat(product.Pro_name, " ($").concat(product.Pro_price, ")"));
        });
        console.log("Customers:");
        this.customers.forEach(function (customer) {
            console.log("- ".concat(customer.Firstname, " ").concat(customer.Lastname));
        });
        console.log(); // Empty line for separation
        this.displayComments(); // Display comments for each product
    };
    return Stores;
}());
var Products = /** @class */ (function () {
    function Products(pro_name, pro_price) {
        this.Pro_name = pro_name;
        this.Pro_price = pro_price;
        this.Comments = [];
    }
    Products.prototype.getFeedback = function (feedback) {
        this.Comments.push(feedback);
    };
    return Products;
}());
var Feetbacks = /** @class */ (function () {
    function Feetbacks(comment, evaluation) {
        this.comments = comment;
        this.evaluation = evaluation;
        this.Commenters = [];
    }
    Feetbacks.prototype.commenter = function (person) {
        this.Commenters.push(person);
    };
    return Feetbacks;
}());
var Customers = /** @class */ (function () {
    function Customers(firstName, lastName) {
        this.Firstname = firstName;
        this.Lastname = lastName;
    }
    return Customers;
}());
var store_01 = new Stores("Senrin-Store");
var product_01 = new Products("Car toy", 322);
var product_02 = new Products("Car Truck", 332);
var feedback_01 = new Feetbacks("It's really nice...", 7);
var feedback_02 = new Feetbacks("I like it!", 8);
var customer_01 = new Customers("Sarey", "Sim");
store_01.addProducts(product_01);
store_01.addProducts(product_02);
store_01.addCustomer(customer_01);
product_01.getFeedback(feedback_01);
product_01.getFeedback(feedback_02);
feedback_01.commenter(customer_01);
feedback_02.commenter(customer_01);
store_01.displayStoreInfo();
