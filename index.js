// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'someone else';
}

upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer(); // This will throw an error

console.log(customerName); // Output: BOB
console.log(bestCustomer); // Output: maybe bob
console.log(leastFavoriteCustomer); // Output: someone

