// Define the Address class
class Address {
    city: string;
    country: string;

    // Constructor for Address class
    constructor(city: string = '', country: string = '') {
        this.city = city;
        this.country = country;
    }
}

// Define the Customer class
class Customer {
    first_name: string;
    last_name: string;
    address?: Address | null; // Optional address parameter

    // Constructor for Customer class
    constructor(first_name: string, last_name: string, address: Address | null = null) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
    }
}

// Define the Trip class
class Trip {
    bus_name: string;
    departure_address: Address;
    arrival_address: Address;
    customers: Customer[];

    // Constructor for Trip class
    constructor(bus_name: string, departure_address: Address, arrival_address: Address) {
        this.bus_name = bus_name;
        this.departure_address = departure_address; // Match: departure address
        this.arrival_address = arrival_address; // Match: arrival address
        this.customers = [];
    }

    // Method to add a customer to the trip
    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
}

// Creating address instances
const parisAddress = new Address('Paris', 'France'); // Match: Paris, France
const phnomPenhAddress = new Address('Phnom Penh', 'Cambodia'); // Match: Phnom Penh, Cambodia
const kampotAddress = new Address('Kampot', 'Cambodia'); // Match: Kampot, Cambodia
const siemReapAddress = new Address('Siem Reap', 'Cambodia'); // Match: Siem Reap, Cambodia

// Creating customer instances
const ronan = new Customer('Ronan', 'Ogor', parisAddress); // Match: Ronan Ogor with address
const him = new Customer('Him', 'Hey'); // Match: Him Hey without address
const sovanda = new Customer('Sovanda', 'Chib', phnomPenhAddress); // Match: Sovanda Chib with address

// Creating trip instances
const kakaTrip = new Trip('KAKA Bus', phnomPenhAddress, kampotAddress); // Match: KAKA Bus, Phnom Penh, Kampot
const lyhorTrip = new Trip('LYHOR Express', phnomPenhAddress, siemReapAddress); // Match: LYHOR Express, Phnom Penh, Siem Reap

// Adding customers to trips
kakaTrip.addCustomer(him); // Match: Adding Him to KAKA Trip
kakaTrip.addCustomer(sovanda); // Match: Adding Sovanda to KAKA Trip
kakaTrip.addCustomer(ronan); // Match: Adding Sovanda to KAKA Trip
lyhorTrip.addCustomer(him); // Match: Adding Him to LYHOR Trip
lyhorTrip.addCustomer(sovanda); // Match: Adding Sovanda to LYHOR Trip
// lyhorTrip.addCustomer(ronan); // Match: Adding Ronan to LYHOR Trip

console.log(kakaTrip)
console.log(lyhorTrip)
