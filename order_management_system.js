// Task 1: Create an Inventory Array of Product Objects
const inventory = [
    {name: "Phone", price: 800, quantity: 20},
    {name: "Tablet", price: 450, quantity: 15},
    {name: "Television", price: 300, quantity: 10},
    {name: "Laptop", price: 600, quantity: 25}
];

// Task 2: Create an Orders Array of Order Objects
let orders = [];

// Task 3: Create a Function to Place an Order
function placeOrder(customerName, items) {
    for(let item of items) { 
        let inventoryItem = inventory.find(invItem => invItem.name === item.name); // Checking if in Inventory
        if (!inventoryItem) {
            return `${item.name} is not in Inventory`;
    }
        if (inventoryItem.quantity < item.quantity) { // Checking if in stock
            return `${item.name} is not in stock`;
    } }
    for(let item of items) {
        let inventoryItem = inventory.find(invItem => invItem.name === item.name);
        inventoryItem.quantity -= item.quantity; // This updates item inventory
    }
let newOrder = {   // Template for Customer orders
    customerName: customerName,
    items: items,
    status: "Pending"
};
orders.push(newOrder)}; // Pushes orders in the orders array, End of Function.
placeOrder("Jennifer Morris", [
    {name: "Phone", quantity: 1},
]);

console.log(orders);

// Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
     return order.items.reduce((total, item) => { // This .reduce is taking the sum of all the numbers
        let inventoryItem = inventory.find(invItem => invItem.name === item.name); // Searching the array for the correct items
        return total + (inventoryItem ? inventoryItem.price * item.quantity : 0) // Taking the items and multiplying the quantity ordered by the price per item.
    }, 0)
};

console.log(calculateOrderTotal(orders[0])); 
