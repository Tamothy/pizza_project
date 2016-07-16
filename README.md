# Timeless Tamothy's Pizza

#### Pizza ordering form that results in displaying ordering information, 07.15.2016

#### By Tam Nguyen

## Description

This project contains a pizza form that takes in name, pizza size, toppings, quantity, and displays the total price. The project focused on object constructors and prototypes.

## BDD Specifications

| Behavior                                                | Input         | Output    |
| --------------------------------------------------------|:-------------:| ---------:|
| It returns your first name                              | John          | "John"    |
| It returns your first and last name                     | John Doe      | "John Doe"|
| It returns the pizza size                               | Medium        | "Medium"  |
| It returns one pizza topping                            | Pepperoni     | "pepperoni" |
| It returns more than one pizza topping selected         | Pepperoni, Extra cheese | ["pepperoni", "extra cheese"] |
| It returns the quantity                                 | 2             | 2         |
| It returns the price for one pizza                      | Medium, Pepperoni, 1 | 12.75 |
| It returns the price for two pizzas                     | Medium, Pepperoni, 2 | 25.50 |

## Setup/Installation Requirements

* Check out the GitHub pages link: https://tamothy.github.io/pizza_project
* Clone repository if interested in changing project
* Use Atom to customize changes
* Make sure to commit regularly on terminal
* Don't forget to push to remote repository

## Known Bugs

The process for this project was working with the back-end logic, then index.html, and finally front-end logic. This process was smoother, but still ran into some obstacles. For instance, when determining the price for the pizza size my initial thought was to take the integer value of pizza size from index.html and pass the value through the pizza cost method, however, the values were strings. Another example was the pizza toppings, in such that we needed an array to keep track of the pizza toppings selected. Nonetheless, if interested in changing the project, my advice is to be aware of the data types when creating the back-end and front-end logic.

## Support and contact details

Tam Nguyen's email: mr.tamron@gmail.com

## Technologies Used

HTML

CSS

JavaScript

JQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Tam Nguyen**
