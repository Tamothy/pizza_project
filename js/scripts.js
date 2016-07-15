//business_logic
function Pizza(firstName, lastName, toppings, size, quantity, total) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
  this.totalPrice = total;
}

//customer information
Pizza.prototype.customerInfo = function () {
  return this.firstName + " " + this.lastName;
}

//calculating price of pizza
Pizza.prototype.pizzaCost = function () {
  var totalToppings = this.toppings.length * .75;
  var onePizza = totalToppings + this.size;
  var total = onePizza * this.quantity;
  this.totalPrice = total;
  return this.totalPrice;
}

//total pizza price message
Pizza.prototype.messagePrice = function() {
  return "Your total price is: " + this.totalPrice;
}

//user_interface_logic
$(document).ready(function() {
});
