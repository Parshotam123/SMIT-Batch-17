// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

// CallBacks

function processData(data, callback) {
    console.log("Processing: " + data);
    callback();
}

function done() {
    console.log("Task Completed!");
}

processData("User Data", done);


// Array Advanced Methods


// Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// Filter
const ages = [15, 18, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);


// For Each
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit));




