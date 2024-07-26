var Stores = /** @class */ (function () {
    function Stores(store_name) {
        this.store_name = store_name;
        this.products = [];
        this.customers = [];
    }
    Stores.prototype.addProducts = function (producte) {
        this.products.push(producte);
    };
    Stores.prototype.addCustomer = function (Customer) {
        this.customers.push(Customer);
    };
    Stores.prototype.displayFeetback = function () {
        this.products.forEach(function (producte) {
            console.log("".concat(producte.Pro_name, " and price ").concat(producte.Pro_price));
            producte.Comments.forEach(function (commenter) {
                commenter.Commenters.forEach(function (customer) {
                    console.log("Commente for ".concat(producte.Pro_name, " is ").concat(commenter.comments, " evaluation ").concat(commenter.evaluation, " from customer ").concat(customer.Firstname));
                });
            });
        });
    };
    Stores.prototype.displayStorInf = function () {
        console.log("From store ".concat(this.store_name));
        this.customers.forEach(function (customer) {
            console.log("Store customer name is ".concat(customer.Firstname, " ").concat(customer.Lastname));
        });
        this.displayFeetback();
    };
    Stores.prototype.getProLessthan = function (price) {
        this.products.forEach(function (producte) {
            if (producte.Pro_price < price) {
                console.log(producte);
            }
        });
    };
    return Stores;
}());
var Products = /** @class */ (function () {
    function Products(pro_name, pro_price) {
        this.Pro_name = pro_name;
        this.Pro_price = pro_price;
        this.Comments = [];
    }
    Products.prototype.getFeedback = function (comments) {
        this.Comments.push(comments);
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
var store_02 = new Stores("Sreypov-Store");
var Producte_01 = new Products("Car toy", 322);
var Producte_02 = new Products("Car Truck", 332);
var comment_01 = new Feetbacks("It's really nice...", 7);
var comment_02 = new Feetbacks("It's really nice...", 8);
var customer_01 = new Customers("Sarey", "Sim");
var customer_02 = new Customers("Janroth", "Sim");
store_01.addProducts(Producte_01);
store_01.addProducts(Producte_02);
store_01.addCustomer(customer_01);
store_02.addProducts(Producte_01);
store_02.addProducts(Producte_02);
store_02.addCustomer(customer_02);
Producte_01.getFeedback(comment_01);
Producte_02.getFeedback(comment_02);
comment_01.commenter(customer_01);
comment_02.commenter(customer_01);
// store_01.displayStorInf();
// store_02.displayStorInf();
// console.log(store_01);
// console.log(store_01.getProLessthan(331))
console.log(store_01.displayFeetback());
