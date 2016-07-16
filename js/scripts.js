// business logic
function Pizza(firstName, lastName, size, toppings, quantity) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}
// customer information
Pizza.prototype.customerInfo = function () {
  return this.firstName + " " + this.lastName;
}
// calculating price of pizza
Pizza.prototype.pizzaCost = function () {
  var size;
  if (this.size === "Small") {
    size = 10;
  } else if (this.size === "Medium") {
    size = 12;
  } else if (this.size === "Large") {
    size = 14;
  } else if (this.size === "X-Large") {
    size = 16;
  }
  var toppings = this.toppings.length * .75;
  var onePizza = toppings + size;
  var total = onePizza * this.quantity;
  this.totalPrice = total;
  return "$" + this.totalPrice;
}

// user interface logic
$(document).ready(function() {
  $("form#new-pizza-customer").submit(function(event) {
    event.preventDefault();
    // grab values from form
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedSize = $("select#size").val();
    var inputtedToppings = [];
    $(":checkbox:checked").each(function(topping){
      inputtedToppings[topping] = $(this).val();
    });
    var inputtedQuantity = $("select#quantity").val();
    // instance of pizza constructor
    var pizzaOrder = new Pizza(inputtedFirstName, inputtedLastName, inputtedSize, inputtedToppings, inputtedQuantity);
    // order info
    $("#pizza-info").show();
    $(".full_name").text(pizzaOrder.customerInfo());
    $(".pizza_size").text(pizzaOrder.size);
    $(".pizza_toppings").text(pizzaOrder.toppings);
    $(".pizza_quantity").text(pizzaOrder.quantity);
    $(".total_price").text(pizzaOrder.pizzaCost());
    // clear form after submit
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("select#size").val("");
    $(":checkbox:checked").prop("checked", false);
    $("select#quantity").val("");
  });
});
