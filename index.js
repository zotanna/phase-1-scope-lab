var customerName = 'bob'
const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob'; 
}
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
      } else {
        console.log("customerName is not a string.");
      }
    }
    function setBestCustomer() {
        bestCustomer = 'not bob';
      }
      var bestCustomer = 'not bob';

function overwriteBestCustomer() {
  bestCustomer = 'new customer';
}
