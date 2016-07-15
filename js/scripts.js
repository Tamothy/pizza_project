//business_logic
function Pizza(firstName, lastName, size, toppings, quantity, totalPrice) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

//customer information
Pizza.prototype.customerInfo = function () {
  return this.firstName + " " + this.lastName;
}

//calculating price of pizza
Pizza.prototype.pizzaCost = function () {
  var totalToppings = this.toppings.length * .75;
  var onePizza = totalToppings + this.size;
  var totalPrice = onePizza * this.quantity;
  this.totalPrice = totalPrice;
  return this.totalPrice;
}

//total pizza price message
Pizza.prototype.messagePrice = function() {
  return "Your total price is: " + this.totalPrice;
}

//user_interface_logic
$(document).ready(function() {


});
