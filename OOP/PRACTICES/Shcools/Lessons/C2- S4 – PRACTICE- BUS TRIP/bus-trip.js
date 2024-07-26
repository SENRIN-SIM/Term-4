// Define the Address class
var Address = /** @class */ (function () {
    // Constructor for Address class
    function Address(city, country) {
        if (city === void 0) { city = ''; }
        if (country === void 0) { country = ''; }
        this.city = city;
        this.country = country;
    }
    return Address;
}());
// Define the Customer class
var Customer = /** @class */ (function () {
    // Constructor for Customer class
    function Customer(first_name, last_name, address) {
        if (address === void 0) { address = null; }
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
    }
    return Customer;
}());
// Define the Trip class
var Trip = /** @class */ (function () {
    // Constructor for Trip class
    function Trip(bus_name, departure_address, arrival_address) {
        this.bus_name = bus_name;
        this.departure_address = departure_address; // Match: departure address
        this.arrival_address = arrival_address; // Match: arrival address
        this.customers = [];
    }
    // Method to add a customer to the trip
    Trip.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    return Trip;
}());
// Creating address instances
var parisAddress = new Address('Paris', 'France'); // Match: Paris, France
var phnomPenhAddress = new Address('Phnom Penh', 'Cambodia'); // Match: Phnom Penh, Cambodia
var kampotAddress = new Address('Kampot', 'Cambodia'); // Match: Kampot, Cambodia
var siemReapAddress = new Address('Siem Reap', 'Cambodia'); // Match: Siem Reap, Cambodia
// Creating customer instances
var ronan = new Customer('Ronan', 'Ogor', parisAddress); // Match: Ronan Ogor with address
var him = new Customer('Him', 'Hey'); // Match: Him Hey without address
var sovanda = new Customer('Sovanda', 'Chib', phnomPenhAddress); // Match: Sovanda Chib with address
// Creating trip instances
var kakaTrip = new Trip('KAKA Bus', phnomPenhAddress, kampotAddress); // Match: KAKA Bus, Phnom Penh, Kampot
var lyhorTrip = new Trip('LYHOR Express', phnomPenhAddress, siemReapAddress); // Match: LYHOR Express, Phnom Penh, Siem Reap
// Adding customers to trips
kakaTrip.addCustomer(him); // Match: Adding Him to KAKA Trip
kakaTrip.addCustomer(sovanda); // Match: Adding Sovanda to KAKA Trip
kakaTrip.addCustomer(ronan); // Match: Adding Sovanda to KAKA Trip
lyhorTrip.addCustomer(him); // Match: Adding Him to LYHOR Trip
lyhorTrip.addCustomer(sovanda); // Match: Adding Sovanda to LYHOR Trip
// lyhorTrip.addCustomer(ronan); // Match: Adding Ronan to LYHOR Trip
console.log(kakaTrip);
console.log(lyhorTrip);
