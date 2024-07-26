class Stores {
    store_name: string;
    products: Products[];
    customers: Customers[];

    constructor(store_name:string){
        this.store_name = store_name;
        this.products = [];
        this.customers = [];
    }

    
    addProducts(producte){
        this.products.push(producte)
    }
    addCustomer(Customer){
        this.customers.push(Customer)
    }

    displayFeetback(){
        this.products.forEach(producte=>{
            console.log(`${producte.Pro_name} and price ${producte.Pro_price}`);
            producte.Comments.forEach(commenter=>{
                commenter.Commenters.forEach(customer=>{
                    console.log(`Commente for ${producte.Pro_name} is ${commenter.comments} evaluation ${commenter.evaluation} from customer ${customer.Firstname}`); 
                })
            })
        })
    }

    displayStorInf(){
        console.log(`From store ${this.store_name}`);
        this.customers.forEach(customer=>{
            console.log(`Store customer name is ${customer.Firstname} ${customer.Lastname}`);
            
        })
        
        this.displayFeetback()
    }

    getProLessthan(price:number){
        this.products.forEach(producte=>{
             if (producte.Pro_price < price){
                console.log(producte)
             }   
        })

    }
}

class Products {
    Pro_name: string;
    Pro_price: number;
    Comments: Feetbacks[]

    constructor(pro_name:string, pro_price:number){
        this.Pro_name = pro_name;
        this.Pro_price = pro_price;
        this.Comments = [];
    }

    getFeedback(comments){
        this.Comments.push(comments);
    }
}

class Feetbacks {
    comments:string;
    evaluation:number;
    Commenters: Customers[]

    constructor(comment:string, evaluation:number){
        this.comments = comment;
        this.evaluation = evaluation;
        this.Commenters = []
    }

    commenter(person){
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
let store_02 = new Stores("Sreypov-Store");

let Producte_01 = new Products("Car toy", 322)
let Producte_02 = new Products("Car Truck", 332)

let comment_01 = new Feetbacks("It's really nice...", 7);
let comment_02 = new Feetbacks("It's really nice...", 8);

let customer_01 = new Customers("Sarey", "Sim")
let customer_02 = new Customers("Janroth", "Sim")

store_01.addProducts(Producte_01);
store_01.addProducts(Producte_02);
store_01.addCustomer(customer_01);

store_02.addProducts(Producte_01);
store_02.addProducts(Producte_02);
store_02.addCustomer(customer_02);

Producte_01.getFeedback(comment_01);
Producte_02.getFeedback(comment_02);

comment_01.commenter(customer_01)
comment_02.commenter(customer_01)

store_01.displayStorInf();
store_02.displayStorInf();
console.log(store_01);
console.log(store_01.getProLessthan(331))
console.log(store_01.displayFeetback())







